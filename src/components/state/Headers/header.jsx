import React, { Component } from 'react';
import communityLanding from '../../../resources/img/community-landing.svg'
import './style.css'
import mainImage from '../../../resources/img/work-imgs/productivity.svg'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
<<<<<<< HEAD
            <div className = "workWithUXDiv">
                <div className = "headers">
                    <h4 className="workwithux">WORK WITH UX SOCIETY</h4>
                    <h1 className = "mainheader">Crafting the best experiences <br />to achieve your goals</h1>
                    <div className="buttonDiv"><button className="journey-button">CONTACT US</button></div>
                    
                    <img src = {mainImage} className = "mainImage"></img>
=======
            <div>
                <div className = 'headers'>
                    <h4 className="workwithux">WORK WITH UX SOCIETY</h4>
                    <h1 className = "mainheader">Crafting the best experiences <br />to achieve your goals</h1>
                    <div className="buttonDiv"><button className="ContactUs">CONTACT US</button></div>
                    
                    <img src = {mainImage} className = 'mainImage'></img>
>>>>>>> 74033146011d2cd606b63b102fd8294cbdca44b5
                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
         );
    }
}
 
export default Header;