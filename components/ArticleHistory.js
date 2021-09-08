import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ArticleHistory({ data }) {
    let navigation = useNavigation()
    return <View style={styles.wrapper}>
        <Text style={styles.title}>{data?.serviceName}</Text>
        <Text style={styles.desc}>{data?.description}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.desc}>{data?.time}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("FeedBack")}>
                <Text>Đánh giá</Text>
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec'
    },
    title: {
        color: '#333',
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
});