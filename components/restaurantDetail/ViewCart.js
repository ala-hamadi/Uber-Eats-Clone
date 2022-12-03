import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import OrderItem from "./OrderItem";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [loading, setLoading] = useState(false);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });
  const [modalVisible, setModalVisible] = useState(false);
  const items = [
    { title: "title1", price: "price1" },
    { title: "title2", price: "price2" },
    { title: "title3", price: "price3" },
  ];
  const checkoutModalContent = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View />
        </TouchableOpacity>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>Restaurant name</Text>
          {items.map((item, index) => {
            return <OrderItem key={index} item={item} />;
          })}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}> Subtotal</Text>
            <Text> 50$</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => {
                setLoading(true);
                setModalVisible(false);
                setTimeout(() => {
                  navigation.navigate("OrderCompleted");
                  setLoading(false);
                }, 2500);
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                  top: 17,
                }}
              >
                500$
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        statusBarTranslucent={true}
      >
        {checkoutModalContent()}
      </Modal>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: "5%",
          zIndex: 999,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "black",
              alignItems: "center",
              padding: 13,
              borderRadius: 30,
              width: 300,
              position: "relative",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
            <Text
              style={{
                position: "absolute",
                right: 20,
                color: "white",
                fontSize: 15,
                top: 17,
              }}
            >
              5000
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
