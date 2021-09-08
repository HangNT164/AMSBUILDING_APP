import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
export default function QRScreen() {
    const [seconds, setSeconds] = useState(120);
    const [value, setValue] = useState("0")
    useEffect(() => {
        handleSecond()
    }, [seconds]);

    const handleSecond = () => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            randomQR()
            setSeconds(120)
        }
    }
    const randomQR = () => {
        setValue(Math.floor(Math.random() * 100).toString())
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>

                </Text>
                <View style={styles.qrCode}>
                    <View>
                        <QRCode
                            value={value}
                            size={200}
                        />
                    </View>
                    <Text style={{ color: 'black', marginTop: 20 }}>
                        Tự động cập nhập sau <Text style={{ fontWeight: '700' }}>{seconds}</Text> giây
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    },
    text: {
        color: '#fff',
        fontSize: 25
    },
    qrCode: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})