import Head from "next/head";
import { TrackSession } from "../components/Tracks/TrackSession";
import { HeaderTitle } from "../shared/Titles/HeaderTitle";

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

      <section className="relative">
        <TrackSession />
      </section>
    </div>
  );
}
