import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar, Linking, ScrollView } from 'react-native';

 import axios from 'axios';
// import {axios} from 'axios';
// import axios from axios;
// import "axios" from axios;

export default class DailyPicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apod: []
        };
    }

    componentDidMount() {
        this.getAPOD()
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=2uESlXFhq1jFElOtdJaDt8kNHIkANBN8YW5bzX7J")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    renderImage = (url) => {

         <Image source={{ "uri": url }} 
         style={{ width: "100%", height: 300, 
        borderRadius: 20, margin: 3 }}>
         </Image>

        // <Image source={ "uri": url }
        // style={{ width: "100%", height: 300, 
        //borderRadius: 20, margin: 3 }}>
        // </Image>
        
        // <Image source={{ "uri"= url }} 
        // style={{ width: "100%", height: 300, 
        //borderRadius: 20, margin: 3 }}>
        // </Image>
        
        // <Image require={{ "uri": url }} 
        // style={{ width: "100%", height: 300, 
        //borderRadius: 20, margin: 3 }}>
        // </Image>
        
    }

    renderVideo = () => {
        <TouchableOpacity style={styles.listContainer}
            onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
        >
            <View style={styles.iconContainer}>
                <Image source={require("../assets/play-video.png")} style={{ width: 50, height: 50 }}></Image>
            </View>
        </TouchableOpacity >
    }

    render() {
        const url = this.state.apod.url
        if (Object.keys(this.state.apod).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black' }}>
                    <Text style={{color:'white'}}>Loading</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/pics.jpeg')} style={styles.backgroundImage}>

                        <ScrollView style={styles.listContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                            >
                                <Image source={{ "uri": url }} style={{ width: "100%", height: 300, borderRadius: 10 }}></Image>
                            </TouchableOpacity >
                            <View style={{ padding: 20 }}>
                                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                                <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        fontSize: 35
    },
    explanationText: {
        fontSize: 20,
        fontWeight: 500,
        color: "#f0f0f0",
        marginTop: 10
        // margin: 10,
        // textAlign: 'center'
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});

