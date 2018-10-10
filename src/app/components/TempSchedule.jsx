import React, { Component } from 'react'
import Data from '../static/schedule.json'
import { ModalProvider } from 'styled-react-modal'
import styled from 'styled-components'
import SpeakerModalWrapper from './Modal'

const ScheduleItem = styled.section`
  height: 60px;
  padding: 18px 0 18px 76px;
  cursor: pointer;
  transition: 0.2s ease, color 0.2s ease;
  &:hover,
  :focus {
    background-color: #d8d8d8;
    box-shadow: 0 0 20px 0 #d8d8d8, 0 0 20px 0 #d8d8d8;
  }
`

class SessionItem extends Component {
  state = {
    isOpen: false,
    opacity: 0,
  }

  toggleModal = _ => {
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
      <ScheduleItem
        onClick={this.toggleModal}
        className="schedule-item"
        lang={session.lang}
      >
        <div className="schedule-item-meta">
          <div className="schedule-item-category">{session.category}</div>
          <div className="schedule-item-language">{session.lang}</div>
        </div>
        <h1 className="schedule-item-title">{session.title}</h1>
        <div className="schedule-item-info">{session.sub_title}</div>
        <div className="schedule-item-speaker">
          <div className="schedule-item-speaker-name">
            {session.speaker.map(data => data.name).join('/')}
          </div>
          <div className="schedule-item-speaker-thumb">
            {session.speaker.map(data => {
              return (
                <div
                  className="speaker-thumb-image"
                  style={{
                    backgroundImage: 'url(' + data.thumb + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                  }}
                />
              )
            })}
          </div>
        </div>
        <SpeakerModalWrapper
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
          session={session}
          startTime={startTime}
          endTime={endTime}
        />
      </ScheduleItem>
    )
  }
}

const SessionRowList = ({ list, ...time }) => (
  <ModalProvider>
    <div className="schedule-item-row">
      {list.map(session => <SessionItem {...time} session={session} />)}
    </div>
  </ModalProvider>
)

export default class Schedule extends Component {
  constructor() {
    super()

    this.state = {
      scheduleData: Data.schedules,
    }
  }
  render() {
    let scheduleList = this.state.scheduleData.map(schedule => {
      return (
        <div className="schedule-row">
          <div className="schedule-time">
            <span className="schedule-time-start">{schedule.start_time}</span>
            <span className="schedule-item-end">{schedule.end_time}</span>
          </div>
          <SessionRowList
            startTime={schedule.start_time}
            endTime={schedule.end_time}
            list={schedule.sessionList}
          />
        </div>
      )
    })

    return (
      <section className="schedule-container">
        <header className="section-header">
          <h1>SCHEDULE</h1>
        </header>
        <div className="schedule-list-container">{scheduleList}</div>
      </section>
    )
  }
}
