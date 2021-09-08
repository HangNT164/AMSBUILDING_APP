import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import NotifiImage from '../assets/images/notifi.png'
import { AntDesign } from '@expo/vector-icons';

export default function Notifi() {
    return <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={styles.wrapTime}>
                <View style={styles.wrapDay}>
                    <Text style={styles.day}>30/5/2021</Text>
                </View>

                <View style={styles.time}>
                    <AntDesign name="check" size={18} color="black" />
                    <Text>&nbsp; 19:08</Text>
                </View>
            </View>

            <View style={styles.image}>
                <Image source={NotifiImage} />
                <Text style={styles.text}>Vivamus efficitur vestibulum elit id semper. Donec eleifend metus justo, ac luctus arcu finibus non. Phasellus dignissim diam ac ipsum egestas malesuada</Text>
            </View>

        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15
    },
    wrapTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapDay: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    day: {
        color: '#9966FF',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        marginTop: 20,
        lineHeight: 20,
        color: 'black',
        backgroundColor: 'white'
    }
})