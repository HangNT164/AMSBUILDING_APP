import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import homeImage from '../../assets/images/bgscreen.png'
import NotiItem from './NotiItem';
const Tab = createMaterialTopTabNavigator();
import NotificationAll from './NotificationAll';
import NotificationPrivate from './NotificationPrivate';
import NotificationGeneral from './NotificationGeneral'
export default function Notification() {
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

    return <View style={styles.container}>
        <Image source={homeImage} style={styles.image} />
        <View style={styles.content}>

            <TabHeader />
        </View>

    </View>

}

function TabHeader() {

    return <View style={{ flex: 1, borderTopColor: '#333', borderStyle: 'solid', borderTopWidth: 1 }}>
        <Tab.Navigator tabBarOptions={{
            scrollEnabled: false,
        }}>
            <Tab.Screen name="NotificationAll" component={NotificationAll} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="bell" size={14} color={color} /> Tất cả</Text>
            }} />
            <Tab.Screen name="NotificationPrivate" component={NotificationPrivate} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="user" size={14} color={color} /> Riêng</Text>
            }} />
            <Tab.Screen name="NotificationProfile" component={NotificationGeneral} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="users" size={14} color={color} /> Chung</Text>
            }} />

        </Tab.Navigator>
    </View>
}

// function NotificationAll() {
//     return (
//         <>
//             <ImageBackground source={homeImage} style={{ width: '100%', height: '100%' }}>
//                 <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>
//                     <NotiItem />
//                 </View>
//                 <View style={{
//                     backgroundColor: '#000', opacity: .5,
//                     position: "absolute",
//                     zIndex: 4,
//                     width: '100%',
//                     height: '100%'
//                 }} />
//             </ImageBackground>
//         </>
//     )
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    inputText: {
        borderRadius: 5,
        margin: 5,
        paddingLeft: 10,
        paddingRight: 35,
        paddingTop: 0,
        paddingBottom: 0,
        height: 30,
        flex: 1,

    },
    search: {
        position: 'absolute',
        right: 10
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        display: 'flex',
        backgroundColor: '#fff'
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 4
    },
    content: {
        position: 'absolute',
        zIndex: 9,
        width: '100%',
        height: '100%'
    }
})