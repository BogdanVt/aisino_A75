import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import SvgUri from 'react-native-svg-uri';

// import HomeIco from '../../assets/home.svg';

export const NavBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.navBtn}>
          {/* <SvgUri
          width="50"
          height="50"
          source={require('../../assets/home.svg')}
        /> */}
          <Text style={styles.menuTitle}>Home</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.navBtn}>
          {/* <SvgUri
          width="50"
          height="50"
          source={require('../../assets/home.svg')}
        /> */}
          <Text style={styles.menuTitle}>Notifications</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.navBtn}>
          {/* <SvgUri
          width="50"
          height="50"
          source={require('../../assets/home.svg')}
        /> */}
          <Text style={styles.menuTitle}>Company</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.navBtn}>
          {/* <SvgUri
          width="50"
          height="50"
          source={require('../../assets/home.svg')}
        /> */}
          <Text style={styles.menuTitle}>Pay</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 75,
    minHeight: 65,
    width: '100%',
    backgroundColor: '#1F1F1F',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navBtn: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
  },
  menuIco: {},
  menuTitle: {
    fontSize: 13,
    fontWeight: '300',
    color: '#8F8F8F',
  },
});
