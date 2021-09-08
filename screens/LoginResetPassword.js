import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import bgLogin from '../assets/images/bgLogin.png';
import API from '../components/lib/API';
import LoadingProgressBar from '../components/LoadingProgressBar';
import { addAccountId, addToken } from '../redux/UserSlice';



export default function LoginResetPassword() {
    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    let navigation = useNavigation();


    let login = async (data) => {
        if (data?.password !== data?.ps) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                bottomOffset: 20,
                text1: 'Lỗi!',
                text2: 'Mật khẩu bạn nhập lại chưa đúng!.',

            })
        } else {
            setLoading(true)
            let path = "/reset-password";
            let resp = await API.anonymousJSONPost(path, {
                token: data?.token,
                password: data?.password
            });
            console.log(data)
            if (resp.ok) {
                setLoading(false)
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    bottomOffset: 20,
                    text1: 'Bạn đã cập nhập mật khẩu thành cônng',
                    text2: 'Nhấn vào đây để quay lại trang đăng nhập',
                    onPress: () => navigation.navigate("Login")
                })

            } else {
                setLoading(false)
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 20,
                    text1: 'Lỗi!',
                    text2: 'Mã xác minh chưa đúng!.',

                })
            }
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
                                        placeholder={"Mã xác minh"}
                                        placeholderTextColor="white"
                                        style={[styles.inputText, errors.token ? styles.errorsInput : undefined]}
                                        underlineColorAndroid="transparent"
                                        color='white'
                                    />
                                </View>
                            )}
                            name="token"
                            rules={{ required: true, minLength: 3, maxLength: 50 }}
                            defaultValue=""
                        />
                    </View>

                    <View style={[styles.formGroup]}>
                        <FontAwesome name="lock" size={30} color="white" />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={{ width: '80%' }}>
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        placeholder={"Mật khẩu mới"}
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
                    <View style={styles.formGroup}>
                        <FontAwesome name="lock" size={30} color="white" />

                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={{ width: '80%' }}>
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        placeholder={"Nhập lại mật khẩu"}
                                        placeholderTextColor="white"
                                        style={[styles.inputText, errors.ps ? styles.errorsInput : undefined]}
                                        underlineColorAndroid="transparent"
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        autoCorrect={false}
                                        color='white'
                                    />
                                </View>
                            )}
                            name="ps"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        {/* <Ionicons name="eye-off" size={30} color="#6B6B6B" style={styles.iconEyes} /> */}
                    </View>
                    {message && <Text>{message}</Text>}


                    <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(login)} disabled={loading}>
                        <Text style={styles.shareNowText}>XÁC NHẬN {loading && <LoadingProgressBar />}</Text>
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
    errorsInput: {
        borderColor: 'orange',
        borderBottomWidth: 3,
        borderStyle: 'solid'
    },
    container: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        position: "absolute",
        zIndex: 5
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
        borderBottomWidth: 1,
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
        fontSize: 18,

    },
    forgotPass: {

        fontWeight: 'bold',
        fontSize: 20,
    },
    btnLogin: {
        width: '85%',
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
    }
})