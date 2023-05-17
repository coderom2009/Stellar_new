import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'black'
                }}>
                <Text style={{color: 'white', fontSize: 25}}>Not ready yet.</Text>
            </View>
        )
    }
}