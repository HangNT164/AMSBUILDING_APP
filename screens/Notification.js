import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';
import Notifi from '../components/Notifi';
import BgScreen from '../assets/images/bgscreen.png';

export default function Notification({ navigation }) {
    const [tab, setTab] = useState("all")
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.wrapSearch}>
                <FontAwesome name="search" size={18} color="gray" style={{ marginRight: 20 }} />
                <TextInput placeholder="Tìm kiếm" style={styles.textSearch} />
            </View>
            <View style={styles.headerText}>
                <TouchableOpacity style={[styles.wrapItem, (tab === "all") && styles.active, styles.all]} onPress={() => setTab("all")} activeOpacity={0.8}>
                    <Text style={styles.textItem}>Tất cả</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.wrapItem, (tab === "private") && styles.active]} onPress={() => setTab("private")} activeOpacity={0.8}>
                    <Text style={styles.textItem}>Riêng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.wrapItem, (tab === "public") && styles.active, styles.public]} onPress={() => setTab("public")} activeOpacity={0.8}>
                    <Text style={styles.textItem}>Chung</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Notifi />
                <Notifi />
                <Notifi />
            </ScrollView>
            <View style={styles.overlay}>

            </View>

        </View>

    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        marginTop: 10
    },
    all: {
        borderTopLeftRadius: 28,
        borderBottomStartRadius: 28,
    },
    public: {
        borderTopRightRadius: 28,
        borderBottomEndRadius: 28,
    },
    wrapItem: {
        width: '33.333%',
        padding: 15,
    },
    textItem: {
        textAlign: 'center',
        fontSize: 14,
        color: 'black'
    },
    active: {
        backgroundColor: '#006633',
    },
    noneBorder: {
        borderTopLeftRadius: 0,
        borderBottomStartRadius: 0,
    },
    wrapSearch: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    textSearch: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },

})