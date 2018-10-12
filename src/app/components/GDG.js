import React, { Component } from 'react';

export default class GDG extends Component {
  render() {
    return (
      <section className="section">
        <h1>About GDG Korea</h1>
        <p>GDG Korea 에는 9개의 지역기반 그룹(GDG Seoul, GDG Pangyo, GDG Incheon, GDG Busan, GDG Guro, GDG Gwangju, GDG Daejeon, GDG SongDo,  GDG Suwon), 3개의 기술기반 그룹(GDG Korea Android, GDG Korea WebTech, GDG Cloud Korea), 1개의 스페셜한 그룹(GDG Campus Korea)이 있습니다. </p>
        <div className="dino-wrapper">
          <img src="/static/dinosaur-image-1@2x.png" />
        </div>
      </section>
    )
  }
}
