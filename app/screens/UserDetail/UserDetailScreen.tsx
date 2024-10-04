import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Screen } from "app/components/molecules"
import { spacing } from "app/theme/spacing"
import { AppNavScreen, AppScreenProps } from "app/navigators"
import { useNavigation } from "@react-navigation/native"
import { useHeader } from "app/utils/useHeader"
import Section from "./sections"

export const UserDetailScreen: FC<AppScreenProps> = observer(function UserDetailScreen() {
  const navigation = useNavigation<AppNavScreen>()

  useHeader({
    title: "Detail User",
    leftIcon: "chevron-left",
    onLeftPress: () => navigation.goBack(),
  })

  return (
    <Screen
      preset="auto"
      ScrollViewProps={{
        bounces: false,
      }}
      FooterProps={{
        padding: spacing.large,
      }}
    >
      <Section.Information />
    </Screen>
  )
})
