import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import HomeImage from '../../assets/images/bgscreen.png';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ParkCar from './park/ParkCar';
import ParkMotobike from './park/ParkMotobike';
import ParkElectric from './park/ParkElectric';
import Feather from 'react-native-vector-icons/Feather';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function Parking() {
    let navigation = useNavigation();
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });
    }, []);
    return <View style={styles.wrapper}>
        <ImageBackground source={HomeImage} style={styles.image}>
            <View style={styles.wrapContent}>

                <TabHeader />

            </View>

        </ImageBackground>
    </View >
}

function TabHeader() {

    return <View style={{ flex: 1 }}>
        <Tab.Navigator tabBarOptions={{
            scrollEnabled: false,
        }}>
            <Tab.Screen name="ParkCar" component={ParkCar} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><FontAwesome5 name="car" size={14} color={color} /> Ô tô</Text>
            }} />
            <Tab.Screen name="ParkMotobike" component={ParkMotobike} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><FontAwesome5 name="motorcycle" size={14} color={color} /> Xe máy</Text>
            }} />
            <Tab.Screen name="ParkElectric" component={ParkElectric} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><FontAwesome5 name="biking" size={14} color={color} /> Xe điện</Text>
            }} />
        </Tab.Navigator>
    </View>
}




const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        position: 'relative'
    },
    imageBanner: {
        height: '100%'
    },

    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',


    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%',
        zIndex: 1
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%',
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 3
    },
    wrapText: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 100,
        backgroundColor: '#006633',
        width: '100%',
        paddingTop: 30,
        position: 'relative',
        borderBottomColor: '#282828',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    btnBack: {
        position: 'absolute',
        left: 15,
        top: 50
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff'
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        height: 29,
        marginTop: 20,
        marginLeft: 14,
        marginRight: 14
    },
    wrapItem: {
        width: '33.333%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textItem: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    active: {
        backgroundColor: '#006633',
    },
    noneBorder: {
        borderTopLeftRadius: 0,
        borderBottomStartRadius: 0,
    },
    features: {
        height: 314,
        backgroundColor: '#fff',
        marginTop: 0,
        marginLeft: 15,
        marginRight: 15
    },
    numberCar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        padding: 10
    },
    textNumber: {
        marginRight: 15,
        fontSize: 14
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    featureInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        width: 150,
        height: 40,
        borderRadius: 15,
        paddingLeft: 8,
    },
    wrapBtn: {
        padding: 10,

        marginTop: 15,
        borderRadius: 10
    },
    textPrice: {
        fontSize: 15,
        fontWeight: '700'
    }
});