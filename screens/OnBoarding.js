import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    Image
} from "react-native";

import Onboarding from 'react-native-onboarding-swiper';



export default class OnBoardingScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Onboarding
                onSkip={() => this.props.navigation.replace("Home")}
                onDone={() => this.props.navigation.navigate("Home")}
  pages={[
    {
      backgroundColor: 'black',
      image: <Image source={require('../assets/main_scrn.jpeg')} style={{width: 325, height:500, marginTop: -75}}/>,
      title: 'Welcome to Stellar',
      subtitle: "",
      titleStyles: {fontSize: 39, fontWeight: '300'},
      subTitleStyles: {height: 0, width: 0}
    },
    {
        backgroundColor: 'black',
        image: <Image source={require('../assets/spaceship_img.png')} style={{width: 300, height:400, marginTop: -100}}/>,
        title: 'Space Ship',
        subtitle: 'In Progess. Swipe left for available features',
        titleStyles: {fontSize: 30, fontWeight: '400'},
        subTitleStyles: {fontSize: 18, fontWeight: '200'}
      },
      {
        backgroundColor: 'black',
        image: <Image source={require('../assets/abc.jpeg')} style={{width: 260, height:260, borderRadius: 130}}/>,
        title: 'Star Map',
        subtitle: 'Constellations of your sky right in your phone',
        titleStyles: {fontSize: 30, fontWeight: '400'},
        subTitleStyles: {fontSize: 18, fontWeight: '200'}
      },
      {
        backgroundColor: 'black',
        image: <Image source={require('../assets/img_scrn.jpeg')} style={{width: 275, height:325}}/>,
        title: 'Daily Pictures',
        subtitle: 'See and Learn something new everyday.',
        titleStyles: {fontSize: 30, fontWeight: '400'},
        subTitleStyles: {fontSize: 18, fontWeight: '200'}
      },
  ]}
/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});