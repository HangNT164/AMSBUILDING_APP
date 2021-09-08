import { useIsFocused } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import API from '../lib/API';
import homeImage from '../../assets/images/home.png'
import { TouchableOpacity } from 'react-native';
export default function NotiItem({ data, search }) {
    const token = useSelector(state => state.user?.token);
    let upRead = async () => {
        if (!data?.isRead) {
            let path = `/landlord/update-status/${data?.id}`;
            let resp = await API.authorizedJSONPost(path, null, token);
            if (resp.ok) {
                search()
            }
        }
    }
    return <TouchableOpacity style={styles.wrapper}
        onPress={upRead} activeOpacity={.8}
    >
        {/* <Text style={[styles.title,{color: data?.isRead ? "#fff" :"red"}]}>{data?.title}</Text> */}
        <Text style={[styles.title]}>{data?.title}</Text>
        <Text style={styles.desc}>{data?.description}</Text>
        <View style={styles.note}>
            <Text style={styles.time}>{data?.time}</Text>
            <Text style={styles.time}>{data?.date}</Text>
            {/* <View style={styles.more}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailProcess', { id: data?.id })}>
                    <Text style={styles.textRead}>Xem tiến trình</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.textCancle}>Hủy</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    </TouchableOpacity>
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