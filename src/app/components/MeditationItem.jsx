import React, { Component } from 'react'
import styled from 'styled-components'
import SpeakerModalWrapper from './Modal'
import { NavConsumer } from '../NavProvider'
import { ON_MOBILE, radStyle } from '../constants.js'

const MeditationItemWrapper = styled.section``;

const ScheduleItemRow = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  cursor: pointer;
  transition: 0.2s ease, color 0.2s ease;
  border-radius: 10px;
  &:hover,
  :focus {
    background-color: #ffefc1;
    box-shadow: 0 0 20px 0 #ffefc1, 0 0 20px 0 #ffefc1;
  }

  &:active {
    background-color: #d8d8d8;
  }
  
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
    height: auto;
    padding: 0 16px;

    & + & {
      margin-left: 0;
      margin-top: 10px;
    }

    & .category, & .description, & a  {
      display: none;
    }

    & .venue {
      position: relative;
      margin-top: 30px;
      margin-bottom: -7px;
    }

    & h1 {
      font-size: 20px;
    }
  }
`;

class MeditationItem extends Component {
  state = {
    isOpen: false,
    opacity: 0,
  }

  toggleModal = cb => {
    cb(!this.state.isOpen),
      this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  afterOpen = () => {
    setTimeout(() => {
      this.setState({ opacity: 1 })
    })
  }

  beforeClose = () => {
    return new Promise(resolve => {
      this.setState({ opacity: 0 })
      setTimeout(resolve, 200)
    })
  }

  render() {
    const { session, startTime, endTime } = this.props
    return (
      <NavConsumer>
        {({ actions }) => {
          return (
            <MeditationItemWrapper
              onClick={() => {
                this.toggleModal(actions.toggleModal)
              }}
              className="meditation-item"
              lang={session.lang}
            >
            <div className="schedule-row">
              <div className="schedule-time">
                <span className="schedule-time-start">{startTime}</span>
                <span className="schedule-item-end">{endTime}</span>
              </div>
              <ScheduleItemRow>
                <ScheduleItem radius="15px">
                  <h1>{session.title}</h1>
                  <div className="venue">지하1층 컨퍼런스 룸 3 / 민진희 강사님</div>
                </ScheduleItem>
              </ScheduleItemRow>
            </div>
              <SpeakerModalWrapper
                isOpen={this.state.isOpen}
                afterOpen={this.afterOpen}
                beforeClose={this.beforeClose}
                onBackgroundClick={() => {
                  this.toggleModal(actions.toggleModal)
                }}
                onEscapeKeydown={() => {
                  this.toggleModal(actions.toggleModal)
                }}
                opacity={this.state.opacity}
                session={session}
                startTime={startTime}
                endTime={endTime}
              />
            </MeditationItemWrapper>
          )
        }}
      </NavConsumer>
    )
  }
}

export default MeditationItem
