import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  function navigateToHome() {
    router.navigate("/home");
  }
  return (
    <Container>
      <StatusBar translucent/>
      <ScrollView className="flex-1 w-full">
        <Image 
          source={require("@/assets/images/welcome.png")}
          className="w-full object-cover"
          resizeMode="cover"
        />

        <View className="w-full px-7 gap-6">
          <Text className="text-center text-2xl font-barlow-bold">
            Find your best outfit {"\n"}
            and look great
          </Text>

          <Text className="text-center text-xl font-normal text-secundary-700">
          Find a wide variety of the latest {"\n"}
          clothing styles only here And {"\n"}
          define your style.
          </Text>

          <Button 
            style="primary"
            text="GET STARTED"
            onPress={navigateToHome} 
          />

        </View>
      </ScrollView>

    </Container>
  );
}
