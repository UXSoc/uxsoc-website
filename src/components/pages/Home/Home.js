import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
import landingImage from './../../../resources/illustrations/home-landing.png';
import designLeaders from './../../../resources/illustrations/home-blue.png';
import {Helmet} from 'react-helmet'
import Image1 from './../../../resources/illustrations/home-community.png';
import Image2 from './../../../resources/illustrations/home-consultancy.png';
import HomeCard from '../../state/HomeCard/HomeCard';
import ContactForm from '../../state/ContactForm/ContactForm';
import Footer from './../../state/Footer/Footer';
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import './style.css';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return null;
  }
}


class Home extends Component {
  render() {
    return(
      <div>
        <Helmet>
          <title>User Experience Society</title>
          <meta name="generator" content="Page Generator v1.0.0"/>
          <meta name="description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

          <meta property="og:url" content="http://www.uxsociety.org/"/>

          <meta property="og:title" content="User Experience Society"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content="https://i.imgur.com/DKAmvO4.jpg"/>
          <meta property="og:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>

          <meta name="twitter:site" content="@uxsociety-website"/>
          <meta name="twitter:creator" content="@uxsocietyph"/>
          <meta name="twitter:title" content="User Experience Society"/>
          <meta name="twitter:description" content="UX Society is a student organization that advocates and practices human-centered design in solving problems in the community."/>
          <meta name="twitter:image" content="https://i.imgur.com/DKAmvO4.jpg"/>
        </Helmet>
        <ScrollToTopOnMount/>
        <Navigation/>
          <div className='home-landing-container'>
            <h3 className='north-star-title'>Our North Star</h3>
            <h1 className='main-title-leader'>We make <br/> design leaders</h1>
            <a className='journey-button' style={{color: "white"}}href="#blue-home">Start Your Journey</a>

            <img className='home-landing-image' src={landingImage} alt='landing'/>
            <img className='mobile-landing-image' src={landingImage} alt='mobile landing'/>
          </div>
          <div id="blue-home" className='home-blue-section'>
            <p className='home-blue-text'><strong>User Experience Society</strong> aims to guide the design
              leaders of tomorrow, creating products and <br/> services that will make the world <em>a better place</em></p>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <img src={designLeaders} alt='design leaders' className='design-leaders-img'/>
            </ScrollAnimation>
          </div>
          <div className="HomeCard-container">
            <HomeCard
              image={Image1}
              sectionLabel="Community"
              headerLabel="Geared for Growth"
              btnLabel="Experience the Mafia"
              link="/community"
              caption="Engage yourself with the community. Discover what you can do and how you can grow with us."/>
            <HomeCard
              image={Image2}
              sectionLabel="Consultancy"
              headerLabel="Crafted for Work"
              btnLabel="Explore our projects"
              link="/work"
              caption="We help businesses improve their products and services through intentional design, and we never fail to deliver."/>
          </div>
          <div id="contact-us" className="contact-container">
            <ContactForm/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default Home;
