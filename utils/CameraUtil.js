
import { Linking } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

export const pickupPhoto = (maxWidth, maxHeight, quality = 0.8) => {
    let options = {
        mediaType: "photo",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        quality: quality,
        includeBase64: false
    };
    return new Promise((resolve, reject) => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                reject()
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: "Lỗi!",
                    text2: "Lỗi!",
                });
                reject()
                return;
            } else if (response.errorCode == 'permission') {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: "Lỗi!",
                    text2: "Lỗi!",
                    onPress: async () => {
                        Toast.hide()
                        Linking.openSettings()
                    }
                });
                reject()
                return;
            } else if (response.errorCode == 'others') {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: "Lỗi!",
                    text2: "Lỗi!",
                });
                reject()
                return;
            }

            resolve(response);
        });
    })
};