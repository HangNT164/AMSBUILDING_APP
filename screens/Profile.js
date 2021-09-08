import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Avatar from '../assets/images/sontungmtp.png';
import Header from '../components/Header';

export default function Profile({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}>
                    <Text style={styles.textOverlay}>Chạm để thay đổi</Text>
                </View>
                <View style={styles.wrapAvatar} >
                    <Image source={Avatar} style={styles.imageAvatar} />
                </View>
            </View>
            <View style={styles.wrapForm}>
                <View style={styles.formContent}>
                    <Text style={styles.textContent}>Tên chủ hộ:</Text>
                    <TouchableOpacity style={styles.contentRight}  onPress={() => navigation.navigate('EditName')} activeOpacity={0.8}>
                        <Text style={styles.textContent}>Nguyễn Văn A</Text>
                        <AntDesign name="right" size={18} color="black" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.formContent}>
                    <Text style={styles.textContent}>Căn hộ:</Text>
                    <View style={styles.contentRight} >
                        <Text style={styles.textContent}>A103</Text>
                    </View>
                </View>
                <View style={styles.formContent}>
                    <Text style={styles.textContent}>Ngày sinh:</Text>
                    <TouchableOpacity style={styles.contentRight} onPress={() => navigation.navigate('EditDob')} activeOpacity={0.8}>
                        <Text style={styles.textContent}>10/8/1999</Text>
                        <AntDesign name="right" size={18} color="black" style={{ marginLeft: 5 }}  />
                    </TouchableOpacity>
                </View>
                <View style={styles.formContent}>
                    <Text style={styles.textContent}>Số CCCD:</Text>
                    <TouchableOpacity style={styles.contentRight} onPress={() => navigation.navigate('EditIdentification')} activeOpacity={0.8}>
                        <Text style={styles.textContent}>026099000469</Text>
                        <AntDesign name="right" size={18} color="black" style={{ marginLeft: 5 }}  />
                    </TouchableOpacity>
                </View>
                <View style={styles.formContent}>
                    <Text style={styles.textContent}>Số điện thoại: </Text>
                    <TouchableOpacity style={styles.contentRight} onPress={() => navigation.navigate('EditPhone')} activeOpacity={0.8}>
                        <Text style={styles.textContent}>0964600609</Text>
                        <AntDesign name="right" size={18} color="black" style={{ marginLeft: 5 }}  />
                    </TouchableOpacity>
                </View>
                <View style={styles.formContent}>
                    <Text style={styles.textContent}>Email:</Text>
                    <TouchableOpacity style={styles.contentRight} onPress={() => navigation.navigate('EditEmail')} activeOpacity={0.8}>
                        <Text style={styles.textContent}>manhnvhe@gmail.com </Text>
                        <AntDesign name="right" size={18} color="black" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.formContent, styles.changePass]} onPress={() => navigation.navigate('ChangePassword')}>
                    <Text style={styles.textContent}>Thay đổi mật khẩu:</Text>

                    <AntDesign name="right" size={18} color="black"  />

                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 200,
    },
    wrapAvatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
        overflow: 'hidden',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -50,
        marginLeft: -50
    },
    imageAvatar: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 40,
        backgroundColor: 'black',
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBanner: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
    },
    textOverlay: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    formContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    contentRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContent: {
        fontSize: 14
    },
    changePass: {
        marginTop: 30
    }
});