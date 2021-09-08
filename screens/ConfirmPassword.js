import { Entypo, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../assets/images/logo.png';

export default function ConfirmPassword() {
    return <View style={styles.wrapper}>
        <View style={styles.container}>
            <Image source={Logo} style={styles.imageLogo} />
            <Text style={styles.title}>RESIDENT APP</Text>
            <Text style={styles.confirmPass}>Đặt lại mật khẩu</Text>
            <View style={styles.formGroup}>
                <FontAwesome name="lock" size={30} color="#6B6B6B" />
                <TextInput placeholder="Mật khẩu mới" type="text" style={styles.inputText} secureTextEntry={true} />
            </View>
            <View style={styles.formGroup}>
                <Entypo name="dots-three-horizontal" size={30} color="black" />
                <TextInput placeholder="Nhập lại mật khẩu mới" type="text" style={styles.inputText} secureTextEntry={true} />
            </View>
            <View style={styles.btnLogin}>
                <Button title="Đồng ý" color="white" style={styles.textLogin} />
            </View>
        </View>
        <View style={styles.wrapFooter}>
            <Text style={styles.textFooter}>Yêu cầu cung cấp tài khoản</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',

    },
    confirmPass: {
      
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20
    },
    imageLogo: {
        width: 250,
        height: 250
    },
    title: {
        color: '#9966FF',
      
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30
    },
    formGroup: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#6B6B6B',
        borderBottomWidth: 2,
        marginBottom: 30
    },
    iconForm: {
        color: '#6B6B6B',
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 18,
      
    },
    btnLogin: {
        width: '100%',
        backgroundColor: '#9966FF',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20

    },
    textLogin: {
      
        fontSize: 20
    },
    wrapFooter: {
        padding: 30
    },
    textFooter: {
        fontSize: 20,
      
        fontWeight: 'bold',
        marginTop: 20,
    }
})