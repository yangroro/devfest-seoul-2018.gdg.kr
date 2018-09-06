import React, { Component } from 'react';

export default class Sponsor extends Component {
  render() {
    return (
      <section class="section">
        <h1>Call For Sponsors</h1>
        <p>GDG DevFest 팀에서는 다양한 형태로 GDG DevFest 2018 Seoul 행사를 후원하고, 직/간접적으로 홍보를 희망하는 기업을 모집하고 있습니다. 기업 홍보 부스를 통한 후원 외에도, 행사 당일 참석자에게 전달되는 기념품 (굿즈), 안내서(리플렛)을 통한 후원, 행사 진행 중 참석자들에게 노출되는 영상을 통한 후원이 준비되어 있습니다.</p>
        <p>현재 Google의 최신 기술을 여러분의 서비스에 적용하고 계신가요? 새로운 서비스의 홍보가 필요한가요? 함께할 개발자를 모집하고자 하시나요? 개발자들의 축제 DevFest에서 다양한 방법으로 여러분의 회사를 홍보해보세요!</p>
        <p>자세한 내용은 아래 신청폼을 통해 문의주세요.</p>
        <div className="link-set">
          <a href="#" className="link">이메일 문의하기</a>
          <a href="#" className="link">신청 폼 작성하기</a>
        </div>
      </section>
    )
  }
}