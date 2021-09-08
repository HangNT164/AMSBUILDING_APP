import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import homeImage from '../assets/images/home.png';
import * as Updates from 'expo-updates';
import LoadingProgressBar from '../components/LoadingProgressBar';
import * as ImagePicker from 'expo-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import API, { BASE_DOWNLOAD_URL } from '../components/lib/API';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { clearState } from '../redux/UserSlice';

export default function MenuProfile({ handleLogin }) {
    let navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const isFocused = useIsFocused();
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isFocused])
    const token = useSelector(state => state.user.token);

    const search = async () => {
        try {
            let path = `/member/account/profile`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                console.log(response)
                setLoading(false)
                setUser(response)
            }
        } catch (error) {

        }
    }
    let dispatch = useDispatch()

    const updateProfile = async (filepath) => {
        console.log(filepath)
        try {
            setLoading(true)
            let path = `/tenant/update/profile`;
            let data = new FormData();
            data.append("name", user?.name);
            data.append("phone", user?.phone);
            data.append("multipartFile", filepath);
            data.append("identifyCard", user?.identifyCard);
            data.append("currentAddress", user?.currentAddress);
            data.append("homeTown", user?.homeTown);
            data.append("dob", user?.dob);
            // data.append("gender", user?.gender);
            let resp = await API.authorizedFilePost(path, data, token);
            if (resp.ok) {
                search()
                console.log("ok")
            } else {
                setLoading(false)
                let response = await resp.json();
                console.log(response)
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Lỗi!',
                    text2: 'Vui lòng kiểm tra lại thông tin.'
                })
            }
        } catch (error) {

        }

    }
    const chooseFile = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            let localUri = result.uri;
            let filename = localUri.split('/').pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;
            updateProfile({
                uri: localUri, name: filename, type
            })
        }
    };
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });
    }, []);
    let logout = () => {
        handleLogin()
        dispatch(clearState())
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ marginTop: 10, alignItems: 'center', height: 100, height: 100, width: 100, padding: 10 }} >
                        <Image source={{ uri: user?.image ? `${BASE_DOWNLOAD_URL}${user?.image}` : `https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cuc-dep-cho-dien-thoai-5.jpg` }} style={styles.logo} />
                        <TouchableOpacity style={styles.cameraIcon} onPress={chooseFile}>
                            <View style={{ backgroundColor: '#fff', width: 25, height: 25, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                {loading ? <LoadingProgressBar color="#000" /> :
                                    <Feather name={"camera"} size={13} color={"#000"}></Feather>
                                }

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <Text style={[styles.name, { color: '#333' }]}>{user?.name}</Text>
                        <Text style={[styles.info, { color: '#333' }]}>@ {user?.phone}</Text>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate("SettingProfile")}>
                            <Text style={[styles.loginButton, { color: '#333' }]}><FontAwesome5 name={"settings"} size={16} color={'#333'} /> Cài đặt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate("ChangeProfile", { user: user })}>
                            <Text style={[styles.loginButton, { color: '#333' }]}><FontAwesome5 name={"user"} size={16} color={'#333'} /> Thông tin cá nhân</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate("FamilyScreen", { user: user })}>
                            <Text style={[styles.loginButton, { color: '#333' }]}><FontAwesome5 name={"users"} size={16} color={'#333'} /> Gia đình</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate("StayAbsent")}>
                            <Text style={[styles.loginButton, { color: '#333' }]}><FontAwesome5 name={"user"} size={16} color={'#333'} /> Tạm trú - Tạm vắng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate("ChangePassword")}>
                            <Text style={[styles.loginButton, { color: '#333' }]}><FontAwesome5 name={"edit"} size={16} color={'#333'} /> Thay đổi mật khẩu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => navigation.navigate("ApartmentProfile")}>
                            <Text style={[styles.loginButton, { color: '#333' }]}><FontAwesome5 name={"book-open"} size={16} color={'#333'} /> Chung cư</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => {
                            logout()
                        }}>
                            <Text style={[styles.loginButton, { color: '#333' }]}><FontAwesome5 name={"log-out"} size={16} color={'#333'} /> Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10, marginBottom: 50
    },
    name: {
        fontSize: 16,
        flexWrap: 'wrap',
        fontWeight: 'bold'
    },
    info: {
        fontSize: 13
    },
    logo: { width: 90, height: 90, borderRadius: 10, backgroundColor: '#f0f0f0', borderWidth: 1, borderColor: '#fff' },
    textInput: {
        borderRadius: 20,
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        fontSize: 14,
        color: '#000',
        height: 45,
        paddingLeft: 20,
        paddingRight: 20,
        width: 0.7 * Dimensions.get('window').width,
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        width: 0.8 * Dimensions.get('window').width,
        height: 45,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    loginButton: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },
    cameraIcon: { position: "absolute", bottom: 10, zIndex: 1 }
})