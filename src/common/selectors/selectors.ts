import {StateType} from "../../app/store";

export const selectStatus = (state: StateType) => state.app.status
export const selectIsLoggedIn = (state: StateType) => state.auth.isLoggedIn
export const selectIsRegister = (state: StateType) => state.auth.isRegister
export const selectIsInitialized = (state: StateType) => state.app.isInitialized
export const selectProfile = (state: StateType) => state.profile.profile
export const selectEmail = (state: StateType) => state.auth.email
export const selectIsEMail = (state: StateType) => state.auth.isEMail
export const selectIsChangePassword = (state: StateType) => state.auth.isChangePassword
//for filter
export const selectFilter = (state: StateType) => state.filter
export const selectMax = (state: StateType) => state.filter.max
export const selectMin = (state: StateType) => state.filter.min
export const selectUserId = (state: StateType) => state.profile.profile._id