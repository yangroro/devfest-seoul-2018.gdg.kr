import Head from 'next/head';
import Place from '../components/Place';
import GDG from '../components/GDG';
import DevFest from '../components/DevFest';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Sponsor from '../components/Sponsor';
import Speaker from '../components/Speaker';

export default () => (
  <div>
    <Head>
      <title>GDG DevFest Seoul 2018</title>
    </Head>
    <main>
      <Hero />
      <div className="info">
        <DevFest />
        <GDG />
      </div>
      <Programs />
      <Sponsor />
      <Speaker />
      <Place />
    </main>
  </div>
)
