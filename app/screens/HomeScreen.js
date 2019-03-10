import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import UserCarousel from '../components/UserCarousel';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  initialRegion = {
    latitude: 37.600425,
    longitude: -122.385861,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  constructor() {
    super();
    this.state = {
      users: [
        { name: "motti", id: 1, rating: 5, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "moshe", id: 2, rating: 4, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "david", id: 3, rating: 3, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "matt", id: 4, rating: 1, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "mojo", id: 5, rating: 2, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "nepton", id: 6, rating: 4, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "dave", id: 7, rating: 3, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "jack", id: 8, rating: 2, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "mordechai", id: 9, rating: 5, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "sima", id: 10, rating: 5, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "sonya", id: 11, rating: 3, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "boris", id: 12, rating: 5, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" },
        { name: "nave", id: 13, rating: 2, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={this.initialRegion}>
        </MapView>
        <View pointerEvents="none" style={styles.members}>
          {this.createUserCards()}
        </View>
      </View>
    );
  };

  createUserCards() {
    const { users } = this.state;
    if (users === null) {
      return (
        <View>
          <Text>No Users Found</Text>
        </View>
      );
    }
    return (
      <UserCarousel users={users}></UserCarousel>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  users: {

  }
});
