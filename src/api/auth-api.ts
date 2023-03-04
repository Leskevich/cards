import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true
})

export const authAPI = {
    logIn(payload: LoginPayloadType) {
        //get like parameters payload of type "LoginPayloadType"
       return instance.post("auth/login", payload)
    },
    logOut(){
        // pure object {} like payload
        return instance.delete("auth/me", {})
    }
}

export type LoginPayloadType = {
    email: string,
    password: string,
    rememberMe: boolean
}