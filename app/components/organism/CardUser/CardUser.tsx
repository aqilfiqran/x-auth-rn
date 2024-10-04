import { Column, Icon, Pressable, Row, Spacer, Text } from "app/components/atoms"
import { CardUserProps } from "./CardUser.types"
import { useTheme } from "app/theme/hooks"
import { Avatar } from "app/components/molecules"
import { spacing } from "app/theme"

export function CardUser(props: CardUserProps) {
  const { colors } = useTheme()
  const { data, onPress } = props

  const fullname = `${data.first_name} ${data.last_name}`
  const initialName = `${data.first_name[0]}${data.last_name[0]}`

  const isHavePhoto = data.avatar !== null && data.avatar !== "N/A"

  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <Column padding={{ h: spacing.large, v: spacing.small }}>
        <Row alignment="center" arrangement="between">
          <Row alignment="center" contentStyle="fillContainer">
            <Avatar source={isHavePhoto && { uri: data.avatar }} text={initialName} size="medium" />
            <Spacer length={spacing.small} horizontal />
            <Column>
              <Text text={fullname} preset="Text md" />
            </Column>
          </Row>
          <Spacer length={spacing.small} />
          <Icon
            name="chevron-right"
            size={16}
            color={colors.palette.neutral.dark}
            onPress={onPress}
          />
        </Row>
      </Column>
    </Pressable>
  )
}
