import React from 'react';
import Baseball from './Baseball';
import Games from './Games';
import Music from './Music';

export default () => (
  <div className="column">
    <div className="subtitle is-3">Play</div>
    <div className="content">
      <p>Outside of work there's a few things I greatly enjoy:</p>
    </div>
    <Baseball />
    <Games />
    <Music />
  </div>
);
