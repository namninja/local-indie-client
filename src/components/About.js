import React from "react";
import "./About.css";
import Footer from "./Footer";
const About = () => {
  return (
    <div id="about" className="about">
      <section className="statement">
        <h2 className="descript">Find and Share Local Independent Music</h2>
        <p>
          This site was created to support local independent musicians and
          connect them with music lovers. Bands, solo acts, or DJ's can join and
          help build a community of music. From Open Mics to Club sets, share
          the love of music.
        </p>
      </section>
      <section className="about-details">
        <article>
          <i className="fas fa-guitar" />
          <h3> Are you an artist?</h3>
          <p>
            Create a profile and get discovered. Share your songs, post upcoming
            shows connect with fans.
          </p>
        </article>
        <article>
          <i className="fas fa-music" />
          <h3>Looking for Live Music?</h3>
          <p>
            Browse all the shows going on in your city. Discover and support
            local independent musicians.
          </p>
        </article>
        <article>
          <i className="fas fa-compact-disc" />
          <h3>Are you a Promoter?</h3>
          <p>
            Create a profile and post events for your venue. Browse local
            artists to book for future events.
          </p>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default About;
