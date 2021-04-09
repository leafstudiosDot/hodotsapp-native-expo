import React, { Component, useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Platform, TouchableHighlight } from 'react-native';
import MenuIcon from "./assets/menu/hamburger.png";
import DefPFP from './assets/user/defaultpicture.png';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            HeaderBarHeight: 63,
            HeaderBarMarginTop: 15,
        }
    }
    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.setState({ HeaderBarHeight: 63 })
        } else {
            this.setState({ HeaderBarHeight: 55 })
            this.setState({ HeaderBarMarginTop: 0 })
        }
    }
    render() {
        return (
            <View>
                <Header BarHeight={this.state.HeaderBarHeight} marginTopHeader={this.state.HeaderBarMarginTop} />
                <ScrollView>
                    <Text>This is the main page!</Text>
                </ScrollView>
            </View>
        );
    }
}


const Header = (props) => {
    function onMenuPress() {
        alert("Header!");
    };

    function onProfilePress() {
        alert("Header!");
    };

    return (
        <View style={{
            backgroundColor: "rgba(97, 97, 97, 1)",
            flexDirection: 'row',
            height: props.BarHeight,
            top: 0,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'space-between',

        }}>
            <TouchableHighlight
                underlayColor="rgba(168, 168, 168, 0.3)"
                onPress={() => onMenuPress()}
            >
                <Image
                    style={{
                        height: 20,
                        width: 20,
                        marginTop: props.marginTopHeader,
                        marginLeft: 15,
                    }}
                    source={MenuIcon} />
            </TouchableHighlight>

            <Image
                style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'cover',
                    marginTop: props.marginTopHeader,
                    marginRight: 10,
                    borderRadius: 100,
                }}
                source={DefPFP} />
        </View>
    )
}

export default Main;