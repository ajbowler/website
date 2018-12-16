import React from 'react'

export default () => (
  <React.Fragment>
    <div className="subtitle">Baseball</div>
    <div className="content">
      <p>
        I'm a huge Chicago Cubs fan. I try to catch at least one game a year and I always make sure
        to catch the minor league Omaha Storm Chasers as often I can.
      </p>
      <p>
        <a href="https://github.com/MLB-LED-Scoreboard/mlb-led-scoreboard">
          I created an LED scoreboard that tracks live game data, powered by a Raspberry Pi.
        </a>
      </p>
      <p>
        It's fully configurable, down to your favorite teams, rotating through a list of them, setting different colors, and a bunch
        of other bells and whistles.
      </p>
      <img
        alt="scoreboard"
        className="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="https://raw.githubusercontent.com/MLB-LED-Scoreboard/mlb-led-scoreboard/master/img/cubs-indians-demo.jpg"
      />
    </div>
  </React.Fragment>
);
