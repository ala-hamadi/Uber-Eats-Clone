import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";

import HeaderTabs from "../components/HeaderTabs";

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
      </View>
    </SafeAreaView>
  );
}
