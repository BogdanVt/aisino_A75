import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {NavBar} from '../../components/NavBar';

const Home = () => {
  return (
    <View style={styles.root}>
      <View style={styles.contentWrapper}>
        <Header />
      </View>
      <View style={styles.navBarWrapper}>
        <NavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1D241C',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 7,
    width: '100%',
    paddingHorizontal: 15,
  },
  navBarWrapper: {
    flex: 1,
    width: '100%',
  },
});

export default Home;
