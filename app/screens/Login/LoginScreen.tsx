import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Column } from "app/components/atoms"
import { Screen } from "app/components/molecules"
import { spacing } from "app/theme/spacing"
import { AppScreenProps } from "app/navigators"
import Sections from "./sections"

export const LoginScreen: FC<AppScreenProps> = observer(function LoginScreen() {
  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["top", "bottom"]}
      ScrollViewProps={{
        bounces: false,
      }}
    >
      <Column padding={{ h: spacing.large, v: spacing.medium }}>
        <Sections.Heading />
        <Sections.Form />
      </Column>
    </Screen>
  )
})
