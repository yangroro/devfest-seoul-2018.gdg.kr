import React, { Component } from 'react'
import Data from '../static/meditation_schedule.json'
import MeditationItem from './MeditationItem'
import { ModalProvider } from 'styled-react-modal'
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

const MeditationListContainer = styled.div`
  @media ${ON_MOBILE} {
    display: block;
    max-width: 960px;
    margin: 20px 30px;
  }
`;

const SessionRowList = ({ list, ...time }) => (
  <ModalProvider>
    <div className="meditation-item-row">
      {list.map(session => <MeditationItem {...time} session={session} />)}
    </div>
  </ModalProvider>
)

export default class Meditation extends Component {
  constructor() {
    super()

    this.state = {
      meditationData: Data.schedules,
    }
  }

  render() {
      let meditationList = this.state.meditationData.map(meditation => {
        return (
          <div className="meditation-row">
            <SessionRowList
              startTime={meditation.start_time}
              endTime={meditation.end_time}
              list={meditation.sessionList}
            />
          </div>
        )
      })

    return <MeditationContainer>
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

      <MeditationListContainer>{meditationList}</MeditationListContainer>
    </MeditationContainer>
  }
}
