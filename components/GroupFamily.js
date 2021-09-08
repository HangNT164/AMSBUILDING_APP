import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function GroupFamily({ data }) {
    return <View style={{ padding: 15, borderBottomWidth: 1, borderColor: 'gray' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150, fontSize: 16, fontWeight: '700' }}>Tên:</Text>
            <View style={{ width: '100%' }}>
                <Text>{data?.name}</Text>
                <View style={styles.separator} />
            </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150, fontSize: 16, fontWeight: '700' }}>Số điện thoại:</Text>
            <View style={{ width: '100%' }}>
                <Text>{data?.phone}</Text>
                <View style={styles.separator} />
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150, fontSize: 16, fontWeight: '700' }}>Ngày sinh:</Text>
            <View style={{ width: '100%' }}>
                <Text>{data?.dob}</Text>
                <View style={styles.separator} />
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150, fontSize: 16, fontWeight: '700' }}>Số CCCD:</Text>
            <View style={{ width: '100%' }}>
                <Text>{data?.identifyCard}</Text>
                <View style={styles.separator} />
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 150, fontSize: 16, fontWeight: '700' }}>Quan hệ với chủ hộ:</Text>
            <View style={{ width: '100%' }}>
                <Text>{data?.relationShip}</Text>
                <View style={styles.separator} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    separator: {
        height: 1, backgroundColor: '#ddd', width: '100%', marginTop: 5
    }
})