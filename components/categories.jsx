import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { data } from "../constants/data";
import { theme } from "../constants/theme";
import { wp, hp } from "../helper/common";
import Animated, { FadeInRight } from "react-native-reanimated";

const Categories = ({ activeCategory, handleChangeCategory }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatlistContainer}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem 
        isActive={activeCategory===item}
        handleChangeCategory={handleChangeCategory}
        title={item} 
        index={index} />
      )}
    />
  );
};

//  console.log(data.categories)

const CategoryItem = ({ title, index , isActive ,handleChangeCategory}) => {
  let backgroundColor = isActive ? theme.colors.neutral(0.8) : theme.colors.white
  let color = isActive ? theme.colors.white : theme.colors.neutral(0.8)
  return (
    <Animated.View entering={FadeInRight.delay(index*200).duration(1000).damping(14)}>
      <TouchableOpacity style={[styles.category ,{backgroundColor}]} onPress={()=>handleChangeCategory(isActive? null : title)} >
        <Text style={[styles.title , {color}]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderColor: theme.colors.greyBG,
    borderWidth: 0.2,
    borderRadius: theme.radius.lg,
    backgroundColor: "white",
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.fontWeight.semi,
  },
});
