import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}