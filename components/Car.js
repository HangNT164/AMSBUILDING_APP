import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Car({ data }) {
    return <View style={styles.wrapper}>

        <View style={styles.container}>
            {/* <View style={styles.wrapContent}>
                <Text style={styles.text}>Dòng xe:</Text>
                <Text style={styles.text}>{data?.vehicleBranch}</Text>
            </View> */}
            <View style={styles.wrapContent}>
                <Text style={styles.text}>Hãng:</Text>
                <Text style={styles.text}>{data?.vehicleBranch}</Text>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.text}>Số chỗ:</Text>
                <Text style={styles.text}>{data?.seat}</Text>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.text}>Biển kiểm soát:</Text>
                <Text style={styles.text}>{data?.licensePlates}</Text>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.text}>Màu xe:</Text>
                <Text style={styles.text}>{data?.color}</Text>
            </View>
            <View style={[styles.wrapContent, styles.custom]}>
                <Text style={styles.text}>Ngày đăng kí:</Text>
                <Text style={styles.text}>{data?.startDate}</Text>
            </View>
        </View>

    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 15
    },
    container: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#9966FF',
        marginBottom: 20
    },
    wrapContent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        paddingBottom: 15,
        paddingTop: 15
    },
    text: {
        fontSize: 14
    },
    custom: {
        borderBottomWidth: 0
    }
});