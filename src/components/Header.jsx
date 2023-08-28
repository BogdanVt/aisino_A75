import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import SettingIco from '../../assets/Setting.png';

export const Header = () => {
  const dayjs = require('dayjs');
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.logo}>
          <Image
            style={styles.logoIco}
            source={require('../../assets/Avatar.jpg')}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Nolan Franci</Text>
          <Text style={styles.date}>{dayjs().format('DD MMMM YYYY')}</Text>
        </View>
      </View>
      <Pressable style={styles.settingsBtn}>
        <Image style={styles.logoIco} source={SettingIco} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  logo: {
    width: 46,
    height: 46,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    // padding: 5,
  },
  logoIco: {
    height: '100%',
    width: '100%',
    borderRadius: 23,
  },
  titleWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginLeft: 15,
    gap: 3,
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  date: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  settingsBtn: {
    width: 46,
    height: 46,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});
