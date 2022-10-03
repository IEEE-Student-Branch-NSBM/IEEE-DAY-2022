import Head from "next/head";
import { AboutSection } from "../components/About/AboutSection";
import CountdownTimer from "../components/Countdown/CountdownTimer";
import { SpeakerSection } from "../components/Speakers/SpeakerSection";
import { TrackSession } from "../components/Tracks/TrackSession";
import { countdownMath } from "../utils/mathutils";
import Hero from "../components/Home/Hero";
import { ContactSection } from "../components/Contact/ContactSection";
import { FooterSection } from "../components/Footer/FooterSection";
import { Faq } from "../components/FAQ/Faq";
import Sponsors from "../components/Sponsors/Sponsors";

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

      <Hero />

      {/* <section className="relative justify-center mx-auto my-auto">
        <CountdownTimer targetDate={countdownMath()} />
      </section> */}

      <section className="relative justify-center mx-auto my-auto">
        <AboutSection />
      </section>

      {/* <section className="relative justify-center mx-auto my-auto">
        <SpeakerSection />
      </section> */}

      <section className="relative justify-center mx-auto my-auto mt-30">
        <TrackSession />
      </section>

      <section className="relative justify-center mx-auto my-auto mt-30 ">
        <Sponsors />
      </section>

      <section className="relative justify-center mx-auto my-auto mt-30">
        <Faq />
      </section>

      {/* <section className="relative justify-center mx-auto my-auto">
        <ContactSection />
      </section> */}

      <section className="relative justify-center mx-auto my-auto">
        <FooterSection />
      </section>
    </div>
  );
}
