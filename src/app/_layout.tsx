import "@/styles/global.css";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { SafeAreaView, View } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { Barlow_400Regular, Barlow_700Bold } from "@expo-google-fonts/barlow";


export default function RootLayout() {
  // LOADING FONTS
  const [fontsLoaded] = useFonts({
    BarlowRegular: Barlow_400Regular,
    BarlowBold: Barlow_700Bold,
  });
  
  // CHANGE COLOR OF NAVIGATIONBAR'S ICON
  NavigationBar.setButtonStyleAsync("dark");
  // HIDE NAVIGATIONBAR
  NavigationBar.setVisibilityAsync("hidden");
  // SHOW TEMPORARILY NAVIGATIONBAR
  NavigationBar.setBehaviorAsync("overlay-swipe");
  // CHANGE NAVIGATIONBAR'S COLOR
  NavigationBar.setBackgroundColorAsync("transparent");


  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white font-barlow">
        <StatusBar animated={true} backgroundColor="#FFF" style="dark" translucent={false}/>
        <ActivityIndicator size="large" color="#1E1E1E"/>
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white font-barlow">
      <StatusBar animated={true} backgroundColor="#FFF" style="dark" translucent={false}/>
      <Slot />
    </SafeAreaView>
  );
}
