import { useMutation } from "@tanstack/react-query"
import { authApi } from "./auth"
import { useStores } from "app/models"
import { Alert } from "react-native"
import { ErrorResponse } from "../api.types"

export const useLogin = () => {
  const {
    authStore: { setToken },
  } = useStores()

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (response) => {
      setToken(response.data.token)
    },
    onError: (error: ErrorResponse) => {
      Alert.alert("Error", error.response.data?.error)
    },
  })
}
