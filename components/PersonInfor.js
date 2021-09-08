import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PersonInfor({ data }) {
    return <View style={styles.wrapper}>
        <Text style={styles.title}>{data?.roleName}</Text>
        <Text style={styles.desc}>Người quản lí: {data?.name}</Text>
        <Text style={styles.desc}>SĐT: {data?.phoneNumber}</Text>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    desc: {
        fontSize: 14,
        marginBottom: 10
    }
});