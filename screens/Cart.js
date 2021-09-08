import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import CartItem from '../components/CartItem';
import Header from '../components/Header';

export default function Cart({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.container}>
            <Text style={styles.textCart}>Giỏ hàng</Text>
            <ScrollView>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </ScrollView>
            <View style={[styles.pd15, styles.totalPrice]}>
                <Text style={styles.textPrice}>Tổng tiền</Text>
                <Text style={styles.textPrice}>8.000.000đ</Text>
            </View>
            <View style={styles.pd15}>
                <Button title="Thanh toán" buttonStyle={btnStyle} onPress={() => navigation.navigate('Payment')} />
            </View>
        </View>
    </View>
};

const btnStyle = StyleSheet.create({
    padding: 15,
    borderRadius: 20,
})

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1
    },
    textCart: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'gray',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    totalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pd15: {
        padding: 15
    },
    textPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})