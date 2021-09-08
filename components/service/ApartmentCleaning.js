import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import RNPickerSelect from 'react-native-picker-select';
import HomeImage from '../../assets/images/bgscreen.png';
import moment from 'moment';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { CheckBox } from 'react-native-elements'
import Toast from 'react-native-toast-message';
import API from '../lib/API';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ApartmentCleaning() {
    let navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
    const [dateObj, setDateObj] = useState({
        selectedDate: moment(new Date(Date.now())).format("DD-MM-YYYY"),
        markedDates: {}
    })
    const token = useSelector(state => state.user?.token)
    const accountIdRedux = useSelector(state => state.user?.accountId)

    const getSelectedDayEvents = date => {
        let markedDates = {};
        markedDates[date] = { selected: true, color: '#00B0BF', textColor: '#FFFFFF' };
        let serviceDate = moment(date);
        serviceDate = serviceDate.format("DD.MM.YYYY");
        setDateObj({
            selectedDate: serviceDate,
            markedDates: markedDates
        });
    };
    const [timeFrom, setTimeFrom] = useState("06:00-08:00")
    const handleTimeFrom = (hour) => {
        setTimeFrom(hour)
    }
    const [timeTo, setTimeTo] = useState("16")
    const handleTimeTo = (hour) => {
        setTimeTo(hour)
    }
    const roleId = useSelector(state => state.user?.roleId)

    let addService = async () => {
        try {
            if (toggleCheckBox) {
                if (roleId == 3) {
                    let path = '/landlord/service_request/add';
                    let resp = await API.authorizedJSONPost(path, {
                        reasonDetailSubServiceId: timeTo,
                        accountId: accountIdRedux,
                        startDate: `${moment(dateObj?.selectedDate, "DD-MM-YYYY").format("YYYY/MM/DD")} ${timeFrom.slice(0, 5)}`,
                        endDate: `${moment(dateObj?.selectedDate, "DD-MM-YYYY").format("YYYY/MM/DD")} ${timeFrom.slice(6, 11)}`,
                        endDate: ""
                    }, token);
                    if (resp.ok) {
                        let response = await resp.json();
                        Toast.show({
                            type: 'success',
                            position: 'bottom',
                            bottomOffset: 50,
                            text1: 'Bạn đã gửi yêu cầu thành công',
                            text2: "Ấn vào đây để theo dõi tiến trình nhé!",
                            onPress: () => {
                                setToggleCheckBox(false)
                                setDateObj({
                                    selectedDate: moment(new Date(Date.now())).format("DD-MM-YYYY"),
                                    markedDates: {}
                                })
                                setTimeFrom("06:00-08:00")
                                setTimeTo("16")
                                navigation.navigate("DetailProcess", { id: response?.serviceId, typeRequest: response?.typeService })
                            }
                        })
                    } else {
                        setLoading(false)
                        let response = await resp.json();
                        Toast.show({
                            type: 'error',
                            position: 'bottom',
                            bottomOffset: 50,
                            text1: 'Lỗi!',
                            text2: response?.message
                        })
                    }
                } else {
                    Toast.show({
                        type: 'error',
                        position: 'bottom',
                        bottomOffset: 50,
                        text1: 'Lỗi!',
                        text2: "Tài khoản không có quyền truy cập"
                    })
                }
            } else {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Lỗi!',
                    text2: 'Bạn cần đọc và cam kết!.'
                })
            }
        } catch (error) {

        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.wrapContent}>

                    <View style={styles.main}>
                        <ImageBackground source={HomeImage} style={styles.image}>
                            <View style={{ position: 'absolute', zIndex: 5, width: '100%', height: '100%' }}>
                                <View style={styles.wrapTime}>
                                    <View>
                                        <Text style={styles.txtTitle}>Ngày đặt</Text>
                                        <View style={styles.iptSelectDate}>
                                            <TextInput
                                                value={dateObj.selectedDate}
                                            />
                                        </View>
                                    </View>
                                    <TimeFrom timeFrom={timeFrom} handleTimeFrom={handleTimeFrom} />
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Count timeTo={timeTo} handleTimeTo={handleTimeTo} />
                                </View>
                                <SelectDate getSelectedDayEvents={getSelectedDayEvents} dateObj={dateObj} />
                                <Text style={styles.textRule}>Cam kết sử dụng dịch vụ</Text>
                                <View style={styles.wrapCommit}>
                                    <CheckBox
                                        title={null}
                                        checked={toggleCheckBox}
                                        checkedColor="#fff"
                                        onPress={() => setToggleCheckBox(!toggleCheckBox)}
                                    />
                                    <Text style={styles.textCommit}>Tôi đã đọc và cam kết</Text>
                                </View>
                                <View style={styles.wrapBtn}>
                                    <TouchableOpacity onPress={() => addService()} style={[styles.btnConfirm, {
                                        backgroundColor: 'transparent',
                                        height: 50, display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: 'orange',
                                        borderWidth: 2
                                    }]}>
                                        <Text style={{ color: 'orange' }}>ĐĂNG KÝ</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: '#000', opacity: .7,
                                position: "absolute",
                                zIndex: 4,
                                width: '100%',
                                height: '100%'
                            }} />
                        </ImageBackground >
                    </View>
                </View>
            </View>
        </>
    )
}

