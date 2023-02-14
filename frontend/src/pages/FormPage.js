import React from 'react';
import { connect } from 'react-redux';
import { setName, setEmail, setObservation } from '../actions/formActions';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import ObservationInput from '../components/ObservationInput';
import { sendDataToAPI } from '../api/sendDataToAPI'

class Form extends React.Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, observations } = this.props.formData;
    console.log({ name, email, observations });
    sendDataToAPI({ name, email, observations });
  };

  render() {
    const { name, email, observations, setName, setEmail, setObservation } = this.props;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <NameInput name={name} setName={setName} />
        <EmailInput email={email} setEmail={setEmail} />
        <ObservationInput observation={observations} setObservation={setObservation} />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formData: state.form
  };
};

const mapDispatchToProps = {
  setName,
  setEmail,
  setObservation
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
