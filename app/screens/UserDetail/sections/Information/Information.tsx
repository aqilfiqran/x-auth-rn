import { useRoute } from "@react-navigation/native"
import { Column, Spacer } from "app/components/atoms"
import { Avatar } from "app/components/molecules"
import { LabelInformation } from "app/components/organism"
import { AppRouteProp } from "app/navigators"
import { useUserDetail } from "app/services/api/user"
import { size, spacing } from "app/theme"
import { useTheme } from "app/theme/hooks"
import { memo } from "react"
import { ActivityIndicator } from "react-native"

export const Information = memo(() => {
  const { colors } = useTheme()
  const route = useRoute<AppRouteProp<"UserDetail">>()
  const { id } = route.params

  const { data, isLoading } = useUserDetail({ params: { id } })

  if (isLoading)
    return (
      <Column
        padding={{ h: spacing.large, v: spacing.medium }}
        alignment="center"
        arrangement="center"
        minHeight={size.height}
      >
        <ActivityIndicator size="large" color={colors.palette.primary.main} />
      </Column>
    )

  const initialName = `${data?.first_name[0]}${data?.last_name[0]}`
  const isHavePhoto = data?.avatar !== null && data?.avatar !== "N/A"

  return (
    <Column padding={{ h: spacing.large, v: spacing.medium }}>
      <Column alignment="center" arrangement="center" contentStyle="fitContent">
        <Avatar size="xlarge" source={isHavePhoto && { uri: data?.avatar }} text={initialName} />
      </Column>
      <Column padding={{ t: spacing.large }}>
        <LabelInformation label="Nama Depan" value={data?.first_name} />
        <Spacer length={spacing.small} />
        <LabelInformation label="Nama Belakang" value={data?.last_name} />
        <Spacer length={spacing.small} />
        <LabelInformation label="Email" value={data?.email} />
      </Column>
    </Column>
  )
})
