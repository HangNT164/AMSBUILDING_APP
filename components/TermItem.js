import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TermItem() {
    return <View style={styles.wrapper}>
        <View style={styles.container}>
            <Text style={styles.number}>1.</Text>
            <Text style={styles.desc}>Việc đóng kinh phí quản lý vận hành nhà chung cư được thực hiện theo thỏa thuận giữa chủ sở hữu, người sử dụng nhà chung cư với đơn vị quản lý vận hành trên cơ sở các quy định của pháp luật về nhà ở. Việc sử dụng kinh phí quản lý vận hành, kinh phí bảo trì phần sở hữu chung của nhà chung cư phải bảo đảm đúng mục đích, công khai, minh bạch, theo đúng quy định của pháp luật về nhà ở và Quy chế này; việc đóng góp các khoản phí, lệ phí trong quá trình sử dụng nhà chung cư phải tuân thủ các quy định của pháp luật</Text>
        </View>

    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        borderBottomColor: 'pink',
        borderBottomWidth: 1
    },
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    number: {
        fontWeight: 'bold',
        fontSize:16
    },
    desc: {
        marginLeft: 10,
        fontSize: 14
    }
})