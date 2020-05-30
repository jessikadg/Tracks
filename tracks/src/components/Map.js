import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import '../_mockLocation';

const Map = () => {
    const { state: {currentLocation} } =  useContext(LocationContext);
    
    

    return (
    <MapView 
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01,
        }}
    />
        //Circle 
       //     center={location.coords}
         //   radius={100}
           // strokeColor="rgba(158, 158, 255, 1.0)"
            //fillColor="rgba(158, 158, 255, 0.3)"
        //
         
    
     
    
   
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;


