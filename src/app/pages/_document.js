import Document, { Head } from 'next/document'
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ga from "../components/Ga";

export default class MyDocument extends Document {
  render () {
    const { html } = this.props
    return (
      <html amp=''>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico" />
          <link rel='canonical' href='https://devfest-seoul18.gdg.kr/' />
          <meta property="fb:app_id" content="2130873263796316" />
          <meta property="og:title" content="GDG DevFest Seoul 2018" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://devfest-seoul18.gdg.kr/static/facebook.jpg" />
          <meta property="og:url" content="https://devfest-seoul18.gdg.kr/" />
          <meta property="og:description" content="GDG 행사 중 가장 큰 개발자 축제인 DevFest Seoul 2018이 11월 10일 토요일 세종대학교 컨벤션센터에서 열립니다!" />
          <meta property="og:site_name" content="GDG DevFest Seoul 2018" />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <style amp-boilerplate=''>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style><noscript><style amp-boilerplate=''>{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style></noscript>
          <style amp-custom='' dangerouslySetInnerHTML={{
            __html: `
            .blind{display:none}
            h1,h2,h3,h4,h5,h6,ul,ol,li,p{margin:0;padding:0;list-style:none;}
            a{color:inherit;text-decoration:none}
            body{font-size:14px;line-height:1.4;font-family:APPLE SD Gothic NEO, sans-serif;color:#464646;word-break:keep-all}
            h1{font-size:1.6em;font-weight:600}
            button{padding:0;margin:0;border:0;background:none;-webkit-appearance:none}
            .header{position:fixed;top:0;left:0;right:0;padding:16px;background:#00796b;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5);z-index:1000}
            .header h1{font-size:20px;font-weight:500;color:rgba(255,255,255,0.87);letter-spacing:-.3px}
            .header-container{display:flex;align-items:center;}
            .tab.hamburger{display:block;padding:0;margin:0;margin-right:23px}
            .main-nav{display:none}
            .logo {display:none}
            amp-sidebar{width:84.375%;background:white;padding:35px 0;}
            .side-nav a{display:block;padding:11px 12px;font-size:20px;color:#6f6f6f}
            .hero{position:relative;padding-top:137.5%;max-height:897px;background:url('/static/app@2x.jpg') center center no-repeat;background-size:cover;box-sizing:border-box}
            .hero h1 {}
            .event-info{position:absolute;left:35px;right:35px;color:#f7f0e5;-webkit-text-stroke: 0.3px #1f1f1f;font-weight:900;margin-top: 14px;font-size: 1.3em;text-align:center;opacity:0.65}
            .event-info span{display:inline-block;text-shadow: 1px 1px 2px rgb(53, 20, 2);}
            .hero-contents{position:absolute;left:0;right:0;top:55%;transform:translate(0, -50%)}
            .hero-contents h1 {width:84.6875%;max-width:799px;margin:auto}
            .hero-contents::after{content:'';display:block;width:100%;padding-top:54.875%;background:url(/static/hero-camp@m.png) 0 0 no-repeat;background-size:cover;}
            .btn-set{margin-top:20px;}
            .btn{display:inline-block;padding:7px 21px 6px;margin:0 15px;border-radius:15px;background-color:#00796b;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5)}
            .link-set{margin-top:20px;text-align:right}
            .link-set a{display:inline-block;color:#00796b;font-weight:bold;padding-bottom:6px;}
            .link-set a + a {margin-left:27px;}
            .section {margin:45px 25px;color:#000}
            .section p {margin:15px 0 0}
            .section > h1 {font-size:2em}
            .section > section > h1 {font-size: 1.3em;margin:1.5em 0 1em}
            .dino-wrapper {margin:21px 1.875% 31px}
            .program-hero {}
            .program-hero section {padding:50px 20px 20px 20px;box-sizing:border-box;color:white;text-align:center}
            .program-hero .program-image {padding:0 12.5% 20px}
            .program-hero section:nth-of-type(1) {background-color:#8bc34a}
            .program-hero section:nth-of-type(2) {background-color:#00b39e}
            .place-info {position:relative}
            .place-info .place-card {margin:20px 20px 39px 20px;background:white;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5);padding-bottom:0.1px}
            .place-info .place-card h1 {padding:119px 15px 5px;background-image:url(/static/venue.jpg);background-size:cover;background-position:center;color:white;font-size:20px;text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);}
            .place-info .place-card p {font-weight:300;margin:12px 15px}
            .footer {background-color:#f5f5f5;padding:20px;color:#464646;}
            .footer-container {max-width:940px;margin:auto}
            .footer-container .logo {margin-top:27px;margin-bottom: 29px}
            .footer-container img {width:140px}
            .footer-container .copyright {color:#afafaf;}
            .contact h1 {font-size:20px}
            .contact p {font-weight:300}
            .coc {padding-top:55px;}
            .coc p {margin:15px 0}
            .coc .coc-section {margin-top: 25px;margin-bottom:40px;}
            .coc-section .coc-language {display:inline-block;background-color:#00796b;color:#ffffff;font-size:1.2em;padding:5px 11px;}
            .coc-section .coc-mail {color: #00796b;text-decoration: underline}
            @media(min-width:960px) {
              body {font-size:16px}
              h1 {font-size:1.6em}
              .tab.hamburger{display:none}
              .header{padding:21px 30px;}
              .header-container{display:flex;align-items:center;justify-content:space-between}
              .main-nav{display:block;font-size:1.1em}
              .main-nav ul{display:flex;align-items:center}
              .main-nav li{margin:0 25px}
              .main-nav a{color:white}
              .main-nav a:hover{border-bottom:2px solid #ffffff;padding-bottom: 5px;}
              .main-nav .home{display:none}
              .logo {display:block;width:93px;margin-left:25px}
              .logo a {display:block;}
              .hero {background-image:url(/static/hero-bg.jpg)}
              .hero-contents::after {width:1117px;height:363px;padding:0;background-image:url(/static/hero-camp.png);margin:auto}
              .event-info{margin-top: 3px;font-size: 1.6em;}
              .info {display:flex;width:940px;margin:auto}
              .info .section {width:456px}
              .info .section + .section {margin-left:24px}
              .section + .speaker{margin-bottom:75px}
              .hero {padding:0;height:900px}
              .section {width:940px;margin:47px auto}
              .program-hero {display:flex;flex-wrap:wrap;width:940px;margin:0px auto}
              .program-hero section {width:460px;margin:16px 0}
              .program-hero section:nth-of-type(2n) {margin-left:18px}
              .place-card {position:absolute;right:132px;top:52px;width:456px;height:457px}
              .place-info .place-card h1 {padding:175px 25px 24px}
              .place-info .place-card p {margin:18px 25px}
              .footer {margin-top:96px;padding-top:78px;padding-bottom:57px}
              .footer-container img {width:215px}
              .footer-info {display:flex;justify-content:space-between;align-items:center;margin-bottom:55px}
              .contact h1 {font-size:32px;font-weight:bold}
              .contact p {font-size:20px;color:#464646}
              .coc {padding-top:76px;}
              .coc .coc-section {margin-top:35px;margin-bottom:65px;}
              .coc-section .coc-language{margin-bottom:7px;}
              .coc-section section{margin:26px 0;}
            }
            `}} />
          <script async src='https://cdn.ampproject.org/v0.js' />
          <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
          <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
          <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
        </Head>
        <body>
          <Ga />
          <Header />
          <SideNav />
          <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
          <Footer />
        </body>
      </html>
    )
  }
}
