import BackgroundGeolocation from 'react-native-background-geolocation';
import Places from 'node-googleplaces';
import Firebase from './Firebase';

const m = 'Tracker: ';

export default class Tracker {
  constructor() {

    // TODO: this should be server side, only for prototype
    this.places = new Places('AIzaSyB3AvZjIO5txxyRAlTQqhFLq2Sh6TC0S5M');

    // bindings
    this.findNearby = this.findNearby.bind(this);
    this.onMotion = this.onMotion.bind(this);
    this.onError = this.onError.bind(this);
    this.off = this.off.bind(this);

    // setup
    BackgroundGeolocation.on('motionchange', this.onMotion);
    BackgroundGeolocation.on('error', this.onError);
    BackgroundGeolocation.configure({
      desiredAccuracy: 0,
      stationaryRadius: 25,
      distanceFilter: 10,
      stopTimeout: 1,
      stopOnTerminate: false,
      startOnBoot: true
    }, state => {
      if (!state.enabled) {
        BackgroundGeolocation.start();
      }
    });
  }

  findNearby(lat, lng) {
    return this.places.nearbySearch({
      location: `${lat},${lng}`,
      radius: 50,
      opennow: true,
      type: 'restaurant',
      rankBy: 'distance'
    }).then(response => response.body.results);
  }

  onMotion(state) {
    let location = state.location.coords;
    let isMoving = state.isMoving;

    // only log if stationary and logged in
    Firebase.auth().currentUser
    && !isMoving && this.findNearby(location.latitude, location.longitude)
      .then(places => {

        // TODO: remove after prototype, checking if data is logged
        Firebase.database().ref(
          `users/${Firebase.auth().currentUser.uid}/checkins`
        ).child(Date.now()).set({
          latitude: location.latitude,
          longitude: location.longitude
        });

        // only log the closest one
        if (places.length > 0) {
          let place = places[0];

          // update with new resto data
          // TODO: move server side, only for prototype
          Firebase.database().ref(
            `restaurants/${place.place_id}`
          ).update({
            name: place.name,
            longitude: place.geometry.location.lng,
            latitude: place.geometry.location.lat,
            address: place.vicinity || '',
            photos: place.photos || null,
          });

          // and finally, with today's visit
          Firebase.database().ref(
            `visits/${Firebase.auth().currentUser.uid}/${place.place_id}`
          ).child(Date.now()).set(true);
        }
      }).catch(this.onError);
  }

  onError(error) {
    console.log(m, 'Error: ', error);
  }

  off() {
    BackgroundGeolocation.un('error', this.onError);
    BackgroundGeolocation.un('motionchange', this.onMotion);
  }
}
