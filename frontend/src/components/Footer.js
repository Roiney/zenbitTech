import React from "react";
import Vector from '../images/Vector.png'
import Smile from '../images/smile.png'
import Eye from '../images/eye.png'
import Twitter from '../images/twitter.png'
import Pinterest from '../images/p.png'
import Facebook from '../images/facebook.png'
import Intagran from '../images/instagran.png'
import Body from "../images/Body.png"
import './styleSheet/Footer.css'

const Footer = () => {

    return (

        <footer>
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
            <div className="redes">
                <div className="intagran">
                    <img alt="intagran" src={Intagran} />
                </div>
                <div className="twitter">
                    <img alt="twitter" src={Twitter} />
                </div>
                <div className="facebook">
                    <img alt="facebook" src={Facebook} />
                </div>
                <div className="pinterest">
                    <img alt="pinterest" src={Pinterest} />
                </div>
            </div>
            <div className="body-2">
                <div className="body">
                    <img alt="body" src={Body} />
                </div>
                <div className="smile-1">
                    <img alt="smile-1" src={Smile} />
                </div>
                <div className="eye-3">
                    <img alt="eye" src={Eye} />
                </div>
                <div className="eye-4">
                    <img alt="eye" src={Eye} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;