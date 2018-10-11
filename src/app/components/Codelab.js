import React, { Component } from 'react'
import styled from 'styled-components'
import { ON_MOBILE, radStyle } from '../constants.js'

const CodelabContainer = styled.div`
  max-width: 1000px;
  margin: 60px auto;
  @media ${ON_MOBILE} {
    margin: 0 auto;
  }
`;

const CodelabIntroWeb = styled.div`
  ${radStyle};
  display: flex;
  background-color: #e2513a;
  height: 240px;
  align-items: center;
  justify-content: center;

  @media ${ON_MOBILE} {
    display: none;
  }
`;

const CodelabIntroMobile = styled.div`
  display: none;
  @media ${ON_MOBILE} {
    display: flex;
    background-color: #e2513a;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }
`;

const DinoImg = styled.img`
  width: 248px;
  height: 183px;
  @media ${ON_MOBILE} {
    width: 144px;
    height: 107px;
  }
`;

const CodelabGuide = styled.div`
  margin-left: 74px;
  color: #ffffff;
  max-width: 600px;
`;

const CodelabGuideMobile = styled.div`
  display:none;
  @media ${ON_MOBILE} {
    display:block;
    max-width: 960px;
    margin: 20px 30px;

    & > div {
      margin-top:10px;
    }
  }
`;

const ScheduleItemRow = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  @media ${ON_MOBILE} {
    flex: 1;
    margin-left: 10px;
    display: block;
  }
`;

const ScheduleItem = styled.section`
  ${radStyle};
  display: block;
  position: relative;
  flex: 1;
  padding: 16px;
  border: 1px solid #e2513a;
  font-size: 14px;
  font-weight: 500;
  color: #464646;
  height: 205px;

  & + & {
    margin-left: 17px;
  }

  & h1 {
    margin-top: 10px;
  }

  & .description {
    margin: 7px 0;
  }

  & a {
    text-decoration: underline;
  }

  & a:hover {
    color: #e2513a;
    cursor: pointer;
  }

  & .venue {
    position: absolute;
    bottom: 20px;
  }

  @media ${ON_MOBILE} {
    height: 76px;
    padding: 0 16px;

    & + & {
      margin-left: 0;
      margin-top: 10px;
    }

    & .category, & .description, & a  {
      display: none;
    }

    & .venue {
      position: absolute;
      bottom: 12px;
    }

    & h1 {
      font-size: 20px;
    }
  }
`;

export default class Codelab extends Component {
  render() {
    return (<CodelabContainer>
      <CodelabIntroWeb radius="15px">
        <DinoImg src="/static/codelab-img.png"  />
        <CodelabGuide>
          <h1>코드랩</h1>
          <div style={{marginTop: 8+'px'}}>
            Google Assistant / Flutter을 직접 구현하고 실험해볼 수 있는 자리입니다.<br />튜터와 함께 자유롭게 질문하고 코딩하는 시간을 가지세요. <br />이번 코드랩을 통해 구글의 최신 기술을 직접 경험해 보는 좋은 기회가 되시길 바랍니다!
            <div style={{marginTop: 8+'px'}}>- 노트북을 꼭 지참해주세요!</div>- 이번 코드랩은 빈자리에 오시면 시작입니다.
          </div>
        </CodelabGuide>
      </CodelabIntroWeb>

      <CodelabIntroMobile>
        <DinoImg src="/static/codelab-img.png"  />
      </CodelabIntroMobile>
      <CodelabGuideMobile>
        <h1>코드랩</h1>
        <div style={{marginTop: 8+'px', marginBottom: 26+'px'}}>
          Google Assistant / Flutter을 직접 구현하고 실험해볼 수 있는 자리입니다. 튜터와 함께 자유롭게 질문하고 코딩하는 시간을 가지세요. <br />이번 코드랩을 통해 구글의 최신 기술을 직접 경험해 보는 좋은 기회가 되시길 바랍니다!
          <div style={{marginTop: 8+'px'}}>- 노트북을 꼭 지참해주세요!</div>- 이번 코드랩은 빈자리에 오시면 시작입니다.
        </div>
      </CodelabGuideMobile>

      <div style={{maxWidth: 960+'px', margin: 20+'px '+30+'px'}}>
        <div className="schedule-row">
          <div className="schedule-time">
            <span className="schedule-time-start">13:45</span>
            <span className="schedule-item-end">17:55</span>
          </div>
          <ScheduleItemRow>
            <ScheduleItem radius="15px">
              <div className="category">Codelab</div>
              <h1>Actions on Google</h1>
              <div className="description">구글에서 공개한 인공지능 비서 서비스인 Google Assistant에 들어갈 수 있는 소프트웨어를 Actions on google을 통해 만들어보실 수 있는 시간입니다.</div>
              <a href="https://codelabs.developers.google.com/codelabs/actions-1/#0" target="_blank" className="link">Actions on Google Codelab 공식 문서</a>
              <div className="venue">장소: TBD</div>
            </ScheduleItem>

            <ScheduleItem radius="15px">
              <div className="category">Codelab</div>
                <h1>Flutter</h1>
                <div className="description">Flutter은 구글이 공개한 모바일 앱 SDK 로, Flutter을 통해 iOS와 안드로이드를 동시에 만들 수 있습니다. 하나의 코드로 iOS와 안드로이드 앱을 모두 만들어본느 시간을 가져보세요!</div>
                <a href="https://flutter.io/codelabs/" target="_blank" className="link">Flutter 공식 문서</a>
              <div className="venue">장소: TBD</div>
            </ScheduleItem>
          </ScheduleItemRow>
        </div>
      </div>

      </CodelabContainer>
    )
  }
}
