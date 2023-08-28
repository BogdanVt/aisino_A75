/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, GRADIENT_COLORS} from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';

interface GradientCardProps {
  Icon: any;
  headerText: string;
  descText: string;
}

export const GradientCard: FC<GradientCardProps> = ({
  Icon,
  headerText,
  descText,
}) => {
  return (
    <TouchableOpacity style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <LinearGradient
            colors={GRADIENT_COLORS.iconGradient}
            style={styles.iconWrapper}
            useAngle
            angleCenter={{x: 0.5, y: 0.8}}>
            <Icon color="black" width={24} height={24} />
          </LinearGradient>
        </View>
        <View>
          <Text style={styles.textHeader}>{headerText}</Text>
          <Text style={styles.textDescription}>{descText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    minHeight: 160,
    padding: 15,
    maxWidth: '100%',
    borderRadius: 30,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconWrapper: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  textHeader: {
    fontFamily: 'Geologica_Auto-SemiBold',
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 20,
  },
  textDescription: {
    fontFamily: 'Geologica_Auto-Regular',
    color: COLORS.blueLighten,
    fontSize: 11,
    lineHeight: 15,
  },
});
