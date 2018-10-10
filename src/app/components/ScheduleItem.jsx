import React, { Component } from 'react'
import styled from 'styled-components'
import SpeakerModalWrapper from './Modal'

const ScheduleItemWrapper = styled.section`
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

class ScheduleItem extends Component {
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
      <ScheduleItemWrapper
        onClick={this.toggleModal}
        className="schedule-item"
        lang={session.lang}
      >
        <div className="schedule-item-meta">
          {session.category === 'Mobile' ? (
            <div
              className="schedule-item-category"
              style={{ backgroundColor: '#8bc34a' }}
            >
              {session.category}
            </div>
          ) : (
            ''
          )}
          {session.category === 'Web' ? (
            <div
              className="schedule-item-category"
              style={{ backgroundColor: '#43a6f5' }}
            >
              {session.category}
            </div>
          ) : (
            ''
          )}
          {session.category === 'Cloud' ? (
            <div
              className="schedule-item-category"
              style={{ backgroundColor: '#3f51b5' }}
            >
              {session.category}
            </div>
          ) : (
            ''
          )}
          {session.category === 'ML' ? (
            <div
              className="schedule-item-category"
              style={{ backgroundColor: '#fbbc05' }}
            >
              {session.category}
            </div>
          ) : (
            ''
          )}
          {session.category === 'Assistant' ? (
            <div
              className="schedule-item-category"
              style={{ backgroundColor: '#e2513a' }}
            >
              {session.category}
            </div>
          ) : (
            ''
          )}
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
      </ScheduleItemWrapper>
    )
  }
}

export default ScheduleItem
