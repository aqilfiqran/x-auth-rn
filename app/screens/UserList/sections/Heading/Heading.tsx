import { useNavigation } from "@react-navigation/native"
import { Button, Column, Row, Spacer, Text } from "app/components/atoms"
import { useStores } from "app/models"
import { AppNavScreen } from "app/navigators"
import { spacing } from "app/theme"
import { observer } from "mobx-react-lite"

export const Heading = observer(() => {
  const navigation = useNavigation<AppNavScreen>()

  const {
    authStore: { clearToken },
  } = useStores()

  return (
    <Column padding={{ h: spacing.large, v: spacing.medium }} height={60}>
      <Row alignment="center" arrangement="between" contentStyle="fillContainer">
        <Text text="List User" preset="Display lg" weight="bold" />

        <Spacer length={spacing.small} />

        <Button
          preset="outlined"
          size="xsmall"
          text="Keluar"
          onPress={() => {
            clearToken()
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            })
          }}
        />
      </Row>
    </Column>
  )
})
