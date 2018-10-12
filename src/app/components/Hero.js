import React, { Component } from 'react';
import styled from 'styled-components'
import { ON_MOBILE } from '../constants'

const LogoImage = styled.img`
  width: 638px;
  height: 321px;
  @media ${ON_MOBILE} {
    width: 100%;
    max-width: 800px;
    height: auto;
  }
`;

const FamilyImage = styled.img`
  margin: 0 auto;
  max-width: 900px;

  @media ${ON_MOBILE} {
    width: 100%;
    max-width: 800px;
    height: auto;
  }
`;

export default class SideNav extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-contents">
          <h1>
            <LogoImage src="/static/hero-title.png"
              alt="DevFest Seoul 2018 - BUILD FOR DIGITAL WELLBEING"
              />
          </h1>
          <div style={{ width: 84.6875+'%', maxWidth: 900+'px', margin: '10px auto',}}><FamilyImage src="/static/hero-camp.png" /></div>
        </div>
        <div className="event-info">
          <span className="date">2018.11.10 Saturday</span>
          <span className="venue">세종대학교 광개토관 컨벤션홀</span>
        </div>
      </div>
    )
  }
}
