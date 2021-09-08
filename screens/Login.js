import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import bgLogin from '../assets/images/bgLogin.png';
import API from '../components/lib/API';
import LoadingProgressBar from '../components/LoadingProgressBar';
import { addAccountId, addToken, addRole, addRoomNumber } from '../redux/UserSlice';



export default function Login({ handleLogin }) {
    const [account, setAccount] = useState();
    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    let dispatch = useDispatch();
    let navigation = useNavigation();

    const _keyboardDidShow = () => setKeyboardStatus(true);
    const _keyboardDidHide = () => setKeyboardStatus(false);

    let login = async (data) => {
        setLoading(true)
        let path = "/login";
        let resp = await API.anonymousJSONPost(path, data);
        console.log(data)
        if (resp.ok) {
            setLoading(false)
            let response = await resp.json();

            dispatch(addToken(response?.accessToken))
            dispatch(addAccountId(response?.accountId))
            dispatch(addRole(response?.roleId))
            dispatch(addRoomNumber(response?.roomNumber))
            handleLogin()

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
                                <View style={{ width: '90%' }}>
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        placeholder={"Email"}
                                        placeholderTextColor="white"
                                        style={[styles.inputText, errors.username ? styles.errorsInput : undefined]}
                                        underlineColorAndroid="transparent"
                                        color='white'
                                    />
                                </View>
                            )}
                            name="username"
                            rules={{ required: true, minLength: 3, maxLength: 50 }}
                            defaultValue=""
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <FontAwesome name="lock" size={30} color="white" />

                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={{ width: '90%' }}>
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        placeholder={"Mật khẩu"}
                                        placeholderTextColor="white"
                                        style={[styles.inputText, errors.password ? styles.errorsInput : undefined]}
                                        underlineColorAndroid="transparent"
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        autoCorrect={false}
                                        color='white'
                                    />
                                </View>
                            )}
                            name="password"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {/* <Ionicons name="eye-off" size={30} color="#6B6B6B" style={styles.iconEyes} /> */}
                    </View>
                    {message && <Text>{message}</Text>}
                    <TouchableOpacity style={{ marginLeft: 'auto', marginBottom: 20 }} onPress={() => navigation.navigate("LoginEmailScreen")}>
                        <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(login)} disabled={loading}>
                        <Text style={styles.shareNowText}>ĐĂNG NHẬP {loading && <LoadingProgressBar />}</Text>
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
        flex: 1,

    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',

    },
    container: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        position: "absolute",
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        height: 50,
        marginTop: 10,
        marginBottom: 30
    },
    iconForm: {
        color: 'white',
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 18

    },
    errorsInput: {
        borderColor: 'orange',
        borderBottomWidth: 3,
        borderStyle: 'solid'
    },
    forgotPass: {
        color: 'white',
        fontSize: 16,
        marginBottom: 30
    },
    btnLogin: {
        width: '100%',
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'orange',
        borderWidth: 2
        // marginLeft:10

    },
    textLogin: {
        fontSize: 20
    },
    shareNowText: {
        fontSize: 16,
        color: 'orange',
    },
    overlay: {
        backgroundColor: '#000',
        opacity: .7,
        position: "absolute",
        zIndex: 4,
        width: '100%',
        height: '100%'
    }
})