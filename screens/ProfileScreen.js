import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import homeImage from '../assets/images/banner.jpg';
import API, { BASE_DOWNLOAD_URL } from '../components/lib/API';
import BuildingHandBook from '../components/profile/BuildingHandBook';
import HandleRequest from '../components/profile/HandleRequets';
import ServiceHistory from '../components/profile/ServiceHistory';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import LoadingProgressBar from '../components/LoadingProgressBar';
import Vehicle from './Vehicle';
import { FontAwesome5 } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();

export default function ProfileScreen() {
    let navigation = useNavigation();
    const token = useSelector(state => state.user.token);
    const [user, setUser] = useState();

    const isFocused = useIsFocused();
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isFocused])
    const search = async () => {
        let path = `/member/account/profile`;
        let resp = await API.authorizedJSONGET(path, token);
        if (resp.ok) {
            let response = await resp.json();

            setUser(response)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container]}>
                <View style={{ height: 180, backgroundColor: 'transparent', width: '100%' }}>
                    <Image source={homeImage} resizeMode="cover" style={{ height: '100%', opacity: 0.6 }} />
                </View>
                <View style={{ position: 'absolute', zIndex: 1, bottom: 10, left: 10, alignItems: 'center', height: 80, width: 80 }} >
                    <Image source={{ uri: user?.image ? `${BASE_DOWNLOAD_URL}${user?.image}` : `https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cuc-dep-cho-dien-thoai-5.jpg` }} style={styles.logo} />

                </View>
                <View style={{ position: 'absolute', zIndex: 1, top: 80, right: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate("MenuProfile")}>
                        <Feather name={"menu"} size={15} color={"#fff"}></Feather>
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', zIndex: 1, bottom: 10, left: 100, alignItems: 'flex-start' }}>
                    <Text style={[styles.name, { color: "#fff" }]}>{user?.name}</Text>
                    <Text style={[styles.info, { color: "#fff" }]}>{user?.phone}</Text>
                </View>
            </View>
            <TabHeader />
        </View>
    )
}

function TabHeader() {

    return <View style={{ flex: 1 }}>
        <Tab.Navigator tabBarOptions={{
            scrollEnabled: true,
        }}>
            <Tab.Screen name="BuildingHandBook" component={BuildingHandBook} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><FontAwesome5 name="book" size={14} color={color} /> Sổ tay</Text>
            }} />
            <Tab.Screen name="Vehicle" component={Vehicle} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><FontAwesome5 name="truck" size={14} color={color} /> Phương tiện</Text>
            }} />
            <Tab.Screen name="ServiceHistory" component={ServiceHistory} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><FontAwesome5 name="money-check" size={14} color={color} /> Lịch sử</Text>
            }} />
            {/* <Tab.Screen name="HandleRequest" component={HandleRequest} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="message-circle" size={14} color={color} /> Yêu cầu</Text>
            }} /> */}
        </Tab.Navigator>
    </View>
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        flexWrap: 'wrap',
        fontWeight: 'bold'
    },
    info: {
        fontSize: 13,
    },
    logo: { width: 80, height: 80, borderRadius: 10, backgroundColor: '#f0f0f0', borderWidth: 1, borderColor: '#fff' },
    textInput: {
        borderRadius: 20,
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        fontSize: 14,
        color: '#000',
        height: 45,
        paddingLeft: 20,
        paddingRight: 20,
        width: 0.7 * Dimensions.get('window').width,
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        width: 0.8 * Dimensions.get('window').width,
        height: 45,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    loginButton: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },
    cameraIcon: { position: "absolute", bottom: 5, zIndex: 1 },
    cameraIconBanner: {
        position: 'absolute',
        right: 18,
        bottom: 10
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})