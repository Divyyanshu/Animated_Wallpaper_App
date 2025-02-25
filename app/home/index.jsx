import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { theme } from "../../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { wp, hp } from "../../helper/common";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Categories from "../../components/categories";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : top + 30;
  const [search, setSeach] = useState("");
  const searchInputRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  };

  // console.log("activit categrory" , activeCategory)
  return (
    <View style={[styles.container, { paddingTop }]}>
      {/* HEADER design */}
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>Pixels</Text>
        </Pressable>
        <TouchableOpacity>
          <FontAwesome6
            name="bars-staggered"
            size={22}
            color={theme.colors.neutral(0.7)}
          />
        </TouchableOpacity>
      </View>
      {/* scrollview */}
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <Feather
              name="search"
              size={22}
              color={theme.colors.neutral(0.3)}
            />
          </View>
          <View style={styles.searchInput}>
            <TextInput
              placeholder="Search for photos..."
              value={search}
              ref={searchInputRef}
              onChangeText={(value) => setSeach(value)}
              placeholderTextColor={theme.colors.neutral(0.3)}
            />
          </View>
          {search && (
            <TouchableOpacity style={styles.closeIcon}>
              <Ionicons
                name="close"
                size={24}
                color={theme.colors.neutral(0.3)}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.categories}>
          <Categories
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    marginHorizontal: wp(5),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeight.semi,
    color: theme.colors.neutral(0.8),
  },
  searchBar: {
    marginHorizontal: wp(4),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: theme.colors.greyBG,
    backgroundColor: theme.colors.white,
    paddingLeft: 10,
    padding: 5,
    borderRadius: theme.radius.lg,
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: hp(1.8),
    paddingVertical: 10,
  },
  closeIcon: {
    backgroundColor: theme.colors.neutral(0.1),
    padding: 8,
    borderRadius: theme.radius.sm,
  },
});
