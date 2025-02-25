import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helper/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "../constants/theme";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
    <StatusBar style={Platform.OS === "ios" ? "dark" : "dark"} />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(1000)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradinet}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        {/* content */}
        <View style={styles.contentContainer}>
          <Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>Pixel</Animated.Text>
          <Animated.Text entering={FadeInDown.delay(600).springify()} style={styles.punchLine}>Every Pixels Tells a Story</Animated.Text>
          <View>
            <Pressable style={styles.startBtn} onPress={()=>router.push("home")}>
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradinet: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.7),
    fontWeight: theme.fontWeight.bold,
  },
  punchLine: {
    fontSize: hp(2),
    fontWeight: theme.fontWeight.medium,
    letterSpacing: 2,
    marginBottom: 10,
  },
  startBtn: {
    marginBottom: 50,
    paddingVertical: 20,
    paddingHorizontal: 90,
    backgroundColor: theme.colors.neutral(0.8),
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
  },
  startText: {
    fontSize: hp(3),
    letterSpacing: 1,
    color: theme.colors.white,
    fontWeight: theme.fontWeight.medium,
  },
});
