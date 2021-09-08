import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Essantial from '../assets/images/essantial.png';
import NumericInput from 'react-native-numeric-input';
export default function CartItem() {
    return <View style={styles.wrapper}>
        <View style={styles.wrapCard}>
            <View style={styles.wrapCardItem}>
                <Image source={Essantial} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>Áo Essential Fear Of God</Text>
                    <Text style={{ marginBottom: 5 }}>2.000.000đ</Text>
                    <NumericInput
                        totalWidth={180}
                        totalHeight={50}
                        iconSize={25}
                        step={1}
                        valueType='real'
                        rounded
                        textColor='#B0228C'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='#9966FF'
                        leftButtonBackgroundColor='#9966FF' />

                </View>
                <MaterialIcons name="delete" size={30} color="black" />
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 15
    },
    wrapCardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapCard: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 10
    }
});