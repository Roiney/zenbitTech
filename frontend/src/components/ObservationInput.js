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
      <label htmlFor="observation">Observação:</label>
      <textarea id="observation" rows="5" onChange={handleObservationChange}></textarea>
    </div>
  );
}

export default ObservationInput;
