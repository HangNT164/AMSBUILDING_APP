import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
export default function ResetPassword({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.wrapNav}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.icon} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                        <AntDesign name="leftcircle" size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Đặt lại mật khẩu</Text>
                </View>
            </View>
            <View style={styles.formGroup}>
                <FontAwesome name="lock" size={18} color="#6B6B6B" />
                <TextInput placeholder="Mật khẩu mới" type="text" style={styles.inputText} secureTextEntry={true} />
            </View>
            <View style={styles.formGroup}>
                <Entypo name="dots-three-horizontal" size={18} color="black" />
                <TextInput placeholder="Nhập lại mật khẩu mới" type="text" style={styles.inputText} secureTextEntry={true} />
            </View>
            <View style={styles.btnLogin}>
                <Button title="Đồng ý" color="#949494" style={styles.textLogin} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapNav: {
        backgroundColor: '#666666'
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        position: 'relative'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    wrapContent: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    icon: {
        position: 'absolute',
        top: '70%',
        left: 20,
    },
    formGroup: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20,
        borderColor:'#333',
        borderWidth:1,
        borderStyle:'solid',
        marginLeft:10,
        marginRight:10
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 14,
    },
    btnLogin: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
});