import React from "react";
import Vector from '../images/Vector.png'
import Smile from '../images/smile.png'
import Eye from '../images/eye.png'
import './styleSheet/Footer.css'

const Footer = () => {

    return (

        <footer>
            <div className="face">
                <img alt="face" src={ Vector } />
            </div>
            <div className="smile">
                <img alt="smile" src={ Smile } />
            </div>
            <div className="eye-1">
                <img alt="eye" src={ Eye } />
            </div>
            <div className="eye-2">
                <img alt="eye" src={ Eye } />
            </div>
        </footer>
    )
}

export default Footer;