import Head from 'next/head';
import Place from '../components/Place';
import GDG from '../components/GDG';
import DevFest from '../components/DevFest';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Camp from '../components/Camp';
import ScheduleHome from '../components/ScheduleHome';
import Sponsors from '../components/Sponsors'

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
      <div className="home-session">
        <Camp />
        <ScheduleHome />
        <Programs />
        <Sponsors />
      </div>
      <Place />
    </main>
  </div>
)
