import { Heart } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ImageCardsProps {
  title: string
  image_url: string
  onPress: () => void
}
export function ImageCard({
  title,
  image_url,
  onPress
}:ImageCardsProps){

  return(
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onPress}
      className="w-40 h-40 bg-primary-800 rounded-xl relative px-2 justify-end pb-2">
      {/* IMAGEM DO OUTFIT */}
      <View className="w-32 h-32 rounded-xl bg-secundary-900 self-center absolute -top-8 overflow-hidden">
        <Image 
          source={{uri: image_url}}
          resizeMode="cover"
          className="size-full object-cover z-50"
        />
      </View>

      {/* PRECO E TITULO DO OUTFIL */}
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-barlow-bold text-base text-secundary-900 " 
            
          >
            {title.length > 12 ?title.slice(0, 12) + "...": title}
          </Text>

          <View className="flex-row gap-1">
            <Text className="text-secundary-600 font-barlow-bold text-base">
              $:
            </Text>
            <Text className="text-lime-600 font-barlow-bold text-base">
              0,00
            </Text>
          </View>

        </View>
        <Heart size={24} color="#414141" className="shrink-0"/>
      </View>
    </TouchableOpacity>
  )
}