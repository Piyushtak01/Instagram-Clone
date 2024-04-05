import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: require("../../assets/heart.png"),
    likedimageurl: require("../../assets/heartliked.png"),
  },
  {
    name: "Comment",
    imageUrl: require("../../assets/chat-bubble.png"),
  },
  {
    name: "Share",
    imageUrl: require("../../assets/send.png"),
  },
  {
    name: "Save",
    imageUrl: require("../../assets/save-instagram.png"),
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal:15,marginTop:10,}}>
        <PostFooter />
    </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={post.profile_picture} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.User}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
);

const Icon = ({ imgStyle, imgUrl }) => {
  <TouchableOpacity>
    <Image source={imgUrl} style={imgStyle} />
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  story: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});

export default Post;
