import Head from 'next/head';
import Byline from '../components/Byline';
import Header from '../components/Header';
import CoC from '../components/CoC';
import Place from '../components/Place';
import GDG from '../components/GDG';
import DevFest from '../components/DevFest';

export default () => (
  <div>
    <Head>
      <title>DevFest Seoul 2018</title>
    </Head>
    <Header />
    <CoC />
    <Place />
    <DevFest />
    <GDG />
  </div>
)
