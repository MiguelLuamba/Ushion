import { Button } from "./button";
import { PhotosProps } from "@/app/home";
import LottieView from "lottie-react-native";
import { ArrowLeft } from "lucide-react-native";
import { useState, useTransition } from "react";
import { saveImageToGallery } from "@/utils/download-image";
import { GetFirstAndSecondWord } from "@/utils/get-first-and-two-words";
import { Image, ImageBackground, Modal, Pressable, ScrollView, Text, View } from "react-native";

type DataImagesProps = {
  title?: string
  alt?: string
  src?: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    landscape: string;
    portrait: string;
    small: string;
    tiny: string;
  }
}

interface DownloadImageModalProps {
  onpenModal: boolean
  data: DataImagesProps
  closeModal: () => void
  exampleImages: Array<PhotosProps>
}

export function DownloadImageModal({
  data,
  onpenModal,
  closeModal,
  exampleImages
}: DownloadImageModalProps) {
  // IMAGE OBJECT LENGTH
  const arrayLength = exampleImages.length 
  // SAVING IMAGE LOADING
  const [isSavingImagePending, startIsSavingImagePending] = useTransition()
  // IMAGE BACKGROUND LOADING CONTROLLER
  const [imageBackgroundLoading, setImageBackgroundLoading] = useState(true)

  // SAVE IMAGE ON MOBILE DEVICE
  function saveImage(){
    startIsSavingImagePending(() => {
      saveImageToGallery(data.src?.large2x || "")
      closeModal()
    })
  }

  return (
    <Modal
      transparent
      animationType="slide"
      visible={onpenModal}
    >
      <ScrollView className="flex-1 w-full h-full bg-white">
        <ImageBackground
          source={{uri: data.src?.large2x || ""}}
          onLoadEnd={() => setImageBackgroundLoading(false)} // HIDE LOTTIE ANIMATION
          resizeMode="cover"
          className="w-full h-[500px] bg-primary-900 p-4 gap-[15%] rounded-b-3xl relative"
        >
          <Pressable 
            onPress={closeModal}
            className="items-center justify-center bg-secundary-700 size-10 rounded-full"
          >
            <ArrowLeft size={20} color="#FFF" />
          </Pressable>

          {/* SUGGEST IMAGES */}
          <View className="gap-4">
            <View className="size-20 rounded-xl bg-slate-600 overflow-hidden">
              <Image
                source={{
                  uri: exampleImages[Math.floor(Math.random() * arrayLength)]?.src.tiny
                }}
                
                resizeMode="stretch"
                className="size-full"
              />
            </View>
            <View className="size-20 rounded-xl bg-slate-600 overflow-hidden">
              <Image
                source={{
                  uri: exampleImages[Math.floor(Math.random() * arrayLength)]?.src.tiny
                }}
                resizeMode="cover"
                className="size-full"
              />
            </View>
            <View className="size-20 rounded-xl bg-slate-600 overflow-hidden">
              <Image
                source={{
                  uri: exampleImages[Math.floor(Math.random() * arrayLength)]?.src.tiny
                }}
                resizeMode="cover"
                className="size-full"
              />
            </View>
          </View>

          {imageBackgroundLoading && (
            <LottieView
              autoPlay
              style={{
                width: 150,
                height: 150,
                alignSelf:"center",
                position:"absolute",
                top: "50%",
                left: "50%",
                transform: [{translateX: -50}, {translateY: -50}]
                
              }}
              loop
              source={require("@/assets/lottie/loading.json")}
            />
          )}
         
        </ImageBackground>


        <View className="w-[95%] mx-auto gap-4 pb-2">
          <View>
            <Text className="font-barlow-bold text-secundary-800 text-lg">
              {GetFirstAndSecondWord(data.title || "undefined")}
            </Text>
            <Text className="text-secundary-900 font-barlow-bold text-3xl">$ 0.00</Text>
          </View>



          <View>
            <Text className="font-barlow-bold text-secundary-800 text-lg">Select size</Text>

            <ScrollView 
              horizontal 
              contentContainerStyle={{gap: 10}} 
              showsHorizontalScrollIndicator={false}
            >
              <View className="size-16 rounded-xl items-center justify-center bg-primary-800">
                <Text className="text-2xl text-secundary-800 font-barlow-bold text-center">S</Text>
              </View>

              <View className="size-16 rounded-xl items-center justify-center bg-primary-800">
                <Text className="text-2xl text-secundary-800 font-barlow-bold text-center">XS</Text>
              </View>

              <View className="size-16 rounded-xl items-center justify-center bg-primary-800">
                <Text className="text-2xl text-secundary-800 font-barlow-bold text-center">M</Text>
              </View>

              <View className="size-16 rounded-xl items-center justify-center bg-primary-800">
                <Text className="text-2xl text-secundary-800 font-barlow-bold text-center">L2M</Text>
              </View>

              <View className="size-16 rounded-xl items-center justify-center bg-primary-800">
                <Text className="text-2xl text-secundary-800 font-barlow-bold text-center">L</Text>
              </View>

              <View className="size-16 rounded-xl items-center justify-center bg-primary-800">
                <Text className="text-2xl text-secundary-800 font-barlow-bold text-center">XL</Text>
              </View>



            </ScrollView>
          </View>

          <View>
            <Text className="font-barlow-bold text-secundary-800 text-lg">
              Desciption
            </Text>
            <Text className="text-justify text-base text-secundary-500">
              {data.alt || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            </Text>
          </View>


          <Button
            text="DOWNLOAD NOW"
            style="secundary"
            onPress={saveImage}
            loading={isSavingImagePending}
          />



        </View>

      </ScrollView>
    </Modal>
  )
}

