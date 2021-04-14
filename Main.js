import React, { Component, useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Platform, TouchableHighlight } from 'react-native';
import axios from 'axios';
import MenuIcon from "./assets/menu/hamburger.png";
import DefPFP from './assets/user/defaultpicture.png';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            HeaderBarHeight: 63,
            HeaderBarMarginTop: 0,
            HeaderBarMarginBottom: 0,
        }
    }
    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.setState({ HeaderBarHeight: 63 })
            this.setState({ HeaderBarMarginBottom: 10 })
            this.setState({ HeaderBarMarginTop: 25 })
        } else {
            this.setState({ HeaderBarHeight: 55 })
            this.setState({ HeaderBarMarginBottom: 10 })
            this.setState({ HeaderBarMarginTop: 10 })
        }
    }

    SendAPI() {
        
    }

    render() {
        return (
            <View>
                <Header BarHeight={this.state.HeaderBarHeight} marginTopHeader={this.state.HeaderBarMarginTop} marginBottomHeader={this.state.HeaderBarMarginBottom} />
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
        alert("Profile Header!");
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
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        marginBottom: props.marginBottomHeader,
                        marginTop: props.marginTopHeader,
                    }}
                    source={MenuIcon} />
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor="rgba(168, 168, 168, 0.3)"
                onPress={() => onProfilePress()}
            >
                <Image
                    style={{
                        height: 30,
                        width: 30,
                        resizeMode: 'cover',
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: props.marginTopHeader,
                        marginBottom: props.marginBottomHeader,
                        borderRadius: 100,
                    }}
                    source={DefPFP} />
            </TouchableHighlight>
        </View>
    )
}

export default Main;