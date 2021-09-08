import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VehicleCar from '../components/profile/vehicle/VehicleCar';
import VehicleCarBig from '../components/profile/vehicle/VehicleCarBig';
import VehicleEletric from '../components/profile/vehicle/VehicleEletric';
import VehicleMotorbike from '../components/profile/vehicle/VehicleMotorbike';
import Feather from 'react-native-vector-icons/Feather';
import { FontAwesome5 } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();

export default function Vehicle({ navigation }) {

    return <View style={styles.wrapper}>

        <TabHeader />

    </View>
}

function TabHeader() {

    return <View style={{ flex: 1 }}>
        <Tab.Navigator tabBarOptions={{
            scrollEnabled: true,
        }}>
            <Tab.Screen name="VehicleCar" component={VehicleCar} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}> Xe ô tô 5 chỗ</Text>
            }} />
            <Tab.Screen name="VehicleCarBig" component={VehicleCarBig} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}> Xe ô tô 7 chỗ</Text>
            }} />
            <Tab.Screen name="VehicleMotorbike" component={VehicleMotorbike} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}> Xe máy</Text>
            }} />
            <Tab.Screen name="VehicleEletric" component={VehicleEletric} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}> Xe điện</Text>
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
        backgroundColor: '#D3D3D3',
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 150,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        opacity: 0.4,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    test: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    }
});