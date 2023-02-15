import React from 'react';
import { useDispatch } from 'react-redux';
import { setObservation } from '../actions/formActions';

function ObservationInput() {
  const dispatch = useDispatch();

  const handleObservationChange = (event) => {
    dispatch(setObservation(event.target.value));
  };

  return (
    <div>
      <textarea id="observation" rows="5" placeholder='Your message*' onChange={handleObservationChange}></textarea>
    </div>
  );
}

export default ObservationInput;
