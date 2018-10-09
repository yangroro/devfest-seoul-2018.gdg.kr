import React, { Component } from 'react';

export default class Programs extends Component {
  render() {
    return (
      <div className="program-hero">
        <h1>SESSION</h1>
        <div class="program-hero-container">
          <section>
            <div className="program-image">
              <amp-img src="/static/coding-dino@3x.png" width="603px" height="348px" layout="responsive"></amp-img>
            </div>
            <h1>코드랩</h1>
          </section>
          <section>
            <div className="program-image">
              <amp-img src="/static/meditation-dino@3x.png" width="554px" height="304px" layout="responsive"></amp-img>
            </div>
            <h1>명상</h1>
          </section>
        </div>
        <a href="#" class="btn-more">세션 자세히보기</a>
      </div>
    )
  }
}