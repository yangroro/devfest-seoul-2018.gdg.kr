import React, { Component } from 'react';

export default class Sponsor extends Component {
  render() {
    return (
      <section className="section speaker">
        <h1>Call For Speakers</h1>
        <p>DevFest에서 여러 개발 분야의 경험을 공유해주실 발표자 분들을 모집하고 있습니다. 여러분들의 노하우가 담긴 값진 경험과 지식을 공유해 주시기를 기대하고 있습니다!</p> 
        <p>발표자 지원은 하단의 신청 폼을 통해 지원하실 수 있습니다. </p>
        <div className="link-set">
          <a href="mailto:devfest-seoul-2018@googlegroups.com" className="link">이메일 문의하기</a>
          <a href="https://goo.gl/forms/M3QlGamaRQIXAqc23" target="_blank" className="link">신청 폼 작성하기</a>
        </div>
      </section>
    )
  }
}