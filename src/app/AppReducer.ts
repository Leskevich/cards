type appReducerType = typeof appReducerState;
const appReducerState = {};

export const AppReducer = (state: appReducerType = appReducerState, action: AppReducerActionType): appReducerType => {
  switch (action) {
    default:
      return state;
  }
};

//TypeAction
type AppReducerActionType = any;
//Action

//Thunk
