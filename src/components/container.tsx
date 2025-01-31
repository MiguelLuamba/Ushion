import { SafeAreaView, StyleProp, ViewStyle } from "react-native";
import { CSSProperties, ReactNode } from "react"


interface ContainerProps {
  children: ReactNode
  styles?: StyleProp<ViewStyle>
}
export function Container({
  children,
  styles
}: ContainerProps) {
  return(
    <SafeAreaView 
      style={styles}
      className="flex-1 items-center bg-white"
    >
      {children}
    </SafeAreaView>
  )
}