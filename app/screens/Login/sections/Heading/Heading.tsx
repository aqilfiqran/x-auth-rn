import { Column, Spacer, Text } from "app/components/atoms"
import { spacing } from "app/theme"
import { useTheme } from "app/theme/hooks"
import { memo } from "react"

export const Heading = memo(() => {
  const { colors } = useTheme()
  return (
    <Column alignment="center" padding={{ v: spacing.huge }}>
      <Text text="Masuk" preset="Display lg" weight="bold" color={colors.palette.primary.main} />
      <Spacer length={spacing.small} />
      <Text
        text={"Masuk ke akun Anda untuk\n dapat melanjutkan"}
        align="center"
        preset="Text lg"
        weight="medium"
        color={colors.black}
      />
    </Column>
  )
})
