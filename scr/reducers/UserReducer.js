export const initialState = {
  avatar: '',
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch(action.type) {
    case 'setAavatar':
      return{...state, avatar: action.payload.avatar};
    break;
    default:
      return state;
  }
}
