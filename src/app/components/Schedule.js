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
            <div className="schedule-item-category">{session.categories.join(" ")}</div>
            <div className="schedule-item-language">{session.lang}</div>
          </div>
          <h1 className="schedule-item-title">{session.title}</h1>
          <div className="schedule-item-info">{session.description}</div>
          <div className="schedule-item-speaker">
            <div className="schedule-item-speaker-name">{session.speaker.name}</div>
            <div className="schedule-item-speaker-thumb">
              <amp-img src={session.speaker.thumb} width="35px" height="35px" layout="responsive"></amp-img>
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
      <section className="schedule-container">
        <header className="section-header">
          <h1>SCHEDULE</h1>
        </header>
        <div className="schedule-list-container">
          {scheduleList}
        </div>
      </section>
    )
  }
}