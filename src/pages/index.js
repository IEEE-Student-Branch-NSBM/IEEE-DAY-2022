import Head from "next/head";
import { SpeakerSection } from "../components/Speakers/SpeakerSection";
import { TrackSession } from "../components/Tracks/TrackSession";

export default function Home() {
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
        <SpeakerSection />
      </section>

      <section className="relative justify-center mx-auto my-auto">
        <TrackSession />
      </section>
    </div>
  );
}
