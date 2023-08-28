/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme/colors';

interface DefaultCardProps {
  Icon: any;
  headerText: string;
  descText: string;
  horizontal?: boolean;
  onPress?: any;
}

export const DefaultCard: FC<DefaultCardProps> = ({
  Icon,
  headerText,
  descText,
  horizontal,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, horizontal && styles.horizontalStyle]}>
      <View style={styles.iconWrapper}>
        <Icon width={24} height={24} />
      </View>

      <View>
        <Text style={styles.textHeader}>{headerText}</Text>
        <Text style={styles.textDescription}>{descText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    minHeight: 160,
    padding: 10,
    maxWidth: '100%',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  horizontalStyle: {
    minHeight: 100,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconWrapper: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.blackSecondary,
  },
  textHeader: {
    fontFamily: 'Geologica_Auto-Medium',
    color: COLORS.black,
    fontSize: 24,
  },
  textDescription: {
    fontFamily: 'Geologica_Auto-Medium',
    color: COLORS.bluePrimary,
    fontSize: 12,
    lineHeight: 15,
  },
});
