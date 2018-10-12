import React, { Component } from 'react';
import styled from 'styled-components'
import { ON_MOBILE, radStyle } from '../constants.js'

const Camp = styled.div`
  display:block;
  width:1237px;
  height:464px;
  margin:auto;
  background:url(/static/devfest-camp@2x.png) 0 0 no-repeat;
  background-size:cover;

  & span {
    display:block;font-size:32px;font-weight:bold;color:#012552;padding:159px 0 0;text-align:center;
  }

  & .down-arrow {
    text-align: center;
    margin-top: 20px;
  }

  @media ${ON_MOBILE} {
    width: 100%;
    height: 120px;

    & span {
      padding: 48px 0 0;
      font-size: 20px;
    }

    & .down-arrow {
      margin-top: 48px;
    }
  }
`;

export default class DevFest extends Component {
  render() {
    return (
      <Camp>
        <a href="https://festa.io/events/88" target="_blank">
          <span>티켓 구입 바로가기</span>
          <div className="down-arrow"><img src="/static/green-arrow.png" width="30px;" /></div>
        </a>
      </Camp>
    )
  }
}
