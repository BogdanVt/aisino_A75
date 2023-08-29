import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar,
  Platform,
} from "react-native";
import dayjs from "dayjs";
import { COLORS } from "../../theme/colors";
import { GradientCard } from "../../components/GradientCard/GradientCard";

import CaseIcon from "../../assets/icons/case.svg";
import BoxIcon from "../../assets/icons/box.svg";
import CrownIcon from "../../assets/icons/crown.svg";
import PersonIcon from "../../assets/icons/person.svg";
import TerminalsIcon from "../../assets/icons/terminals.svg";
import ExchangeIcon from "../../assets/icons/exchange.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

import DeucheLogo from "../../assets/icons/deuche.svg";

import SplashScreen from "react-native-splash-screen";

const data = [
  {
    id: "1",
    title: "My company",
    description: "You have 1 company",
    Icon: CaseIcon,
  },
  {
    id: "2",
    title: "My goods",
    description: "You have 99 goods",
    Icon: BoxIcon,
  },
  {
    id: "3",
    title: "My services",
    description: "You have 15 services",
    Icon: CrownIcon,
  },
  {
    id: "4",
    title: "My managers",
    description: "You have 4 managers",
    Icon: PersonIcon,
  },
  {
    id: "5",
    title: "My terminals",
    description: "You have 15 terminals",
    Icon: TerminalsIcon,
  },
  {
    id: "6",
    title: "Transactions",
    description: dayjs().format("DD MMMM YYYY"),
    Icon: ExchangeIcon,
  },
];

const HomeScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeaderWrapper}>
          <View style={styles.logoWrapper}>
            <DeucheLogo width={20} height={20} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Deutsche Bank</Text>
            <Text style={styles.date}>{dayjs().format("DD MMMM YYYY")}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.settingsIconWrapper}>
          <SettingsIcon width={18} height={18} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        style={styles.listWrapper}
        scrollEnabled
        columnWrapperStyle={styles.columnListStyle}
        renderItem={({ item }) => {
          const { Icon } = item;
          return (
            <GradientCard
              Icon={Icon}
              headerText={item.title}
              descText={item.description}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: COLORS.blueLight,
    paddingBottom: 50,
  },
  listWrapper: {
    marginHorizontal: 10,
  },
  columnListStyle: {
    justifyContent: "space-between",
  },
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  leftHeaderWrapper: {
    flexDirection: "row",
    gap: 15,
  },
  logoWrapper: {
    padding: 15,
    aspectRatio: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  settingsIconWrapper: {
    aspectRatio: 1,
    backgroundColor: COLORS.blackPrimary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    padding: 15,
  },
  logoIco: {
    height: "100%",
    width: "100%",
    borderRadius: 23,
  },
  titleWrapper: {
    paddingBottom: 2,
    justifyContent: "flex-end",
    gap: 3,
  },
  title: {
    fontFamily: "Geologica_Auto-SemiBold",
    fontSize: 20,
    lineHeight: 20,
    color: COLORS.black,
  },
  date: {
    fontFamily: "Geologica_Auto-Medium",
    fontSize: 10,
    lineHeight: 10,
    color: COLORS.blueMedium,
  },
});

export default HomeScreen;
