import { useNavigation } from "@react-navigation/native"
import { Button, Column, CTextField, Spacer } from "app/components/atoms"
import { AppNavScreen } from "app/navigators"
import { spacing } from "app/theme"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { observer } from "mobx-react-lite"
import { yupResolver } from "@hookform/resolvers/yup"
import { CPasswordField } from "app/components/molecules/PasswordField/CPasswordField/CPasswordField"
import { useLogin } from "app/services/api/auth"

const schema = Yup.object().shape({
  email: Yup.string().required("Email wajib diisi").email("Email tidak valid"),
  password: Yup.string().required("Password wajib diisi"),
})

type Schema = {
  email: string
  password: string
}

export const Form = observer(() => {
  const navigation = useNavigation<AppNavScreen>()

  const form = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = form

  const { mutate, isLoading } = useLogin()

  const onSubmit = handleSubmit((data: Schema) => {
    mutate(
      {
        body: data,
      },
      {
        onSuccess: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "UserList" }],
          })
        },
      },
    )
  })

  return (
    <Column>
      <CTextField
        control={control}
        name="email"
        label="Email"
        placeholder="Contoh: test@mail.com"
        required
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
      />
      <Spacer length={spacing.large} />
      <CPasswordField
        control={control}
        name="password"
        label="Password"
        placeholder="Masukkan password"
        required
      />
      <Spacer length={spacing.large} />
      <Button
        preset="filled"
        text="Masuk"
        disabled={!isValid || !isDirty}
        onPress={onSubmit}
        loading={isLoading}
      />
    </Column>
  )
})
