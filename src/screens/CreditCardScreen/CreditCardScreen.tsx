import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CartImage from '../../assets/cart.png';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import {COLORS, GRADIENT_COLORS} from '../../theme/colors';

const CreditCardScreen = () => {
  const [text, setText] = useState('0.00');

  const onPressHandler = (value: string) => {
    if (value === '') {
      setText('0.00');
      return;
    }
    setText(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerSection}>
          <LinearGradient
            colors={GRADIENT_COLORS.iconGradient}
            useAngle
            style={styles.imageWrapper}
            angleCenter={{x: 0.5, y: 0.8}}>
            <Image source={CartImage} style={styles.imageStyle} />
          </LinearGradient>

          <Text style={styles.textHeader}>{`Pay for service  **** 1432`}</Text>
        </View>

        <View style={styles.summWrapper}>
          <Text style={styles.textSumm}>$</Text>
          <Text style={styles.textSumm}>{text}</Text>
        </View>

        <View style={styles.keyboardWrapper}>
          <VirtualKeyboard
            color="white"
            decimal
            pressMode="string"
            onPress={onPressHandler}
            rowStyle={{
              padding: 15,
            }}
          />
        </View>
      </View>
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
  contentWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    width: '100%',
    paddingTop: 50,
    paddingBottom: 10,
  },

  keyboardWrapper: {
    alignItems: 'baseline',
    backgroundColor: COLORS.darkBlue,
    borderRadius: 50,
    paddingBottom: 20,
  },
  headerSection: {
    marginTop: 30,
    gap: 10,
    alignItems: 'center',
  },
  imageWrapper: {
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 90,
    height: 90,
    aspectRatio: 1,
  },
  textHeader: {
    color: COLORS.black,
    fontFamily: 'Geologica_Auto-Medium',
    fontSize: 16,
  },
  summWrapper: {
    flexDirection: 'row',
    fontFamily: 'Geologica_Auto-Bold',
    fontSize: 32,
  },
  textSumm: {
    color: COLORS.black,
    fontFamily: 'Geologica_Auto-Bold',
    fontSize: 52,
  },
});

export default CreditCardScreen;
