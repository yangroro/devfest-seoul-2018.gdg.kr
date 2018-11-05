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
        <DinoImg src="/static/meditation-dino@3x.png"  />
        <MeditationGuide>
          <h1>명상</h1>
          <div style={{marginTop: 8+'px'}}>
          장시간 앉아있어 무거워진 우리의 몸을 편안하게 만들어 줄 명상 세션을 준비했습니다.<br /> 명상으로 몸과 마음 회복하고 그 힘으로 DevFest를 신나게 즐겨보세요!
          </div>
        </MeditationGuide>
      </MeditationIntroWeb>

      <MeditationIntroMobile>
        <DinoImg src="/static/meditation-dino@3x.png"  />
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
            <span className="schedule-time-start">16:35</span>
            <span className="schedule-item-end">17:15</span>
          </div>
          <ScheduleItemRow>
            <ScheduleItem radius="15px">
              <h1>마인드풀니스로 일상의 스트레스를 감소시키는 노하우</h1>
              <div className="description">이 수업에서는 명상에 관심이 있어서 스타트하고자하는 비기너들부터 경험자들까지 아울러 1) 마인드풀니스를 바르게 이해하는 시간, 2) 명상훈련이 스트레스를 감소시키는 과학적인 근거 소개와 3) 자신의 일상생활에 마인드풀니스를 간편하게 적용할 수 있는 방법을 안내받고 또 체험하는 시간입니다. 마인드풀니스에 대해 평상시에 궁금했던 점도 충분히 공유하고 속시원한 답변을 얻어가는 시간이 될 수 있습니다!</div>
              <div className="venue">장소: B1 컨퍼럼스 룸 3</div>
            </ScheduleItem>
          </ScheduleItemRow>
        </div>
        <div className="schedule-row">
          <div className="schedule-time">
            <span className="schedule-time-start">17:30</span>
            <span className="schedule-item-end">18:10</span>
          </div>
          <ScheduleItemRow>
            <ScheduleItem radius="15px">
              <h1>마인드풀니스로 몸과 마음의 휴식을 맛보기</h1>
              <div className="description">바쁜 일상이 연속되다보면, 긴장감과 스트레스가 몸에 쌓이기 마련입니다. 이 수업에서는 멈추지 못하고 Detach되지 않는 마음의 스위치를 끄고, 몸에 누적된 스트레스를 효율적으로 해소하며, 스스로에게 휴식을 주는 방법을 체험해봅니다. 마인드풀니스로 몸과 마음에게 단 몇분이라도 진정한 쉼을 주면, 잠도 잘오고 몸과 마음이 개운해지는 효과를 얻게 되실 것입니다.</div>
              <div className="venue">장소: B1 컨퍼런스 룸 3</div>
            </ScheduleItem>
          </ScheduleItemRow>
        </div>
      </div>

      </MeditationContainer>
    )
  }
}
