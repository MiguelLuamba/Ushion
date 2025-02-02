import { ReactNode } from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";

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