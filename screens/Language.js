import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Checkbox, Button } from 'react-native-paper';
export default function Language({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.container}>
            <View style={styles.wrapHeader}>
                <View style={styles.confirm}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Chọn ngôn ngữ</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 1, padding: 5 }}>
                <Text style={{ fontSize: 16 }}>English</Text>
                <Checkbox status="unchecked" color="red" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 1, padding: 5 }}>
                <Text style={{ fontSize: 16 }}>Tiếng Việt</Text>
                <Checkbox status="checked" color="red" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, padding: 5 }}>
                <Text style={{ fontSize: 16 }}>Tiếng nhật</Text>
                <Checkbox status="unchecked" color="#9966FF" />
            </View>
            <Button mode="contained" style={{ marginTop: 20, backgroundColor: '#9966FF', padding: 10 }}>
                Hoàn thành
            </Button>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1
    },
    wrapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#666666',
        marginBottom: 10
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight:'700',
        marginLeft: 10
    },
})