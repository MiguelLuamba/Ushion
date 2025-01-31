import { Image, Text, TextInput, View } from "react-native";
import { Logs, BellRing, MessageCircle, Search, SlidersHorizontal } from "lucide-react-native"
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container 
      styles={{
        paddingHorizontal: 16,
        paddingVertical: 14,
        gap: 22
      }}
    >
      {/* HEADER */}
      <View className="w-full gap-3.5">

        <View className="flex-row w-full max-w-96 items-center justify-between">
          <Logs size={24} color="#414141"/>

          <Text className="text-2xl font-barlow-bold ml-10">Ushion</Text>

          <View className="flex-row items-center gap-4">
            <MessageCircle size={24} color="#414141"/>
            <BellRing size={24} color="#414141"/>
          </View>

        </View>

        <View className="bg-primary-900 w-full max-w-96 h-16 rounded-lg flex-row items-center px-4">
          <Search size={20} color="#7C7E79"/>
          <TextInput placeholder="search here..." className="flex-1 text-xl"/>
          <SlidersHorizontal size={20} color="#7C7E79"/>
        </View>
      </View>



    </Container>
  );
}