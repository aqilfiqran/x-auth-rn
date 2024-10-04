import { Controller } from "react-hook-form"
import { PasswordField } from "../PasswordField"
import { CTextFieldProps } from "app/components/atoms/TextField"

export const CPasswordField = <T,>({ control, name, ...textFieldProps }: CTextFieldProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <PasswordField
          value={field.value as string}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          error={fieldState.isTouched && fieldState.error?.message}
          {...textFieldProps}
          disabled={formState.isSubmitting || formState.isLoading || textFieldProps.disabled}
        />
      )}
    />
  )
}
