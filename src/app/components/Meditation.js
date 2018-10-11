import React, { Component } from 'react'
import styled from 'styled-components'
import { ON_MOBILE, radStyle } from '../constants.js'

const MeditationContainer = styled.div`
  max-width: 1000px;
  margin: 60px auto;
  @media ${ON_MOBILE} {
    margin: 0 auto;
  }
`;

const MeditationIntroWeb = styled.div`
  ${radStyle};
  display: flex;
  background-color: #fbbc05;
  height: 240px;
  align-items: center;
  justify-content: center;

  @media ${ON_MOBILE} {
    display: none;
  }
`;

const MeditationIntroMobile = styled.div`
  display: none;
  @media ${ON_MOBILE} {
    display: flex;
    background-color: #fbbc05;
    align-items: center;
    justify-content: center;
    padding: 31px 0;
  }
`;

const DinoImg = styled.img`
  width: 272px;
  @media ${ON_MOBILE} {
    width: 156px;
  }
`;

const MeditationGuide = styled.div`
  margin-left: 74px;
  color: #ffffff;
  max-width: 600px;
`;

const MeditationGuideMobile = styled.div`
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
  border: 1px solid #fbbc05;
  font-size: 14px;
  font-weight: 500;
  color: #464646;
  height: 80px;

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

export default class Meditation extends Component {
  render() {
    return (<MeditationContainer>
      <MeditationIntroWeb radius="15px">
        <DinoImg src="./static/meditation-dino@3x.png"  />
        <MeditationGuide>
          <h1>명상</h1>
          <div style={{marginTop: 8+'px'}}>
          장시간 앉아있어 무거워진 우리의 몸을 편안하게 만들어 줄 명상 세션을 준비했습니다.<br /> 명상으로 몸과 마음 회복하고 그 힘으로 DevFest를 신나게 즐겨보세요!
          </div>
        </MeditationGuide>
      </MeditationIntroWeb>

      <MeditationIntroMobile>
        <DinoImg src="./static/meditation-dino@3x.png"  />
      </MeditationIntroMobile>
      <MeditationGuideMobile>
        <h1>명상</h1>
        <div style={{marginTop: 8+'px', marginBottom: 26+'px'}}>
        장시간 앉아있어 무거워진 우리의 몸을 편안하게 만들어 줄 명상 세션을 준비했습니다.<br /> 명상으로 몸과 마음 회복하고 그 힘으로 DevFest를 신나게 즐겨보세요!
        </div>
      </MeditationGuideMobile>

      <div style={{maxWidth: 960+'px', margin: 20+'px '+30+'px'}}>
        <div className="schedule-row">
          <div className="schedule-time">
            <span className="schedule-time-start">14:40</span>
            <span className="schedule-item-end">16:05</span>
          </div>
          <ScheduleItemRow>
            <ScheduleItem radius="15px">
              <h1>명상</h1>
              <div className="venue">장소: TBD</div>
            </ScheduleItem>
          </ScheduleItemRow>
        </div>
        <div className="schedule-row">
          <div className="schedule-time">
            <span className="schedule-time-start">16:20</span>
            <span className="schedule-item-end">17:55</span>
          </div>
          <ScheduleItemRow>
            <ScheduleItem radius="15px">
              <h1>명상</h1>
              <div className="venue">장소: TBD</div>
            </ScheduleItem>
          </ScheduleItemRow>
        </div>
      </div>

      </MeditationContainer>
    )
  }
}
