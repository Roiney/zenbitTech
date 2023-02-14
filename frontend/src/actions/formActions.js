export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_OBSERVATION = 'SET_OBSERVATION';

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email
  };
};

export const setObservation = (observation) => {
  return {
    type: SET_OBSERVATION,
    payload: observation
  };
};
