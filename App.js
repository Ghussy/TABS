import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Loader from 'react-native-mask-loader';
import Logo from './assets/images/splash-pill.png'




export default class LinksScreen extends React.Component {


  constructor(props) {
    super();

    this.state = {
      appReady: false,
      rootKey: Math.random(),
      isLoadingComplete: false,
      setLoadingComplete: false,
      _image: Logo
    };
  }

  componentDidMount = async () => {
   await this.resetAnimation();
    this.loadResourcesAsync();
  }

  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random()
    });
  
    setTimeout(() => {
      this.setState({
        appReady: true,
        isLoadingComplete: true,
      });
    }, 2000);
  }


  loadResourcesAsync = async () => {
    return await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ])
    ]);
  }

  handleLoadingError = (error) => {
    console.warn(error);
  }

  handleFinishLoading = (setLoadingComplete) => {
    this.setState({ 
      setLoadingComplete: true
    })
  }
  
 

render() {

  console.log(
    `appReady: ${this.state.appReady}`,
    `isLoadingComplete: ${this.state.isLoadingComplete}`,
    `setLoadingComplete: ${this.state.setLoadingComplete}`,
)
  


  // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
  //   return (
  //     <Loader
  //     isLoaded={this.state.isLoadingComplete}
  //     imageSource={this.state._image}
  //     backgroundStyle={styles.loadingBackgroundStyle}
  //     >
  //     <AppLoading
  //       startAsync={this.loadResourcesAsync}
  //       onError={this.handleLoadingError}
  //       onFinish={() => this.handleFinishLoading(this.state.setLoadingComplete)}
  //     >
  //     </AppLoading>
  //     </Loader>
  //   );
  // } else {
  //   return (

  //     <View key={this.state.rootKey} style={styles.root}>
  //     <Loader
  //       isLoaded={this.state.isLoadingComplete}
  //       imageSource={this.state._image}
  //       backgroundStyle={styles.loadingBackgroundStyle}
  //     >
  //       <View style={styles.container}>
  //         <Button onPress={() => {
  //           this.resetAnimation();
  //         }} title="See it again">
  //         </Button>
  //         <AppNavigator />
  //       </View>
  //     </Loader>
  //   </View>

  //   );
  // }
 

  return(
  <View key={this.state.rootKey} style={styles.root}>
    <Loader
      isLoaded={this.state.isLoadingComplete}
      imageSource={this.state._image}
      backgroundStyle={styles.loadingBackgroundStyle}
    >
      <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>

    </Loader>
  </View>
  )
  
     }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  root: {
    flex: 1,
  },
  loadingBackgroundStyle: {
    backgroundColor: '#F5C3C2'
  },
});
