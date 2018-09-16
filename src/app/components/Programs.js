import React, { Component } from 'react';

export default class Programs extends Component {
  render() {
    return (
      <div className="program-hero">
        <section>
          <div className="program-image">
            <amp-img src="/static/coding-dino@3x.png" width="603px" height="348px" layout="responsive"></amp-img>
          </div>
          <h1>코드랩</h1>
          <p>경험하지 못한 새로운 기술을 직접 구현하고 실험해볼 수 있는 자리입니다. 튜터와 함께 자유롭게 질문하고 코딩하는 시간을 가지세요. (이번 코드랩은 빈자리에 오시면 시작입니다.)</p>
        </section>
        <section>
          <div className="program-image">
            <amp-img src="/static/meditation-dino@3x.png" width="554px" height="304px" layout="responsive"></amp-img>
          </div>
          <h1>명상 세션</h1>
          <p>장시간 앉아있어 무거워진 우리의 몸을 편안하게 만들어 줄 명상 세션을 준비했습니다. 명상으로 몸과 마음 회복하고 그 힘으로 DevFest를 신나게 즐겨보세요!</p>
        </section>
      </div>
    )
  }
}