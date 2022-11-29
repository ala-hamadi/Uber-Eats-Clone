import React from "react";
import { View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/BottomTabs";
import Categories from "../components/Categories";

import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#eee",
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Divider width={1} />
        <BottomTabs />
      </View>
    </SafeAreaView>
  );
}
