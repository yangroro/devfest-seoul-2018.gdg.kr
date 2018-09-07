import Document, { Head } from 'next/document'
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class MyDocument extends Document {
  render () {
    const { html } = this.props
    return (
      <html amp=''>
        <Head>
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <style amp-boilerplate=''>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style><noscript><style amp-boilerplate=''>{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style></noscript>
          <style amp-custom='' dangerouslySetInnerHTML={{
            __html: `h1,h2,h3,h4,h5,h6,ul,ol,li,p{margin:0;padding:0;list-style:none;}
            a{color:inherit;text-decoration:none}
            body{padding-top:74px;font-size:14px;line-height:1.5;font-weight:500;font-family:APPLE SD Gothic NEO, sans-serif;color:#464646}
            .blind{display:none}
            .header{position:fixed;top:0;left:0;right:0;padding:16px;background:#00796b;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5);z-index:1000}
            .header h1{font-size:20px;font-weight:500;color:rgba(255,255,255,0.87);letter-spacing:-.3px;}
            .main-nav{display:none}
            amp-sidebar{width:84.375%;background:white;padding:35px 0;}
            .side-nav a{display:block;padding:11px 12px;font-size:20px;color:#6f6f6f}
            .hero{position:relative;padding-top:137.5%;max-height:900px;background:#8bc34a;color:white;box-sizing:border-box}
            .hero-contents{position:absolute;top:50%;left:0;right:0;transform:translate(0, -50%);text-align:center;text-shadow:0 2px 4px rgba(0, 0, 0, 0.5)}
            .hero-contents h1{font-size:32px;font-weight:800}
            .btn-set{margin-top:20px;}
            .btn{display:inline-block;padding:7px 21px 6px;margin:0 15px;border-radius:15px;background-color:#00796b;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5)}
            .link-set{margin-top:11px;text-align:right}
            .link-set a{display:inline-block;color:#00796b;font-weight:bold;}
            .link-set a + a {margin-left:27px;}
            .section {margin:35px 20px;color:#000}
            .section p {margin:15px 0 0}
            .section h1 {font-size:20px;margin-bottom: 25px}
            .program-hero {}
            .program-hero section {padding:20px;box-sizing:border-box;color:white}
            .program-hero section::before {content:"frame";display:block;width:201px;height:168px;margin-bottom:17px}
            .program-hero section:nth-of-type(1) {background-color:#8bc34a}
            .program-hero section:nth-of-type(2) {background-color:#00b39e}
            .program-hero section:nth-of-type(3) {background-color:#6a9f39}
            .program-hero section:nth-of-type(4) {background-color:#56a6fb}
            .place-info {position:relative}
            .place-info .place-card {margin:20px;background:white;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5);padding-bottom:0.1px}
            .place-info .place-card h1 {padding:119px 15px 5px;background:black;color:white;font-size:20px}
            .place-info .place-card p {font-weight:300;margin:12px 15px}
            .footer {background-color:#f5f5f5;padding:20px;color:#464646}
            .contact h1 {font-size:20px}
            .contact p {font-weight:300}
            @media(min-width:960px) {
              body {font-size:16px}
              h1 {font-size:1.6em}
              .info {display:flex;width:940px;margin:auto}
              .info .section {width:456px}
              .info .section + .section {margin-left:24px}
              .hero {padding:0;height:900px}
              .section {width:940px;margin:35px auto}
              .program-hero {display:flex;flex-wrap:wrap;width:940px;margin:35px auto}
              .program-hero section {width:460px;margin:16px 0}
              .program-hero section:nth-of-type(2n) {margin-left:18px}
              .place-card {position:absolute;right:132px;top:52px;width:456px;height:457px}
              .place-info .place-card h1 {padding:175px 25px 24px}
              .place-info .place-card p {margin:18px 25px}
            }
            `}} />
          <script async src='https://cdn.ampproject.org/v0.js' />
          <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
          <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
        </Head>
        <body>
          <Header />
          <SideNav />
          <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
          <Footer />
        </body>
      </html>
    )
  }
}
