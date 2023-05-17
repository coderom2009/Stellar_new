import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                
                <ImageBackground source={require('../assets/bg.jpeg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                       
                        <Text style={styles.titleText}>Stellar</Text>

                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCraft")
                    }>
                        
                        <Image source={require("../assets/donw_bg.jpeg")} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>SpaceCraft</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                       
                        <Image source={require("../assets/star_pics.jpeg")} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Star Map</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        
                        <Image source={require("../assets/space_pics.jpeg")} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.125,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 17.5,
        backgroundColor: 'black',
        borderColor: 'grey',
        borderWidth: 1
    },
    titleBar: {
        flex: 0.665,
        marginTop:20,
        marginLeft:30
    },
    titleText: {
        fontSize: 70,
        fontWeight: "400",
        color: "white",
        marginBottom: 300,
        textAlign: 'left'
    },
    routeText: {
        fontSize: 30,
        fontWeight: 300,
        color: 'white',
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute'
    },
    routeImage: {
        width: '100%', 
        height: '100%', 
        borderRadius: 17.5, 
        opacity: 0.5
    }
});