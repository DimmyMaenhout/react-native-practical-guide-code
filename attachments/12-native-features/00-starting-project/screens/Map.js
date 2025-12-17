import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Map() {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78, // center of the map
    longitude: -122.43,
    latitudeDelta: 0.0922, // how much content besides the center will be visible
    longitudeDelta: 0.0421
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title='Picked location'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
