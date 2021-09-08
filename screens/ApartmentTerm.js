import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import TermItem from '../components/TermItem';
export default function ApartmentTerm({ navigation }) {
    return <View style={styles.wrapper}>
        <View style={styles.wrapContent}>

            <ScrollView>
                {/* <TermItem />
                <TermItem />
                <TermItem />
                <TermItem />
                <TermItem /> */}
                <View style={styles.wrapperItem}>
                    <View style={styles.container}>
                        <Text style={styles.number}>1.</Text>
                        <Text style={styles.desc}>Khoản 2 Điều 30 Quy chế quản lý, sử dụng nhà chung cư được ban hành kèm theo Thông tư 02/2016/TT-BXD, giá dịch vụ quản lý vận hành nhà chung cư được xác định bằng tiền Việt Nam đồng và tính trên mỗi mét vuông (m2) diện tích sử dụng căn hộ hoặc phần diện tích khác trong nhà chung cư (xác định theo diện tích thông thủy).</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.number}>2.</Text>
                        <Text style={styles.desc}>Khoản 2 Điều 85 Luật Nhà ở năm 2014, nhà chung cư được bảo hành tối thiểu 60 tháng kể từ khi hoàn thành việc xây dựng và nghiệm thu đưa vào sử dụng. Do đó, trường hợp tại hợp đồng mua bán căn hộ nếu quy định thời hạn bảo hành lớn hơn 60 tháng thì áp dụng theo hợp đồng mua bán căn hộ, nếu quy định thời hạn bảo hành dưới 60 tháng thì áp dụng thời gian bảo hành là 60 tháng.</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.number}>3.</Text>
                        <Text style={styles.desc}>Người mua, thuê mua nhà ở, chủ đầu tư phải đóng 2% kinh phí bảo trì phần sở hữu chung của nhà chung cư theo quy định tại Điều 108 của Luật Nhà ở; khoản kinh phí này được tính trước thuế để nộp (Nhà nước không thu thuế đối với khoản kinh phí này). Chủ đầu tư phải mở một tài khoản thanh toán tại một tổ chức tín dụng đang hoạt động tại Việt Nam để nhận tiền bảo trì do người mua, thuê mua căn hộ hoặc diện tích khác trong nhà chung cư nộp; khi mở tài khoản, chủ đầu tư phải ghi rõ tên tài khoản là tiền gửi kinh phí bảo trì nhà chung cư dưới hình thức có kỳ hạn.</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.number}>4.</Text>
                        <Text style={styles.desc}>Chủ đầu tư phải ghi thống nhất tài khoản đã mở theo quy định tại Khoản 1 Điều này trong hợp đồng mua bán, thuê mua căn hộ hoặc diện tích khác trong nhà chung cư ký với khách hàng (bao gồm số tài khoản, tên tài khoản và tên tổ chức tín dụng nơi mở tài khoản này); người mua, thuê mua trước khi nhận bàn giao nhà ở phải nộp 2% kinh phí bảo trì theo quy định vào tài khoản đã ghi trong hợp đồng này hoặc nộp cho chủ đầu tư để chuyển vào tài khoản đã ghi trong hợp đồng; nếu chủ đầu tư không thu kinh phí này mà vẫn bàn giao căn hộ hoặc diện tích khác trong nhà chung cư cho người mua, thuê mua thì chủ đầu tư phải nộp khoản kinh phí 2% này.</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.number}>5.</Text>
                        <Text style={styles.desc}>Đối với phần diện tích nhà mà chủ đầu tư giữ lại không bán hoặc chưa bán, chưa cho thuê mua tính đến thời điểm nghiệm thu đưa toàn bộ nhà chung cư vào sử dụng mà thuộc diện phải nộp kinh phí bảo trì 2% cho Ban quản trị nhà chung cư (sau đây gọi chung là Ban quản trị) theo quy định của Luật Nhà ở thì chủ đầu tư phải chuyển số kinh phí này vào tài khoản đã lập quy định tại khoản 1 Điều này.</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.number}>6.</Text>
                        <Text style={styles.desc}>Sau khi Ban quản trị được thành lập và có văn bản yêu cầu bàn giao kinh phí bảo trì mà chủ đầu tư đang tạm quản lý thì chủ đầu tư và Ban quản trị thống nhất lập hồ sơ quyết toán số liệu kinh phí bảo trì; căn cứ vào số liệu quyết toán do hai bên thống nhất, chủ đầu tư có trách nhiệm chuyển kinh phí bảo trì thuộc diện phải chuyển giao theo quy định của pháp luật về nhà ở sang cho Ban quản trị quản lý thông qua hình thức chuyển khoản. Cách thức lập tài khoản quản lý kinh phí bảo trì của Ban quản trị và thủ tục bàn giao kinh phí bảo trì phần sở hữu chung của nhà chung cư sang cho Ban quản trị được thực hiện theo Quy chế quản lý, sử dụng nhà chung cư do Bộ Xây dựng ban hành.</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.number}>7.</Text>
                        <Text style={styles.desc}>Luật Nhà ở quy định những quy tắc chung quản lý sử dụng chung cư, Thông tư 16, Thông tư 19 bao gồm những quy định về trình tự thủ tục cụ thể tổ chức Hội nghị Nhà chung cư, quản lý phần sở hữu chung, phần sử dụng chung, quản lý vận hành chung cư, bảo trì chung cư,…Tính phù hợp của hệ thống pháp luật thể hiện ở nội dung của hệ thống pháp luật luôn có sự tương quan với trình độ phát triển kinh tế - xã hội của đất nước. Sự phù hợp của các văn bản quy phạm pháp luật Luật Nhà ở, Luật Kinh doanh bất động sản, các nghị định hướng dẫn thi hành đã ngày càng phù hơp với các quy luật khách quan của sự phát triển kinh tế - xã hội nên sẽ bảo đảm cho tính khả thi và hiệu quả của pháp luật.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
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
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    wrapContent: {
        flex: 1,
        paddingRight: 15
    },
    container: {
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    number: {
        fontWeight: 'bold',
        fontSize: 16
    },
    desc: {
        marginLeft: 10,
        fontSize: 14
    }
});