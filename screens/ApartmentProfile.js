import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import moment from 'moment';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LoadingProgressBar from '../components/LoadingProgressBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import ApartmentTerm from './ApartmentTerm';
import Management from './Management';

const Tab = createMaterialTopTabNavigator();

export default function ApartmentProfile() {

    return <View style={styles.container}>

        <TabHeader />

    </View>
}

function TabHeader() {

    return <View style={{ flex: 1 }}>
        <Tab.Navigator tabBarOptions={{
            scrollEnabled: false,
        }}>
            <Tab.Screen name="Management" component={Management} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="users" size={14} color={color} /> Ban quản lý</Text>
            }} />
            <Tab.Screen name="ApartmentTerm" component={ApartmentTerm} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="bookmark" size={14} color={color} /> Điều khoản chung cư</Text>
            }} />

        </Tab.Navigator>
    </View>
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    separator: {
        height: 1, backgroundColor: '#ddd', width: '100%'
    },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    item: {
        marginTop: 5,
        marginBottom: 5
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    name: {
        color: "#2999f5",
        fontSize: 15,
        fontWeight: "bold"
    },
    time: {
        color: "#555",
        fontSize: 12,
        fontWeight: "300"
    },
    userInfo: {
        flex: 1, display: 'flex', flexDirection: 'column'
    },
    footerBottom: {
        padding: 10,
        flexDirection: 'row',
        display: "flex",
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    method: {
        flex: 1,
        alignItems: 'flex-start'
    },
    methodText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#888',
    },
    textInputComment: {
        color: '#333',
        fontSize: 15,
    },
    shareNow: { alignItems: 'flex-end', backgroundColor: '#82c714', padding: 10, borderRadius: 10, alignItems: 'center' },
    shareNowText: { color: '#fff', fontSize: 14, fontWeight: "bold", textTransform: 'uppercase' },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1
    },
    uploadImage: {
        height: 150,
        flex: 1,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        resizeMode: 'cover',
    },
    deleteButton: { position: 'absolute', right: 0, top: -5, backgroundColor: '#fff', borderRadius: 10, width: 20, height: 20 },
    footerImageBottom: {
        padding: 10,
        flexDirection: 'row',
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    row: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        color: '#999', fontStyle: 'italic', fontSize: 12
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1
    }
});