import React from 'react';
import { ScrollView, StyleSheet, View, Button, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Loader from 'react-native-mask-loader';
import Logo from '../assets/images/twitter.png'

export default class LinksScreen extends React.Component {
  state = {
    appReady: false,
    rootKey: Math.random(),
  };
  constructor() {
    super();

    this._image = Logo;
  }

  componentDidMount() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random()
    });
  
    setTimeout(() => {
      this.setState({
        appReady: true,
      });
    }, 1000);
  }

render() {
  return (
    <View key={this.state.rootKey} style={styles.root}>
   <Text>Hello</Text>
  </View>
  );
}}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBackgroundStyle: {
    backgroundColor: 'rgba(125, 125, 255, 1)',
  },
});
