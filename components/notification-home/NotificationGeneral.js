import { useIsFocused } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import API from '../lib/API';
import homeImage from '../../assets/images/bgscreen.png'
import { TouchableOpacity } from 'react-native';
import NotiItem from './NotiItem';
import { ScrollView } from 'react-native-gesture-handler';
export default function NotificationGeneral() {
    const [data, setData] = useState();
    const isFocus = useIsFocused()
    const token = useSelector(state => state.user?.token);

    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isFocus])
    const search = async () => {
        let path = '/landlord/notifications';
        let resp = await API.authorizedJSONGET(path, token);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground source={homeImage} style={styles.image}>
                    <View style={[{ position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>
                        <ScrollView>
                            {data?.map((item, index) => {
                                return (
                                    <NotiItem key={index} data={item} search={search} />
                                )
                            })}
                        </ScrollView>

                    </View>
                    <View style={{
                        backgroundColor: '#000', opacity: .7,
                        position: "absolute",
                        zIndex: 4,
                        width: '100%',
                        height: '100%'
                    }} />
                </ImageBackground >

            </View>
        </>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    desc: {
        fontSize: 14,
        marginBottom: 10,
        color: '#fff'
    },
    note: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        color: '#f0f0f0',
        fontSize: 13,
        opacity: .7
    },
    more: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRead: {

        color: '#fff',
        fontSize: 13,
        marginRight: 10
    },
    textCancle: {

        color: '#fff',
        fontSize: 13,
    }
});