import React from 'react';
import EverythingElse from "./Everything-Else";
import Play from "./Play";
import Work from "./Work";

export default () => (
  <div className="section">
    <div className="title">A little about me...</div>
    <div className="columns">
      <Work />
      <Play />
      <EverythingElse />
    </div>
  </div>
);
