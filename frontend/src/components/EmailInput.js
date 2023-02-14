import React from 'react';
import { useDispatch } from 'react-redux';
import { setEmail } from '../actions/formActions';

function EmailInput() {
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onChange={handleEmailChange} />
    </div>
  );
}

export default EmailInput;
