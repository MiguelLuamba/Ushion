import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
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
        />

        <View className="w-full px-7 gap-6">
          <Text className="text-center text-2xl font-barlow-bold">
            Find the best photos {"\n"}
            and download free
          </Text>

          <Text className="text-center text-xl font-normal text-secundary-700">
          You may Find a wide variety {"\n"}
          of the latest clothing styles only {"\n"}
          here And define your style.
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
