import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ThemeStoreModel } from "./app"
import { AuthStoreModel } from "./auth"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore", {
  // app
  themeStore: types.optional(ThemeStoreModel, { theme: "default", lang: "id" }),

  // auth
  authStore: types.optional(AuthStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
