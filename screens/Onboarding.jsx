import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 'one',
        title: 'WELCOME TO HEALTH MANAGEMENT APP',
        text: 'A place where you can track your health and fitness activities.',
        image: require('../assets/images/onImage1.png'),
    },
    {
        key: 'two',
        title: 'Plan Your Health',
        text: 'Plan your health and fitness activities and track your progress.',
        image: require('../assets/images/onImage2.png'),
    },
    {
        key: 'three',
        title: 'ENJOY A HEALTHIER LIFE TODAY',
        text: 'Let\'s get started with your health and fitness journey.',
        image: require('../assets/images/onImage3.png'),
    }
]

export default class App extends Component {

    state = { showHomePage: false }

    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'cover',
                        height: '50%',
                        width: '50%%'
                    }}
                />
                <Text
                    style={{
                        paddingTop: 25,
                        paddingBottom: 10,
                        fontSize: 23,
                        fontWeight: 'bold',
                        color: '#21465B',
                        alignSelf: 'center'
                    }}>
                    {item.title}
                </Text>
                <View>

                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#b5b5b5',
                            fontSize: 15,
                            paddingHorizontal: 30
                        }}>
                        {item.text}
                    </Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <AppIntroSlider
                renderItem={this.renderItem}
                data={slides}
                activeDotStyle={{
                    backgroundColor: '#21465B',
                    width: 30
                }}
            />
        )
    }
}