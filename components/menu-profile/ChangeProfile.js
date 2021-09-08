import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import API from '../lib/API';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';
import LoadingProgressBar from '../LoadingProgressBar';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';

export default function ChangeProfile(props) {
    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const token = useSelector(state => state.user.token);
    const [loading, setLoading] = useState(false)
    let user = props?.route?.params?.user;
    const [isSelect, setIsSelect] = useState(false)
    const isFocused = useIsFocused();
    const [account, setAccount] = useState(account)
    // useEffect(() => {

    //     search()

    // }, [])

    // useEffect(() => {
    //     search()
    // }, [isFocused])


    const [date, setDate] = useState(new Date());

    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        setIsSelect(true)
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const updateProfile = async (form) => {

        try {
            setLoading(true)
            let path = `/tenant/update/profile`;
            let data = new FormData();
            data.append("name", form?.name);
            data.append("phone", form?.phone);
            // data.append("multipartFile", filepath);
            data.append("identifyCard", form?.identifyCard);
            data.append("currentAddress", form?.currentAddress);
            data.append("homeTown", form?.homeTown);
            !isSelect ? data.append("dob", user?.dob) : data.append("dob", moment(date).format("DD/MM/YYYY"));

            // data.append("gender", user?.gender);
            let resp = await API.authorizedFilePost(path, data, token);
            if (resp.ok) {
                setLoading(false)
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Thành công',
                    text2: 'Bạn đã cập nhập thông tin thành công!.'
                })
            } else {
                setLoading(false)
                let response = await resp.json();
                console.log(response)
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Lỗi!',
                    text2: response?.message
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <View style={styles.separator} />
            <View style={{ margin: 10 }}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View >
                            <Text style={styles.label}>Tên chủ hộ</Text>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholderTextColor="#888"
                                style={[styles.textInputComment]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    )}
                    name="name"

                    defaultValue={user?.name}
                />

                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    display="spinner"
                    onChange={onChange}
                    maximumDate={new Date()}
                />}

                <View style={styles.separator} />

                <View >
                    <Text style={styles.label}>Ngày sinh</Text>
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Text>{isSelect ? moment(date).format("DD/MM/YYYY") : user?.dob} <Feather name="calendar" size={25} color={"#333"} /></Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.separator} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View >
                            <Text style={styles.label}>Số căn cước công dân</Text>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}

                                placeholderTextColor="#999"
                                style={[styles.textInputComment, errors.address ? styles.errorInput : undefined]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    )}
                    name="identifyCard"
                    // rules={{ required: true}}
                    defaultValue={user?.identifyCard}
                />
                <View style={styles.separator} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View >
                            <Text style={styles.label}>Số điện thoại</Text>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}

                                placeholderTextColor="#999"
                                style={[styles.textInputComment, errors.address ? styles.errorInput : undefined]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    )}
                    name="phone"
                    // rules={{ required: true}}
                    defaultValue={user?.phone}
                />

                <View style={styles.separator} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View >
                            <Text style={styles.label}>Quê quán</Text>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}


                                placeholderTextColor="#999"
                                style={[styles.textInputComment, errors.address ? styles.errorInput : undefined]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    )}
                    name="homeTown"
                    // rules={{ required: true}}
                    defaultValue={user?.homeTown}
                />
                <View style={styles.separator} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View >
                            <Text style={styles.label}>Địa chỉ hiện tại</Text>
                            <TextInput
                                onBlur={onBlur}

                                onChangeText={value => onChange(value)}
                                value={value}


                                placeholderTextColor="#999"
                                style={[styles.textInputComment, errors.address ? styles.errorInput : undefined]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    )}
                    name="currentAddress"
                    // rules={{ required: true }}
                    defaultValue={user?.currentAddress}
                />
            </View>
            <View style={styles.separator} />


            <View style={styles.footerBottom}>
                <TouchableOpacity style={styles.shareNow}
                    onPress={handleSubmit(updateProfile)}
                    disabled={loading} >
                    <Text style={styles.shareNowText}>Xác nhận {loading && <LoadingProgressBar />}</Text>
                </TouchableOpacity>
            </View>


        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    separator: {
        height: 1, backgroundColor: '#ddd', width: '100%'
    },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    name: {
        color: "#2999f5",
        fontSize: 15,
        fontWeight: "bold"
    },
    time: {
        color: "#555",
        fontSize: 12,
        fontWeight: "300"
    },
    userInfo: {
        flex: 1, display: 'flex', flexDirection: 'column'
    },
    footerBottom: {
        padding: 10,
        flexDirection: 'row',
        display: "flex",
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    method: {
        flex: 1,
        alignItems: 'flex-start'
    },
    methodText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#888',
    },
    textInputComment: {
        color: '#333',
        fontSize: 15,
    },
    shareNow: { alignItems: 'flex-end', backgroundColor: 'transparent', padding: 10, borderRadius: 10, alignItems: 'center', borderWidth: 2, borderColor: 'orange' },
    shareNowText: { color: 'orange', fontSize: 14, fontWeight: "bold", textTransform: 'uppercase' },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1
    },
    uploadImage: {
        height: 150,
        flex: 1,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        resizeMode: 'cover',
    },
    deleteButton: { position: 'absolute', right: 0, top: -5, backgroundColor: '#fff', borderRadius: 10, width: 20, height: 20 },
    footerImageBottom: {
        padding: 10,
        flexDirection: 'row',
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    row: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        color: '#999', fontStyle: 'italic', fontSize: 12
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1
    }
});

