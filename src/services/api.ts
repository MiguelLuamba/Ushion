import axios from "axios"
import { PEXELS_API_AUTH, PEXELS_BASE_URL } from "@/utils/app-constants"

export const api = axios.create({
  baseURL: PEXELS_BASE_URL,
  headers:{
    Authorization: PEXELS_API_AUTH
  },
})