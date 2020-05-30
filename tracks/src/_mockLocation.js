import * as Location from 'expo-location';


const tenMetersWithDegress = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 1,
            longitude:4.805060 + increment * tenMetersWithDegress,
            latitude:52.381890 + increment * tenMetersWithDegress,
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);