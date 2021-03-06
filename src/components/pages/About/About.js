import React, { Component } from 'react';
import Navigation from '../../state/Navigation/Navigation';
import AboutBox from './../../stateless/AboutBox/AboutBox';
import LeftValues from './../../stateless/AboutValues/LeftValues';
import RightValues from './../../stateless/AboutValues/RightValues';
import ContactForm from '../../state/ContactForm/ContactForm';
import Footer from './../../state/Footer/Footer';
import {Helmet} from 'react-helmet';

import empathy from './../../../resources/illustrations/about-empathy.png'
import collaboration from './../../../resources/illustrations/about-collaboration.png'
import delivery from './../../../resources/illustrations/about-delivery.png';
import purpose from './../../../resources/illustrations/about-purpose.png';
import quality from './../../../resources/illustrations/about-quality.png';
import about from './../../../resources/illustrations/about-landing.png';
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

class About extends Component {
  render() {

    // const PageTitle = styled.h4`
    //   position: relative;
    //   text-align: center;
    //   margin-top: 150px;
    //   font-family: Montserrat, sans-serif;
    // `
    // const SectionTitle = styled.h1`
    //   text-align: center;
    //   font-family: Rubik;
    //   line-height: 60px;
    //   font-size: 50.97px;
    //   color: #20252B;
    //
    //   @media (max-width: 768px) {
    //     width: 80%;
    //     margin: auto;
    //
    //   }
    //
    //   @media (max-width: 475px) {
    //     font-size: 40px;
    //   }
    // `


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
        {/* <div>
          <PageTitle>About User Experience Society</PageTitle>
          <SectionTitle>Unleashing the Designer in You</SectionTitle>
        </div> */}
        <div className="landing-container">
          <p className="section-label">About User Experience Society</p>
          <h2>Unleashing the Designer in You</h2>
        </div>
        <div className="about-ux">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="about-ux">
              <img src={about} alt="About UX Society"/>
            </div>
          </ScrollAnimation>
          <div className="about-uxsociety">
            <h2>What is User Experience Society</h2>
            <p>UX Society is a student organization that advocates and practices human-centered design in solving problems in the community</p>
          </div>
        </div>
        <div className="about-box">
          <AboutBox
            title="Vision"
            details="UX Society aims to nurture designers who are passionate about solving problems in the community through human-centered design"
          />
          <AboutBox
            title="Mission"
            details="UX Society empowers people through design education, enlightens them to the power of design, and nurtures them to create meaningful products for the community"
          />
        </div>
        <div className="about-CoreValues">
          <h1>Our Core Values</h1>
          <LeftValues
            title="Champion authentic user empathy"
            details="We at UX Society will always strive to empathize with our members. We listen to your needs, suggestions, opinions, and goals in the organization and translate these into projects, events, and initiatives to serve you better."
            img={empathy}
          />
          <RightValues
            title="Foster a collaborative environment"
            details="At UX Society, you will never be alone. Every project or initiative is done in a collaborative manner. Everyone is part of the team. Don't be afraid to ask help, mentorship, or advice."
            img={collaboration}
          />
          <LeftValues
            title="Value delivery over perfection"
            details="We want to maximize the value we give to our members. We believe that what we do does not have to be perfect to produce strong results. Completion produces results. Perfectionism delays and kills results."
            img={delivery}
          />
          <RightValues
            title="Maintain a shared sense of purpose"
            details="Our advocacy is what binds us together in UX Society. This is our north star. Everything we do is always guided by our drive to establish the importatn role of design in the community through the products we create, the events we hold, the speakers we invite, and the chapters we create."
            img={purpose}
          />
          <LeftValues
            title="Establish and uphold standards of quality"
            details="We believe that quality work we put out in the community represents who we are as an organization. Therefore, we aspire to create the best products that will not only help the community, but create an awareness that will transform people's perception of design."
            img={quality}
          />
        </div>
        <div id="contact-us" className="contact-container">
          <ContactForm/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
