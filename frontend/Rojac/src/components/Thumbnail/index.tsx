import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface ThumbnailProps {
  uri: string;
  title: string;
  action: ()=> void;
}

const Thumbnail = ({ uri, title, action }: ThumbnailProps) => (
  <View style={styles.thumbnailContainer}>
    <Image source={{ uri }} style={styles.thumbnail} />
    <View style={styles.thumbnailTitleContainer}>
    <Text style={styles.thumbnailTitle}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          action(null);
        }}
      >
        <FontAwesome
          name={'remove'}
          size={40}
          color={'red'}
        />
      </TouchableOpacity>
    </View>

  </View>
);

export default Thumbnail;
const styles = StyleSheet.create({
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 10,
  },
  thumbnailTitleContainer: {
    flexDirection: "row",
    paddingBottom: 10,

  },
  thumbnailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: "orange"
  },
  thumbnailContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
