type ProfileReducerType = typeof profileReducerState;
const profileReducerState = {};

export const ProfileReducer = (
  state: ProfileReducerType = profileReducerState,
  action: ProfileReducerActionType
): ProfileReducerType => {
  switch (action) {
    default:
      return state;
  }
};

//TypeAction
type ProfileReducerActionType = any;
//Actions

//Thunks