function Count({ timeTo, handleTimeTo }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: "65m2", value: "16" },
        { label: "120m2", value: "17" },
        { label: "150m2", value: "18" },
        { label: "200m2", value: "19" },
        { label: "250m2", value: "20" }
    ]);


    return (
        <View style={[styles.widthContent, { alignItems: 'flex-start' }]}>
            <Text style={styles.txtTitle}>Loại căn hộ</Text>
            <DropDownPicker
                open={open}
                value={timeTo}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeTo}
                setItems={setItems}
                placeholder={items[0]?.label}
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />
        </View>
    )
}


function TimeFrom({ timeFrom, handleTimeFrom }) {

    const [open, setOpen] = useState(false);

    const [items, setItems] = useState([
        { label: "6h - 8h", value: "06:00-08:00" },
        { label: "8h - 10h", value: "08:00-10:00" },
        { label: "10h - 12h", value: "10:00-12:00" },
        { label: "12h - 14h", value: "12:00-14:00" },
        { label: "14h - 16h", value: "14:00-16:00" },
        { label: "16h - 18h", value: "16:00-18:00" },
        { label: "18h - 20h", value: "18:00-20:00" },
        { label: "20h - 22h", value: "20:00-22:00" }
    ]);
    return (
        <View style={[styles.widthContent]}>
            <Text style={styles.txtTitle}>Khung giờ</Text>
            <DropDownPicker
                open={open}
                value={timeFrom}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeFrom}
                setItems={setItems}
                placeholder={items[0]?.label}
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />

        </View>
    )
}


function SelectDate({ getSelectedDayEvents, dateObj }) {
    return (
        <View style={styles.wrapCalendar}>
            <Calendar
                current={new Date(Date.now())}
                onDayPress={(day) => {
                    getSelectedDayEvents(day.dateString)
                }}
                markedDates={dateObj.markedDates}
                minDate={new Date()}

            />
        </View>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: '#fff',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: '#fff',
        paddingRight: 30, // to ensure the text is never behind the icon
        backgroundColor: '#fff'
    },
});
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    separator: {
        height: 1, backgroundColor: '#fff', width: 80,
        marginTop: 5,
        marginLeft: 0
    },
    widthContent: {
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapperText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 100,
        backgroundColor: '#006633'
    },

    textBanner: {
        position: 'absolute',
        top: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },

    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    textConfirm: {

        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10
    },
    test: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white'
    },
    wrapTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        margin: 15
    },
    wrapBtn: {
        padding: 10,

        borderRadius: 10
    },
    textRule: {
        color: '#fff',
        textDecorationLine: 'underline',
        marginBottom: 10,
        marginLeft: 15,
        fontSize: 14
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0
    },
    textCommit: {
        marginLeft: 0,
        fontSize: 12,
        color: '#FFF'
    },
    btnBack: {
        position: 'absolute',
        left: 20,
        top: 5
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%'
    },
    wrapCalendar: {
        padding: 15
    },
    txtTitle: {
        fontSize: 14,
        color: '#FFF',
        marginBottom: 10,
        fontWeight: '700'
    },
    iptSelect: {
        backgroundColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        borderStyle: 'solid',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10
    },
    wrapSelect: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapText: {
        padding: 7,
        backgroundColor: '#fff'
    },
    iptSelectDate: {
        backgroundColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    },
    btnConfirm: {
        padding: 5,
        borderRadius: 10
    }
});