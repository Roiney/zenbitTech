import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../actions/formActions';

function NameInput() {
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  return (
    <div>
      <input type="text" id="name" placeholder='Your name*' onChange={handleNameChange} />
    </div>
  );
}

export default NameInput;
