import Head from "next/head";
import { AboutSection } from "../components/About/AboutSection";
import CountdownTimer from "../components/Countdown/CountdownTimer";
import { SpeakerSection } from "../components/Speakers/SpeakerSection";
import { TrackSession } from "../components/Tracks/TrackSession";
import { countdownMath } from "../utils/mathutils";

export default function Home() {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <Head>
        <title>IEEE DAY NSBM 2022</title>
        <meta
          name="description"
          content="IEEE Day is the most glamorous celebration for every IEEEian around the globe, which is held annually in the month of October."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <section className="relative justify-center mx-auto my-auto">
        <CountdownTimer targetDate={countdownMath()} />
      </section>

      <section className="relative justify-center mx-auto my-auto">
        <AboutSection />
      </section>

      <section className="relative justify-center mx-auto my-auto">
        <SpeakerSection />
      </section>

      <section className="relative justify-center mx-auto my-auto">
        <TrackSession />
      </section>
    </div>
  );
}
