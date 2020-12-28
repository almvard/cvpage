import { SET_EMAIL, SET_NAME } from '../actions/data';

const initialState = {
  email: 'almacederblad@mac.com',
  name: 'Alma Cederblad',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };
    case SET_EMAIL:
      return { ...state, email: action.email };
    default:
      return state;
  }
}

export const getName = (state) => state.data.name;
export const getEmail = (state) => state.data.email;
