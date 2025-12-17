import { Alert, Button, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus
} from 'expo-image-picker';

function ImagePicker() {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      // request permisison, user will give the permission or decline it
      const permissionResponse = await requestPermission();

      return permissionResponse.granted; // true or false
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions',
        'You need to grant camera permisions to use this app.'
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title='Take Image' onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;
