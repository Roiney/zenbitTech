import React from 'react';
import { connect } from 'react-redux';
import { setName, setEmail, setObservation } from '../actions/formActions';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import Footer from '../components/Footer';
import ObservationInput from '../components/ObservationInput';
import { sendDataToAPI } from '../api/sendDataToAPI'
import Map from '../images/map.png'
import './styleSheet/FormPage.css'

class Form extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, observation } = this.props.formData;
    sendDataToAPI({ name, email, observation });
  };

  render() {
    const { name, email, observation, setName, setEmail, setObservation } = this.props;

    return (
      <body class="background-image">
        <div className='form-container'>

          <h1>Reach out to us!</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='inputName'>
              <NameInput name={name} setName={setName} />
            </div>
            <div className='inputEmail'>
              <EmailInput email={email} setEmail={setEmail} />
            </div>
            <div className='inputObservation'>
              <ObservationInput observation={observation} setObservation={setObservation} />
            </div>
            <button type="submit">Send message</button>
          </form>

          <div className='image-container'>
            <img src={Map} alt='Map' className='map-image' />
          </div>
          
        </div>
        <Footer />
      </body>
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
