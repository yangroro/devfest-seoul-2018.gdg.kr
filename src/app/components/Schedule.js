import React, { Component } from 'react'
import Data from '../static/schedule.json'
import Modal, { ModalProvider } from 'styled-react-modal'
import styled from 'styled-components'
import { ON_MOBILE, radStyle } from '../constants.js'

const SpeakerModal = Modal.styled`
  width: 100%;
  height: 100%;
  max-width: 640px;
  max-height: 599px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 2px 28px 0 rgba(152, 151, 151, 0.35);
  padding: 0 20px;
  display: flex;
`

const ModalCloseContainer = styled.div`
  width: 100%;
  height: 20px;

  @media ${ON_MOBILE} {
    height: 15px;
  }
`

const TrackInfo = styled.div`
  ${radStyle};
  width: 81px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  background-color: #00796b;
  color: #fff;
`

const TimeInfo = styled.div`
  font-size: 20px;
  font-weight: normal;
  color: #000;
  margin-left: 20px;
`

const HallInfo = styled.div`
  margin-left: 40px;
  font-size: 20px;
  font-weight: normal;
`

const ModalMetaInfo = styled.div`
  font-size: 20px;
`

const ModalTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  @media ${ON_MOBILE} {
    font-size: 20px;
  }
`

const ModalContent = styled.div`
  font-size: 18px;
  font-weight: normal;

  @media ${ON_MOBILE} {
    font-size: 13px;
  }
`
const ModalSpeakerName = styled.div`
  font-size: 20px;

  @media ${ON_MOBILE} {
    font-size: 12px;
  }
`

const ModalSpeakerAffiliation = styled.div`
  color: #747474;
  font-size: 20px;
  @media ${ON_MOBILE} {
    font-size: 12px;
  }
`

const ModalSpeakerIntro = styled.div`
  font-size: 16px;
  @media ${ON_MOBILE} {
    font-size: 10px;
  }
`

class SessionItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    isOpen: false,
    opacity: 0,
  }

  handleClick(e) {
    console.log('asdf')
  }

  toggleModal = e => {
    console.log('toggleModal')
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
    const { session } = this.props
    return (
      <section
        onClick={this.toggleModal}
        className="schedule-item"
        lang={session.lang}
      >
        <button onClick={this.handleClick}> dfsf </button>
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
        <SpeakerModal
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
        >
          <span>I am a modal!</span>
          <button onClick={this.toggleModal}>Close me</button>
        </SpeakerModal>
      </section>
    )
  }
}

const SessionList = ({ list }) => (
  <ModalProvider>
    <div className="schedule-item-row">
      {console.log(list)}
      {list.map(session => <SessionItem session={session} />)}
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
          <SessionList list={schedule.sessionList} />
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
