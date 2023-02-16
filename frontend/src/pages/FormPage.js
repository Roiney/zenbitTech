import React from 'react';
import { connect } from 'react-redux';
import { setName, setEmail, setObservation } from '../actions/formActions';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import Footer from '../components/Footer';
import Vector from '../images/face.png'
import Vector2 from '../images/face-2.png'
import Smile from '../images/smile.png'
import Eye from '../images/eye.png'
import ObservationInput from '../components/ObservationInput';
import { sendDataToAPI } from '../api/sendDataToAPI'
import Map from '../images/map.png'
import './styleSheet/FormPage.css'
import Clound from '../images/clound.png'

class Form extends React.Component {

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, observation } = this.props.formData;
    await sendDataToAPI({ name, email, observation })
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
          <div className="face-full">
            <div className="face">
              <img alt="face" src={Vector} />
            </div>
            <div className="smile">
              <img alt="smile" src={Smile} />
            </div>
            <div className="eye-1">
              <img alt="eye" src={Eye} />
            </div>
            <div className="eye-2">
              <img alt="eye" src={Eye} />
            </div>
          </div>
          <div className="face-full-1">
            <div className="face">
              <img alt="face" src={Vector2} />
            </div>
            <div className="smile-2">
              <img alt="smile-2" src={Smile} />
            </div>
            <div className="eye-6">
              <img alt="eye" src={Eye} />
            </div>
            <div className="eye-7">
              <img alt="eye" src={Eye} />
            </div>
          </div>
          <div className="body-4">
            <div className="face">
              <img alt="face" src={Vector2} />
            </div>
            <div className="smile-3">
              <img alt="smile-3" src={Smile} />
            </div>
            <div className="eye-8">
              <img alt="eye" src={Eye} />
            </div>
            <div className="eye-9">
              <img alt="eye" src={Eye} />
            </div>
          </div>

          <div className='clound'>
            <img src={Clound} alt='Map' />
          </div>

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
