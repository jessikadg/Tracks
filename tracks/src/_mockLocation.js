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
            longitude:0.000000 + increment * tenMetersWithDegress,
            latitude:0.000000 + increment * tenMetersWithDegress,
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
