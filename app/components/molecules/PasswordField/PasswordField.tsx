import { Icon } from "app/components/atoms/Icon"
import { TextField, TextFieldProps } from "app/components/atoms/TextField"
import { useTheme } from "app/theme/hooks/useTheme"
import { forwardRef, Ref, useState } from "react"
import { TextInput } from "react-native"

export const PasswordField = forwardRef(function PasswordField(
  props: TextFieldProps,
  _ref: Ref<TextInput>,
) {
  const theme = useTheme()
  const { disabled } = props
  const [showPassword, setShowPassword] = useState(false)
  const iconEye = showPassword ? "eye-off" : "eye"
  const iconColor = disabled ? theme.colors.palette.neutral[200] : theme.colors.palette.primary.main

  return (
    <TextField
      secureTextEntry={!showPassword}
      RightAccessory={(props) => (
        <Icon
          name={iconEye}
          containerStyle={props.style}
          size={20}
          color={iconColor}
          onPress={!disabled ? () => setShowPassword(!showPassword) : null}
        />
      )}
      {...props}
    />
  )
})
