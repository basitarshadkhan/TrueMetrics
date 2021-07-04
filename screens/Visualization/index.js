import React from "react";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { View, Text } from "react-native";

const Visualization = (props) => {
  const data = props.route.params?.data;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: data[0].origin.latitude,
          longitude: data[0].origin.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        zoomEnabled
        toolbarEnabled
        showsCompass
        showsIndoors
        loadingEnabled
        loadingIndicatorColor="#606060"
        loadingBackgroundColor="#ffffff"
      >
        <MapViewDirections
          origin={data[0].origin}
          destination={data[0].destination}
          apikey={""}
        />
      </MapView>
    </View>
  );
};

export default Visualization;
