export const initialState = {
  User: {},
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch(action.type) {
    case 'setUser':
      return{...state, avatar: action.payload.avatar};
    default:
      return state;
  }
}
