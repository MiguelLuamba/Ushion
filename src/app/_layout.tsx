import "@/styles/global.css";
import { Slot } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import { useFonts } from "expo-font";
import * as NavigationBar from 'expo-navigation-bar';
import { ActivityIndicator } from "react-native";
import { Barlow_400Regular, Barlow_700Bold } from "@expo-google-fonts/barlow";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    BarlowRegular: Barlow_400Regular,
    BarlowBold: Barlow_700Bold,
  });

  // OCULTAR BARRA DE NAVEGAÇÃO
  NavigationBar.setVisibilityAsync("hidden");
  // ALTERAR COR DA BARRA DE NAGEGAÇÃO
  NavigationBar.setBackgroundColorAsync("transparent");
  // ALTERAR COR DOS ICONES
  NavigationBar.setButtonStyleAsync("dark");


  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white font-barlow">
        <StatusBar animated={true} backgroundColor="#FFF" style="dark" translucent={false}/>
        <ActivityIndicator size="large" color="#1E1E1E"/>
      </View>
    )
  }

  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar animated={true} backgroundColor="#FFF" style="dark" translucent={false}/>
      <Slot />
    </SafeAreaView>
  );
}
