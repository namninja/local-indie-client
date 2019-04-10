import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <section className="statement">
        <h1>Find and Share Local Independent Music</h1>
        <p>
          This site was created to support local independent musicians and
          connect them with music lovers. Bands, solo acts, or DJ's can join and
          help build a community of music. From Open Mics to Club sets, share
          the love of music.
        </p>
      </section>
      <section className="about-details">
        <article>
          <h3>Are you an artist?</h3>
          <p>
            Create a profile and get discovered. Share your songs, post upcoming
            shows connect with fans.
          </p>
        </article>
        <article>
          <h3>Looking for Live Music?</h3>
          <p>
            Browse all the shows going on in your city. Discover and support
            local independent musicians.
          </p>
        </article>
        <article>
          <h3>Are you a Promoter?</h3>
          <p>
            Create a profile and post events for your venue. Browse local
            artists to book for future events.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
