import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed})=> pressed ?[styles.pressed,styles.btnInnerContainer]: styles.btnInnerContainer}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  btnInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity:0.7
  }
});
