import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string
  onPress?: () => void
  style: "primary" | "secundary"
  loading?: boolean | false
}
export function Button({
  onPress,
  style,
  text,
  loading
}: ButtonProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onPress}
      className={`w-full h-16 ${style === "primary" ? "bg-secundary-800" : "bg-secundary-900"} rounded-xl justify-center items-center`}
    >
      <Text className="uppercase text-base text-white">
        {loading ?<ActivityIndicator size="small" color="#FFF"/> : text}
      </Text>
    </TouchableOpacity>
  )
}