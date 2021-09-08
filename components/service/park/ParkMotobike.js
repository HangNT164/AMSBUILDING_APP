import React, { useState } from 'react';
import { Button } from 'react-native';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import HomeImage from '../../../assets/images/bgscreen.png';
import API from '../../lib/API';
import LoadingProgressBar from '../../LoadingProgressBar';
import { Controller, useForm } from "react-hook-form";
import { CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function ParkMotobike() {
    const [loading, setLoading] = useState(false);
    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const token = useSelector(state => state.user?.token)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const roleId = useSelector(state => state.user?.roleId)
    const [message, setMessage] = useState();
    const accountIdRedux = useSelector(state => state.user?.accountId)
    let navigation = useNavigation()

    let addPark = async (form) => {

        try {
            if (toggleCheckBox) {
                if (roleId == 3) {
                    setLoading(true);
                    let path = '/landlord/vehicle_card/add';
                    let objReq = {
                        vehicleId: 2,
                        accountId: accountIdRedux,
                        vehicleBranch: form?.vehicleBranch,
                        licensePlate: form?.licensePlate,
                        vehicleColor: form?.vehicleColor
                    }
                    let resp = await API.authorizedJSONPost(path, [objReq], token);
                    if (resp.ok) {
                        setLoading(false)
                        let response = await resp.json();

                        reset()
                        Toast.show({
                            type: 'success',
                            position: 'bottom',
                            bottomOffset: 50,
                            text1: 'Bạn đã gửi yêu cầu thành công',
                            text2: "Ấn vào đây để theo dõi tiến trình nhé!",
                            onPress: () => {
                                navigation.navigate("DetailProcess", { id: response?.serviceId, typeRequest: response?.typeService })
                            }
                        })
                    } else {
                        let response = await resp.json();
                        setLoading(false)
                        setMessage(response?.message)
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
            console.log(error)
        }
    }
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }
    return (
        <>
            <ImageBackground source={HomeImage} style={styles.image}>
                <View style={[styles.features, { position: 'absolute', zIndex: 15 }]}>

                    <View style={{ height: 400 }}>
                        <View style={{ backgroundColor: 'transparent', padding: 15, height: 250 }}>
                            <View style={[styles.featureItem, { justifyContent: 'center' }]}>
                            </View>
                            <View style={styles.featureInput}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <View style={{ width: '100%' }}>
                                            <Text style={styles.label}>Loại xe</Text>
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                placeholderTextColor="#888"
                                                style={[styles.textInputComment, errors.vehicleBranch ? styles.errorInput : undefined]}
                                                underlineColorAndroid="transparent"
                                                color="white"
                                            />
                                        </View>
                                    )}
                                    name="vehicleBranch"
                                    rules={{ required: true }}
                                    defaultValue=""
                                />
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.featureInput}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <View style={{ width: '100%' }}>
                                            <Text style={styles.label}>Màu xe</Text>
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                placeholderTextColor="#888"
                                                style={[styles.textInputComment, errors.vehicleColor ? styles.errorInput : undefined]}
                                                underlineColorAndroid="transparent"
                                                color="white"
                                            />
                                        </View>
                                    )}
                                    name="vehicleColor"
                                    rules={{ required: true }}
                                    defaultValue=""
                                />
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.featureInput}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <View style={{ width: '100%' }}>
                                            <Text style={styles.label}>Biển số</Text>
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                placeholderTextColor="#888"
                                                style={[styles.textInputComment, errors.licensePlate ? styles.errorInput : undefined]}
                                                underlineColorAndroid="transparent"
                                                color="white"
                                            />
                                        </View>
                                    )}
                                    name="licensePlate"
                                    rules={{ required: true }}
                                    defaultValue=""
                                />
                            </View>
                            <View style={styles.separator} />

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textPrice}>Phí xe: {currencyFormat(140000?.toString())}</Text>
                            </View>
                        </View>
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

                        <View style={[styles.wrapBtn]}>
                            <TouchableOpacity style={styles.btnLogin}
                                onPress={handleSubmit(addPark)}
                                disabled={loading}>
                                <Text style={styles.shareNowText}>XÁC NHẬN {loading && <LoadingProgressBar />}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#000', opacity: .7,
                    position: "absolute",
                    zIndex: 4,
                    width: '100%',
                    height: '100%'
                }} />
            </ImageBackground>
        </>
    )
}




const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1
    }, textRule: {
        color: '#fff',
        textDecorationLine: 'underline',
        marginBottom: 10,
        marginTop: 20,
        fontSize: 14,
        marginLeft: 20
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0
    },
    textCommit: {
        marginLeft: 0,
        fontSize: 12,
        color: '#FFF',

    },
    wrapContent: {
        flex: 1,
        position: 'relative'
    }, textInputComment: {
        color: '#333',
        fontSize: 15,
        width: '100%'
    },
    separator: {
        height: 1, backgroundColor: '#ddd', width: '100%', marginBottom: 10
    },
    imageBanner: {
        height: '100%'
    },
    btnLogin: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10
    },
    shareNowText: {
        color: 'orange'
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#161b224d',

    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%',
        zIndex: 1
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%',
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 3
    },
    wrapText: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 100,
        backgroundColor: '#006633',
        width: '100%',
        paddingTop: 30,
        position: 'relative',
        borderBottomColor: '#282828',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    btnBack: {
        position: 'absolute',
        left: 15,
        top: 50
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff'
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        height: 29,
        marginTop: 20,
        marginLeft: 14,
        marginRight: 14
    },
    wrapItem: {
        width: '33.333%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textItem: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    active: {
        backgroundColor: '#006633',
    },
    noneBorder: {
        borderTopLeftRadius: 0,
        borderBottomStartRadius: 0,
    },
    features: {
        height: 500,

        marginTop: 50,
        marginLeft: 15,
        marginRight: 15
    },
    numberCar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        padding: 10
    },
    textNumber: {
        marginRight: 15,
        fontSize: 14
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    featureInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
        width: '100%'
    },
    input: {
        borderWidth: 1,
        width: 150,
        height: 40,
        borderRadius: 15,
        paddingLeft: 8,
    },
    wrapBtn: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 10
    },
    textPrice: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white'
    },
    label: {
        color: 'white'
    }
});