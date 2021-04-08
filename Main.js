import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

class Main extends Component {
  render() {
    return (
      <View>
          <Header />
          <ScrollView>
              <Text>This is the main page!</Text>
          </ScrollView>
      </View>
    );
  }
}

const Header = () => {
    return (
        <View style={{
            backgroundColor: "rgba(97, 97, 97, 1)",
            flexDirection: 'row',
            height: 65,
            top: 0,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'space-between',
            
        }}>
            <Text style={{
                fontSize: 35,
                paddingTop: 20,
                paddingLeft: 15,
            }}>☰</Text>
        </View>
    )
}

export default Main;