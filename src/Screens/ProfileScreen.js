import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title, withTheme } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const ProfileRoute = (props) => (
  <SafeAreaView style={styles.container}>
    <FontAwesome name="user" size={50} color={props.theme.colors.primary} />
    <Title>Profile page</Title>
  </SafeAreaView>
);
export default withTheme(ProfileRoute);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
