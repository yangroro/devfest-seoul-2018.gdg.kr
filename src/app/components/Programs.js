import React, { Component } from 'react';
import styled from 'styled-components'
import { ON_MOBILE, radStyle } from '../constants.js'

const SpecialSession = styled.div`
  margin-top: 70px;
  padding-bottom: 45px;

  @media ${ON_MOBILE} {
    margin-top: 30px;
  }

  & h1 {
    text-align: center;
    margin-bottom: 42px;

    @media ${ON_MOBILE} {
      margin-bottom: 15px;
      font-size: 20px;
    }
  }

  & .codelab {
    color: #ffffff;
    ${radStyle};
    background-color: #e2513a;
    width: 450px;
    height: 237px;
    padding-top: 16px;
    text-align: center;
  }

  & .meditation {
    color: #ffffff;
    ${radStyle};
    background-color: #fbbc05;
    width: 450px;
    height: 237px;
    padding-top: 16px;
    text-align: center;
    margin-left: 17px;

    & h1 {
      margin-top: 20px;
    }
  }

  & .detail-button {
    text-align: center;
    & a {
      ${radStyle};
      border: 2px solid #00796b;
      color: #00796b;
      font-size: 22px;
      font-weight: 500;
      padding: 15px 30px;
      margin: 20px auto;
      width: 253px;
      display: inline-block;
    }

    @media ${ON_MOBILE} {
      & a {
        padding: 7px 20px;
        margin: 0px auto;
        font-size: 20px;
        width: 228px;
      }
    }
  }
`;

const SessionListWrapper = styled.div`
  @media ${ON_MOBILE} {
    display: none;
  }
`;

export default class Programs extends Component {
  render() {
    return (
      <SpecialSession radius="15px">
        <h1 style={{color: '#012552'}}>CODELAB / MEDITATION</h1>
        <SessionListWrapper>
          <div className="program-hero-container">
            <section className="codelab">
              <div className="program-image">
                <img src="/static/coding-dino@3x.png" height="170px" />
              </div>
              <h1>코드랩</h1>
            </section>
            <section className="meditation">
              <div className="program-image">
                <img src="/static/meditation-dino@3x.png" width="272px" />
              </div>
              <h1>명상</h1>
            </section>
          </div>
        </SessionListWrapper>
        <div className="detail-button"><a href="/timetable" class="btn-more">코드랩/명상 세션 자세히보기</a></div>
      </SpecialSession>
    )
  }
}
