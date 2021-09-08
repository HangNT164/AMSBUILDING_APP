import React from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import RNDateTimePicker from '@react-native-community/datetimepicker';
export default function EditDob({navigation}) {
    return <View style={styles.wrapper}>
        <Header />
        <View style={styles.wrapContent}>
            <View style={styles.wrapText}>
                <Text style={{  fontSize: 20, color: 'white', fontWeight: 'bold' }}>Sửa Ngày Sinh</Text>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.backIcon}
                ><Ionicons name="caret-back-circle-outline" size={30} color="white"  /></TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontSize: 20 }}>Chọn ngày sinh:</Text>
                <RNDateTimePicker value={new Date()} style={{ width: '100%', marginLeft: 20 }} />
            </View>
            <View>
                <Button mode="contained" style={{ marginTop: 20, backgroundColor: '#9966FF', padding: 10 }}>
                    Lưu
                </Button>
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
        backgroundColor: '#ffffff'
    },
    wrapText: {
        alignItems: 'center',
        backgroundColor: '#666666',
        padding: 15,
        position: 'relative'
    },
    backIcon: {
        position: 'absolute',
        left: 10,
        top: '50%'
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#666666',
        borderRadius: 5,
        padding: 15
    }
})