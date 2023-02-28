type AuthReducerType = typeof authReducerState;
const authReducerState = {};
export const AuthReducer = (
  state: AuthReducerType = authReducerState,
  action: AuthReducerActionsType
): AuthReducerType => {
  switch (action) {
    default:
      return state;
  }
};

//ActionType
type AuthReducerActionsType = any;
//Actions
//Thunks
