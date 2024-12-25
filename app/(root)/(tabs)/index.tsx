import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex justify-center items-center flex-1"
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Text className="font-bold text-lg my-10 font-rubik">
        Welcome to ReState
      </Text>
      <Link href="/sign-in">Sign-in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/31">Properties</Link>
    </View>
  );
}