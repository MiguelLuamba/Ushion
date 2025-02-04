import { api } from "@/services/api";
import { Container } from "@/components/container";
import { ImageCard } from "@/components/image-card";
import { useEffect, useState, useTransition } from "react";
import { DownloadImageModal } from "@/components/download-image-modal";
import { GetFirstAndSecondWord } from "@/utils/get-first-and-two-words";
import { Logs, BellRing, MessageCircle, Search, SlidersHorizontal } from "lucide-react-native";
import { ActivityIndicator, FlatList, Image, RefreshControl, Text, TextInput, TouchableHighlight, View } from "react-native";

export interface PhotosProps {
  id: number;
  alt: string;
  src: {
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

export default function Home() {

  const [query, setQuery] = useState("") // SEARCH INPUT'S TEXT 
  const [openModal, setOpenModal] = useState(false) // OPEN DETAILS MODAL
  const [isPending, startTransition] = useTransition() // FETCH PHOTOS TRANSITION
  const [photos, setPhotos] = useState<PhotosProps[]>([]) // ALL PHOTOS FETCHED
  const [imageSelected, setImageSelected] = useState<PhotosProps | null>(null) // IMAGE SELECTED TO VIEW DETAILS

  // MODIFY IMAGE SELECTED
  function modifyImageSelected(data: PhotosProps){
    setImageSelected(data)
    setOpenModal(true)
  }

  // FETCH PHOTOS FUNCTION
  async function fetchPhotos(){
    try {
      const response = await api.get("/search",{
        params:{
          query: query.trim().length > 0 ? query : "peoples",
          per_page: 30
        },
      });
      setPhotos(response.data.photos)
    } catch (error) {
      console.log("error fetching images...")
    }
  }

  // FETCH PHOTO DATA UPDATING "pull-to-refresh"
  const onRefresh = async () => {
    startTransition(() => {
       fetchPhotos();
    })
  };

  useEffect(()=>{
    startTransition(() => {
      fetchPhotos()
    })
  },[query])

  return (
    <Container 
      styles={{
        gap: 12,
        paddingVertical: 14,
        paddingHorizontal: 16
      }}
    >
      {/* HEADER */}
      <View className="w-full gap-3.5">

        <View className="flex-row w-full items-center justify-between">
          <Logs size={24} color="#414141"/>

          <Text className="text-2xl font-barlow-bold ml-10">Ushion</Text>

          <View className="flex-row items-center gap-4">
            <MessageCircle size={24} color="#414141"/>
            <BellRing size={24} color="#414141"/>
          </View>

        </View>

        <View className="bg-primary-900 w-full h-16 rounded-lg flex-row items-center px-4">
          <Search size={20} color="#7C7E79"/>
          <TextInput 
            placeholder="search here..." 
            className="flex-1 text-xl"
            value={query}
            onChangeText={setQuery}
          />
          <SlidersHorizontal size={20} color="#7C7E79"/>
        </View>
      </View>

      {/* PROMO's CARD */}
      <View className="w-full flex-row h-44 rounded-xl bg-secundary-800 overflow-hidden">
        <View className="h-full justify-between py-3">
          <View className="bg-white/30 w-40 p-2 rounded-r-xl">
            <Text className="text-lg text-white">SPECIAL PROMO</Text>
          </View>

          <Text className="text-white text-xl ml-2">
            All menswear {"\n"}50% Discont
          </Text>

          <TouchableHighlight className="w-32 h-10 rounded bg-white items-center justify-center ml-2">
            <Text className="text-secundary-900">BUY NOW</Text>
          </TouchableHighlight>

        </View>

        <View className="w-1/2 h-full">
          <Image 
            source={require("@/assets/images/promo_card.png")}
            className="object-cover w-full h-full"
          />

        </View>
      </View>

      {/* CATEGORY AND FILTER TEXT */}
      <View className="w-full items-center flex-row justify-between">
        <Text className="font-barlow-bold text-base">Category</Text>
        <Text className="text-base text-secundary-700">View All</Text>
      </View>

      {/* ALL PHOTOS RENDERING */}
      {isPending 
        ?(<ActivityIndicator size="large" color="#1E1E1E"/>)
        :(
          <FlatList
            className="flex-1 w-full max-w-96"
            contentContainerStyle={{
              gap: 2,
              rowGap: 50,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingVertical: 30,
            }}
            data={photos}
            renderItem={({item})=>(
              <ImageCard
                key={item.id}
                onPress={()=>modifyImageSelected(item)}
                title={GetFirstAndSecondWord(item.alt)}
                image_url={item.src.medium}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={isPending} onRefresh={onRefresh} />
            }
            ListEmptyComponent={
              <Text className="text-secundary-700 text-center w-full mt-6">
                No image founded.
              </Text>
            }
          />
        )
      }

      {/* DETAILS AND DOWNLOAD IMAGE MODAL */}
      <DownloadImageModal
        onpenModal={openModal}
        closeModal={() => setOpenModal(false)}
        exampleImages={photos}
        data={{
          src: imageSelected?.src,
          alt: imageSelected?.alt,
          title: imageSelected?.alt
        }}
      />

    </Container>
  );
}
