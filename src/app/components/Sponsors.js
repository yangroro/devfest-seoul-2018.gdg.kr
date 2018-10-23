import React, { Component } from 'react';
import styled from 'styled-components'
import { ON_MOBILE } from '../constants.js'

const SponsorsContainer = styled.div`
  margin-top: 32px;
  padding-bottom: 45px;

  & h1 {
    text-align: center;
    margin-bottom: 42px;

    @media ${ON_MOBILE} {
      margin-bottom: 15px;
      font-size: 20px;
    }
  }
`;

const LogoListContainer = styled.div`
  width: 940px;
  margin: auto;

  @media ${ON_MOBILE} {
    width: 100%;
    text-align: center;
  }

  & h1 {
    font-size: 32px;
    font-weight: bold;
    color: #012552;
    text-align: center;
    margin-bottom: 42px;

    @media ${ON_MOBILE} {
      font-size: 20px;
      font-weight: bold;
      color: #012552;
      text-align: center;
      margin-bottom: 25px;
    }
  }
`;

const LogoContainer = styled.div`
  width: 296px;
  margin-bottom: 17px;
  text-align: center;
  display: inline-block;
  padding: 44px 0;

  @media ${ON_MOBILE} {
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 20px 0;
    display: inline-block;
  }
`;


export default class Sponsors extends Component {
  render() {
    return (
      <SponsorsContainer>
        <LogoListContainer>
          <h1>Sponsors</h1>
          <LogoContainer><img src='../static/sponsors/gdg.png' style={{height: 36+'px'}}/> </LogoContainer>
          <LogoContainer><img src='../static/sponsors/banksalad.png' style={{height: 29+'px'}}/> </LogoContainer>
          <LogoContainer><img src='../static/sponsors/kakaopay.png' style={{height: 36+'px'}}/> </LogoContainer>
          <LogoContainer><img src='../static/sponsors/yogiyo.png' style={{height: 36+'px'}}/> </LogoContainer>
          <LogoContainer><img src='../static/sponsors/cracker9.png' style={{height: 36+'px'}}/> </LogoContainer>
          <LogoContainer><img src='../static/sponsors/festa.png' style={{height: 36+'px'}}/> </LogoContainer>
        </LogoListContainer>
      </SponsorsContainer>
    )
  }
}
