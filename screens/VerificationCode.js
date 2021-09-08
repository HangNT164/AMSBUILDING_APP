import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../assets/images/logo.png';

export default function VerificationCode() {
    return <View style={styles.wrapper}>
        <View style={styles.container}>
            <Image source={Logo} style={styles.imageLogo} />
            <Text style={styles.title}>RESIDENT APP</Text>
            <Text style={styles.textSMS}>Mã xác minh đã được gửi qua SMS đến</Text>
            <Text style={styles.textSMS}>********09</Text>
            <View style={styles.formGroup}>
                <TextInput type="text" style={styles.textInput}></TextInput>
                <TextInput type="text" style={styles.textInput}></TextInput>
                <TextInput type="text" style={styles.textInput}></TextInput>
                <TextInput type="text" style={styles.textInput}></TextInput>
                <TextInput type="text" style={styles.textInput}></TextInput>
                <TextInput type="text" style={styles.textInput}></TextInput>
            </View>
            <View style={styles.btnLogin}>
                <Button title="Tiếp" color="white" style={styles.textLogin} />
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
        width: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',

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
    textSMS: {
        fontSize: 20,
        marginBottom: 20
    },
    formGroup: {
        flexDirection: 'row',
        marginBottom: 30
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        margin: 10,
        width: 35,
        textAlign: 'center',
        padding: 5
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