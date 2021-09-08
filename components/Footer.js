import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Footer({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.item}>
            <FontAwesome5 name="home" size={18} style={styles.active} />
            <Text style={styles.title}>Tang chủ</Text>
        </View>
        <View style={styles.item}>
            <AntDesign name="message1" size={18} color="#6B6B6B" />
            <Text style={styles.title}>Tin nhắn</Text>
        </View>
        <View style={styles.item}>
            <Ionicons name="notifications" size={18} color="#6B6B6B" />
            <Text style={styles.title}>Thông báo</Text>
        </View>
        <View style={styles.item}>
            <FontAwesome5 name="shopping-bag" size={18} color="#6B6B6B" />
            <Text style={styles.title}>Đi chợ</Text>
        </View>
        <View style={styles.item}>
            <FontAwesome name="user" size={18} color="#6B6B6B" onPress={() => navigation.navigate('Profile')} />
            <Text style={styles.title}>Cá nhân</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        height: 150,
        borderTopColor: '#6B6B6B',
        borderTopWidth: 2,
    },
    item: {
        alignItems: 'center',
        textAlign: 'center'
    },
    active: {
        color: '#9966FF'
    },
    title: {
        color: '#6B6B6B',
        marginTop: 5, 
        fontSize: 12
    }
})
