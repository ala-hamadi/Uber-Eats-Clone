import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
  const foods = [
    {
      title: "Lasagna",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      description:
        "Lorem orem loreLorem orem loreLorem orem loreLorem orem lore",
      price: "$13.50",
    },
    {
      title: "Lasagna2",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      description:
        "Lorem orem loreLorem orem loreLorem orem loreLorem orem lore",
      price: "$13.50",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Lottie
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at restaurantName has been placed for totalUSD
        </Text>
        <ScrollView>
          <MenuItems hideCheckbox={true} marginLeft={10} />
        </ScrollView>
        <Lottie
          style={{ height: 200, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
}
