import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
export default function HeaderApp({ navigation }) {
    return (
        <Header
            placement="left"

            centerComponent={{ text: 'RESIDENT APP', style: { color: '#fff' } }}
            rightComponent={<MyCustomRightComponent navigation={navigation} />}
            backgroundColor='#333333'
        />
    )
};

function MyCustomRightComponent({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="home" size={18} color="white" />
        </TouchableOpacity>
    )
}
