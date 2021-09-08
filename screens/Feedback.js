import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import API from '../components/lib/API';

export default function Feedback() {

    const [text, setText] = useState();
    const [star, setStar] = useState(0);
    const token = useSelector(state => state.user?.token)
    const accountIdRedux = useSelector(state => state.user.accountId);

    const addFeedBack = async () => {
        try {
            let path = '/landlord/feedback/add';
            let resp = await API.authorizedJSONPost(path, {
                accountId: accountIdRedux,
                description: text,
                star: star
            }, token);
            if (resp.ok) {
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'OK',
                    text2: 'Bạn gửi phản hồi thành công!.'
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <View style={styles.wrapper}>

        <View style={styles.wrapContent}>

            <View style={styles.feedback}>
                <Text style={styles.textFeedback}>Hãy đánh giá chúng tôi</Text>
                <AirbnbRating reviews={[]}
                    count={5}
                    defaultRating={0}
                    size={30}
                    onFinishRating={value => setStar(value)}
                />
            </View>
            <View style={{ padding: 15 }}>

                <TextInput
                    onChangeText={value => setText(value)}
                    value={text}
                    placeholder={"Mô tả..."}
                    placeholderTextColor="#888"
                    style={[styles.inputText]}
                    underlineColorAndroid="transparent"

                />
            </View>
            <View style={styles.wrapBtn}>
                <View style={styles.btnFeedback}>
                    <Text onPress={() => addFeedBack()} style={{ textAlign: 'center', color: 'orange' }}>Gửi</Text>
                </View>
            </View>
        </View>
    </View >
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapNav: {
        backgroundColor: '#666666'
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    inputText: {
        textAlignVertical: 'top',
        paddingTop: 20,
        fontSize: 18,
        height: 200,
        paddingLeft: 5,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#eaeaea'
    },
    wrapContent: {
        flex: 1,
    },
    wrapArea: {
        padding: 10
    },
    textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        backgroundColor: '#fff'
    },
    feedback: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    textFeedback: {
        fontWeight: 'bold',
        fontSize: 30
    },
    wrapBtn: {
        padding: 15,

    },
    btnFeedback: {
        padding: 10,
        width: 100,
        marginLeft: 'auto',
        borderRadius: 10,
        marginTop: 10,
        borderColor: 'orange',
        borderWidth: 2
    }
});