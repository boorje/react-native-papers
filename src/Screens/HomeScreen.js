import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const HomeRoute = () => (
  <View>
    <Appbar.Header>
      <Appbar.Content title="Home Page" />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => console.log("handle press")}
      />
    </Appbar.Header>
  </View>
);

export default HomeRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
