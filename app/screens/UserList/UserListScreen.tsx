import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Screen } from "app/components/molecules"
import { AppScreenProps } from "app/navigators"
import Section from "./sections"

export const UserListScreen: FC<AppScreenProps> = observer(function UserListScreen() {
  return (
    <Screen preset="fixed" contentContainerStyle={{ flex: 1 }} safeAreaEdges={["top"]}>
      <Section.Heading />
      <Section.List />
    </Screen>
  )
})
