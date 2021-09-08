import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Toast from 'react-native-toast-message';
import Logo from '../assets/images/logo.png';
import API from '../components/lib/API';
import LoadingProgressBar from '../components/LoadingProgressBar';
import bgLogin from '../assets/images/bgLogin.png'


export default function LoginEmailScreen() {

    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    let navigation = useNavigation()



    let sumbitEmail = async (data) => {
        setLoading(true)
        let path = `/forward-password?email=${data?.email}`;
        let resp = await API.anonymousJSONPost(path, data);
        console.log(data)
        if (resp.ok) {
            setLoading(false)
            navigation.navigate("LoginResetPassword")

        } else {
            setLoading(false)
            Toast.show({
                type: 'error',
                position: 'bottom',
                bottomOffset: 20,
                text1: 'Lỗi!',
                text2: 'Tài khoản đăng nhập chưa đúng!.',

            })
        }
    }


    return <View style={styles.wrapper}>
        <View style={styles.wrapContent}>
            <ImageBackground source={bgLogin} style={styles.image}>
                <View style={styles.container}>
                    <Text style={styles.title}>RESIDENT APP</Text>
                    <View style={styles.formGroup}>
                        <FontAwesome name="user" size={30} style={styles.iconForm} />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={{ width: '80%' }}>
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        placeholder={"Email"}
                                        placeholderTextColor="white"
                                        style={[styles.inputText, errors.email ? styles.errorsInput : undefined]}
                                        underlineColorAndroid="transparent"
                                        color='white'
                                    />
                                </View>
                            )}
                            name="email"
                            rules={{ required: true, minLength: 3, maxLength: 50 }}
                            defaultValue=""
                        />
                    </View>
                    <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(sumbitEmail)} disabled={loading}>
                        <Text style={styles.shareNowText}>GỬI {loading && <LoadingProgressBar />}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.overlay}></View>
            </ImageBackground>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 0,
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    container: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        position: "absolute",
        zIndex: 5,
        justifyContent: 'center'

    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginBottom: 30
    },
    formGroup: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        height: 50,
        marginTop: 10
    },
    iconForm: {
        color: 'white',
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 18,
    },
    btnLogin: {
        width: '90%',
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderColor: 'orange',
        borderWidth: 2

    },
    textLogin: {

        fontSize: 20
    },
    textFooter: {
        fontSize: 20,

        fontWeight: 'bold',
        marginTop: 20,
    },
    shareNowText: {
        fontSize: 16,
        color: 'orange'
    },
    overlay: {
        backgroundColor: '#000',
        opacity: .7,
        position: "absolute",
        zIndex: 4,
        width: '100%',
        height: '100%'
    },
    errorsInput: {
        borderColor: 'orange',
        borderBottomWidth: 3,
        borderStyle: 'solid'
    }
})