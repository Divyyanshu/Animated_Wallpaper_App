
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React, { useRef, useState, useEffect } from "react";
  import { theme } from "../../constants/theme";
  import { useSafeAreaInsets } from "react-native-safe-area-context";
  import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
  import { wp, hp } from "../../helper/common";
  import Feather from "@expo/vector-icons/Feather";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import Categories from "../../components/categories";
  
  const API_KEY = "49051172-f441d63beb408e9d25be8d9d3";
  
  const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 10 : top + 30;
    const [search, setSearch] = useState("");
    const searchInputRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [images, setImages] = useState([]);
  
    const handleChangeCategory = (cat) => {
      setActiveCategory(cat);
    };
  
    const fetchImages = async () => {
      if (!search) return;
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
            search
          )}&image_type=photo`
        );
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
  
    useEffect(() => {
      fetchImages();
    }, [search]);
  
    return (
      <View style={[styles.container, { paddingTop }]}>
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
                onChangeText={(value) => setSearch(value)}
                placeholderTextColor={theme.colors.neutral(0.3)}
              />
            </View>
            {search && (
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() => setSearch("")}
              >
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
  
          <ScrollView>
            <View style={styles.imagesContainer}>
              {images.map((image) => (
                <Image
                  key={image.id}
                  source={{ uri: image.webformatURL }}
                  style={styles.image}
                />
              ))}
            </View>
          </ScrollView>
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
    imagesContainer: {
      flexDirection: 'row',
      margin : 30,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    imageWrapper: {
      width: '48%', 
      marginBottom: 10,
    },
    image: {
      width: '100%',
      padding :10,
      height: 150,
      borderRadius: 10,
    },
  });
  
  