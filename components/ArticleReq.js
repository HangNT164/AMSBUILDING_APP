import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import API from './lib/API';
import Toast from 'react-native-toast-message';

export default function ArticleReq({ data, search }) {
    const token = useSelector(state => state.user?.token)
    let cancleService = async () => {
        let path = `/landlord/request-service/update/${data?.id}?statusId=4`;
        let resp = await API.authorizedJSONPost(path, token);
        if (resp.ok) {
            search()
            Toast.show({
                type: 'success',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'OK',
                text2: 'Bạn đã hủy thành công!.'
            })
        }
    }
    return <View style={styles.wrapper}>
        <Text style={styles.title}>{data?.serviceName}</Text>
        <Text style={styles.desc}>{data?.description}</Text>
        <View style={styles.note}>
            <Text style={styles.time}>12 phút trước</Text>
            <View style={styles.more}>
                <Text style={styles.textRead} onPress={() => navigation.navigate('DetailRequest')}>Xem</Text>
                <TouchableOpacity onPress={() => cancleService()}>
                    <Text style={styles.textCancle}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec'
    },
    title: {
        color: '#9966FF',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    desc: {
        fontSize: 14,
        marginBottom: 10
    },
    note: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        color: '#868686',
        fontSize: 12,
    },
    more: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRead: {
        color: '#9966FF',
        fontSize: 12,
        marginRight: 10
    },
    textCancle: {
        color: '#9966FF',
        fontSize: 12,
    }
});