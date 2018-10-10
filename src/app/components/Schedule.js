import React, { Component } from 'react';
import Data from '../static/schedule.json';

class SessionList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let sessions = this.props.list.map((session) => {
      return (
        <section className="schedule-item" lang={session.lang}>
          <div className="schedule-item-meta">
            {session.category === 'Mobile' ? <div className="schedule-item-category" style={{backgroundColor: '#8bc34a'}}>{session.category}</div> : ''}
            {session.category === 'Web' ? <div className="schedule-item-category" style={{backgroundColor: '#43a6f5'}}>{session.category}</div> : ''}
            {session.category === 'Cloud' ? <div className="schedule-item-category" style={{backgroundColor: '#3f51b5'}}>{session.category}</div> : ''}
            {session.category === 'ML' ? <div className="schedule-item-category" style={{backgroundColor: '#fbbc05'}}>{session.category}</div> : ''}
            {session.category === 'Assistant' ? <div className="schedule-item-category" style={{backgroundColor: '#e2513a'}}>{session.category}</div> : ''}
            <div className="schedule-item-language">{session.lang}</div>
          </div>
          <h1 className="schedule-item-title">{session.title}</h1>
          <div className="schedule-item-info">{session.sub_title}</div>
          <div className="schedule-item-speaker">
            <div className="schedule-item-speaker-name">{session.speaker.map((data) => data.name).join('/')}</div>
            <div className="schedule-item-speaker-thumb">
              {
                session.speaker.map((data) => {
                  return <div className = 'speaker-thumb-image'
                          style = {{ backgroundImage: 'url(' + data.thumb + ')',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center center',
                              backgroundRepeat: 'no-repeat',
                              width: '35px',
                              height: '35px',
                              borderRadius: '50%'
                        }} />
                })
              }
            </div>
          </div>
        </section>
      )
    })

    return (
      <div className="schedule-item-row">
        {sessions}
      </div>
    )
  }
}

export default class Schedule extends Component {
  constructor() {
    super();

    this.state = {
      scheduleData: Data.schedules
    }
  }
  render() {
    let scheduleList = this.state.scheduleData.map((schedule) => {
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
      <div className="schedule-list-container">
        {scheduleList}
      </div>
    )
  }
}
