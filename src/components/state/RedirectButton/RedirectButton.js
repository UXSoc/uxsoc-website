import React, { Component } from 'react';
import redirectArrow from './../../../resources/img/register-arrow.svg';
import './style.css';

class RedirectButton extends Component {
  render() {
    const { redirectLink, buttonText, idTag } = this.props;
    return(
        <div className="RedirectButton" id={idTag}>
          <a style={{color: "#008ed4"}} href={redirectLink} target="_blank" rel="noopener noreferrer">
            {buttonText}
            <img src={redirectArrow} alt="arrow"/>
          </a>
        </div>
    )
  }
}

export default RedirectButton;
