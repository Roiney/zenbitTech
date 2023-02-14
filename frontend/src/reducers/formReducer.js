import { SET_EMAIL, SET_NAME, SET_OBSERVATION } from "../actions/formActions";

const initialState = {
  name: '',
  email: '',
  observation: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case SET_OBSERVATION:
      return {
        ...state,
        observation: action.payload
      };
    default:
      return state;
  }
};

export default formReducer;