import { Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const folderName = "Ushion"; // GALERY ALBUM NAME

export async function saveImageToGallery(imageUrl: string) {
  try {
    const { status } = await MediaLibrary.getPermissionsAsync();
    
    if (status !== "granted") {
      // GET PERMISSION TO ACCESS GALERY
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão necessária", "Precisamos de acesso à sua galeria para salvar imagens.");
        return;
      }
    }

    // SET IMAGE PATH TO SAVE IMAGE WITH UNIQUE NAME
    const fileName = `ushion_${Date.now()}.jpg`;
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;

    // DOWNLOAD IMAGE
    const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);

    // SAVE IMAGE ON USHION'S ALBUM
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync(folderName, asset, false);

    Alert.alert("Download concluído!", `A imagem foi salva na galeria na pasta "${folderName}".`);
  } catch (error) {
    console.log(error);
    Alert.alert("Erro", "Não foi possível baixar a imagem.");
  }
}
