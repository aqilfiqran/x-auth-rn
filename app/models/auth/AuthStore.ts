import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"
import { clientStorage } from "app/utils/storage"

export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    token: types.maybe(types.string),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.token
    },
  }))
  .actions(withSetPropAction)
  .actions((store) => ({
    setToken(token: string) {
      clientStorage.saveString("token", token)
      store.setProp("token", token)
    },
    clearToken() {
      clientStorage.remove("token")
      store.setProp("token", undefined)
    },
  }))

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshot extends SnapshotOut<typeof AuthStoreModel> {}
