import { IUser } from "app/services/api/user"

export interface CardUserProps {
  data: IUser
  onPress?: () => void
}
