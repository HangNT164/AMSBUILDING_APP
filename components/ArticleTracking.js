import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import API from './lib/API';

export default function ArticleTracking({ navigation, data, search }) {
    const token = useSelector(state => state.user?.token);
    const roleId = useSelector(state => state.user?.roleId)

    let cancel = () => {
        try {
            if (roleId == 3) {
                if (data?.statusId == 1) {
                    Toast.show({
                        type: 'info',
                        position: 'bottom',
                        autoHide: false,
                        bottomOffset: 50,
                        text1: 'Thông báo',
                        text2: 'Bạn chắc chắn muốn hủy dịch vụ?',
                        onPress: async () => {
                            let path = `/landlord/request-service/update-app/${data?.id}?statusId=4&typeRequest=${data?.typeRequest}`;
                            Toast.hide()

                            let resp = await API.authorizedJSONPost(path, null, token);
                            if (resp.ok) {
                                search()
                                Toast.show({
                                    type: 'success',
                                    position: 'bottom',
                                    bottomOffset: 50,
                                    text1: 'Thành công',
                                    text2: 'Bạn đã hủy dịch vụ thành công!.'
                                })
                            } else {
                                Toast.show({
                                    type: 'error',
                                    position: 'bottom',
                                    bottomOffset: 50,
                                    text1: 'Thành công',
                                    text2: 'Bạn đã hủy dịch vụ thành công!.'
                                })
                            }
                        }
                    })
                } else {
                    Toast.show({
                        type: 'info',
                        position: 'bottom',
                        bottomOffset: 50,
                        text1: 'Thông báo',
                        text2: 'Bạn không thể hủy dịch vụ này!.'
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
        } catch (error) {

        }



    }
    return <View style={styles.wrapper}>
        <Text style={styles.title}>{data?.serviceName}</Text>
        <Text style={styles.desc}>{data?.description}</Text>
        <View style={styles.note}>
            <Text style={styles.time}>{data?.time}</Text>
            <View style={styles.more}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailProcess', { id: data?.id, typeRequest: data?.typeRequest })}>
                    <Text style={styles.textRead}>Xem tiến trình</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={cancel}>
                    <Text style={styles.textCancle}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    desc: {
        fontSize: 14,
        marginBottom: 10,
        color: '#fff'
    },
    note: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        color: '#f0f0f0',
        fontSize: 13,

    },
    more: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRead: {

        color: '#fff',
        fontSize: 13,
        marginRight: 10
    },
    textCancle: {

        color: '#fff',
        fontSize: 13,
    }
});