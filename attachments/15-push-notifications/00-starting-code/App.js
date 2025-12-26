import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

// this method must be executed to to tell the app (and underlying the OS) how incoming notifications that are related to this app should be handled
// this method should just run once when the app starts, that's why it's outside the App component
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

export default function App() {
  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      console.log('useEffect, finalStatus:', finalStatus);

      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission required',
          'Push notifications need the appropriate permissions'
        );

        // return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log('pushTokenData', pushTokenData);

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT
        });
      }
    }

    configurePushNotifications();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('NOTIIFCATION RECEIVED');
        console.log(notification);

        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log('NOTIIFCATION RESPONSE RECEIVED');
        console.log(response);

        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This the body of the notification',
        data: {
          userName: 'Max'
        }
      },
      trigger: {
        seconds: 5
      }
    });
  }

  function sendPushNotificationHandler() {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: '', // pushToken
        title: 'Test - sent from a device',
        body: 'This is a test!'
      })
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title='Schedule Notification'
        onPress={scheduleNotificationHandler}
      />
      <Button
        title='Send Push Notification'
        onPress={sendPushNotificationHandler}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
