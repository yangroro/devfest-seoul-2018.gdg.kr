import Head from 'next/head';
import Hero from '../components/Hero';
import CoC from '../components/CoC';

export default () => (
  <div>
    <Head>
      <title>DevFest Seoul 2018 - Schedule</title>
    </Head>
    <main className="coc">
      <Hero />
      <CoC />
    </main>
  </div>
)