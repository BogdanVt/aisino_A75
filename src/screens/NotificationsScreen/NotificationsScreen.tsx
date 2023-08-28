import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../theme/colors';

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Notification Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blueLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.blackSecondary,
    fontWeight: '500',
  },
});

export default NotificationsScreen;
