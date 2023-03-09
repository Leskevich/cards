import { ForgotPasswordType } from "../../../api/auth-api"

export const ForgotPayload = (email: string): ForgotPasswordType => {
  return {
    email,
    from: "leskevichtema@gmail.com",
    message: `<div style="background-color: lime; padding: 15px">password recovery link:
<a href="http://localhost:3000/cards#/newPassword/$token$">link</a>
</div>`,
  }
}
