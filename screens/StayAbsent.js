import DateTimePicker from '@react-native-community/datetimepicker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import moment from 'moment';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import API from '../components/lib/API';
import LoadingProgressBar from '../components/LoadingProgressBar';

const Tab = createMaterialTopTabNavigator();

export default function StayAbsent({ navigation }) {

    return <View style={styles.container}>

        <TabHeader />

    </View>
}

function TabHeader() {

    return <View style={{ flex: 1 }}>
        <Tab.Navigator tabBarOptions={{
            scrollEnabled: false,
        }}>
            <Tab.Screen name="Stay" children={() => <StayAbsentItem absentType={1} />} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="message-circle" size={14} color={color} /> Tạm trú</Text>
            }} />
            <Tab.Screen name="Absent" children={() => <StayAbsentItem absentType={2} />} options={{
                tabBarLabel: ({ focused, color }) => <Text style={[styles.tabText, { color: color }]}><Feather name="message-circle" size={14} color={color} /> Tạm vắng</Text>
            }} />
        </Tab.Navigator>
    </View>
}


function StayAbsentItem({ absentType }) {
    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [message, setMessage] = useState()
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const [dateStart, setDateStart] = useState(new Date());
    const [showStart, setShowStart] = useState(false);
    const onChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate || dateStart;
        setShowStart(Platform.OS === 'ios');
        setDateStart(currentDate);
    };
    const [dateEnd, setDateEnd] = useState(new Date());

    const [showEnd, setShowEnd] = useState(false);

    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate || dateEnd;
        setShowEnd(Platform.OS === 'ios');
        setDateEnd(currentDate);
    };
    const accountIdRedux = useSelector(state => state.user.accountId);
    const token = useSelector(state => state.user?.token)
    let addAbsent = async (data) => {
        if (new Date(dateStart).getTime() > new Date(dateEnd).getTime()) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'Lỗi!',
                text2: "Ngày đến phải sau ngày đi"
            })
        } else {
            let path = '/landlord/absent/add'
            setLoading(true);
            let objReq = {
                name: data?.name,
                dob: moment(date).format("YYYY-MM-DD"),
                identifyCard: data?.identifyCard,
                homeTown: data?.homeTown,
                reason: data?.reason,
                startDate: moment(dateStart).format("YYYY-MM-DD"),
                endDate: moment(dateEnd).format("YYYY-MM-DD"),
                absentType: absentType,
                accountId: accountIdRedux
            };

            let resp = await API.authorizedJSONPost(path, objReq, token);
            if (resp.ok) {
                setLoading(false)
                reset()
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    bottomOffset: 50,
                    autoHide: false,
                    text1: 'Thành công',
                    text2: 'Bạn đã đăng ký thành công!.',
                    onPress: async () => {
                        await Toast.hide()
                        reset({})
                        setDate(new Date())
                        setDateStart(new Date())
                        setDateEnd(new Date())
                    }
                })
            } else {
                let response = await resp.json();
                console.log(response)
                reset()
                setLoading(false)
                setMessage(response?.message)
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Lỗi!',
                    text2: message
                })
            }
        }
    }
    return (
        <>
            <View style={styles.separator} />
            <View style={{ margin: 10 }}>
                <View style={styles.item}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View >
                                <Text style={styles.label}>Họ tên</Text>
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={value => {
                                        onChange(value)

                                    }}
                                    value={value}
                                    placeholderTextColor="#888"
                                    style={[styles.textInputComment, errors.name ? styles.errorInput : undefined]}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>

                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    display="spinner"
                    onChange={onChange}
                    maximumDate={new Date()}

                />}
                {showStart && <DateTimePicker
                    testID="dateTimePicker"
                    value={dateStart}
                    mode={"date"}
                    is24Hour={true}
                    display="spinner"
                    onChange={onChangeStart}
                />}
                {showEnd && <DateTimePicker
                    testID="dateTimePicker"
                    value={dateEnd}
                    mode={"date"}
                    is24Hour={true}
                    display="spinner"
                    onChange={onChangeEnd}
                    minimumDate={dateStart}
                />}
                <View style={styles.separator} />

                <View style={styles.item}>
                    <Text style={styles.label}>Ngày sinh</Text>
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Text>{moment(date).format("DD/MM/YYYY")} <Feather name="calendar" size={25} color={"#333"} /></Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.separator} />
                <View style={styles.item}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View >
                                <Text style={styles.label}>Số căn cước công dân</Text>
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={value => {
                                        onChange(value)

                                    }}
                                    value={value}
                                    keyboardType="number-pad"
                                    placeholderTextColor="#999"
                                    style={[styles.textInputComment, errors.identifyCard ? styles.errorInput : undefined]}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        )}
                        name="identifyCard"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>
                <View style={styles.separator} />
                <View style={styles.item}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View >
                                <Text style={styles.label}>Địa chỉ thường trú</Text>
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={value => {
                                        onChange(value)

                                    }}

                                    value={value}
                                    placeholderTextColor="#999"
                                    style={[styles.textInputComment, errors.homeTown ? styles.errorInput : undefined]}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        )}
                        name="homeTown"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>
                <View style={styles.separator} />
                <View style={styles.item}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View >
                                <Text style={styles.label}>Lý do</Text>
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={value => {
                                        onChange(value)

                                    }}

                                    value={value}
                                    placeholderTextColor="#999"
                                    style={[styles.textInputComment, errors.reason ? styles.errorInput : undefined]}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        )}
                        name="reason"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>
                <View style={styles.separator} />
                <View style={styles.item}>
                    <Text style={styles.label}>Ngày đến</Text>
                    <TouchableOpacity onPress={() => setShowStart(true)}>
                        <Text>{moment(dateStart).format("DD/MM/YYYY")} <Feather name="calendar" size={25} color={"#333"} /></Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.separator} />
                <View style={styles.item}>
                    <Text style={styles.label}>Ngày đi</Text>
                    <TouchableOpacity onPress={() => setShowEnd(true)}>
                        <Text>{moment(dateEnd).format("DD/MM/YYYY")} <Feather name="calendar" size={25} color={"#333"} /></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
            </View>
            <View style={styles.footerBottom}>
                <TouchableOpacity style={styles.shareNow} disabled={loading} onPress={handleSubmit(addAbsent)}>
                    <Text style={styles.shareNowText}>ĐĂNG KÝ {loading && <LoadingProgressBar />}</Text>
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
    item: {
        marginTop: 5,
        marginBottom: 5
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
    shareNow: { alignItems: 'flex-end', backgroundColor: 'transparent', padding: 10, borderRadius: 10, alignItems: 'center', borderColor: 'orange', borderWidth: 2 },
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