import React from 'react';

export default () => (
  <div className="container has-background-light header section">
    <div className="columns">
      <div className="column">
        <div className="title">Hey there.</div>
        <div className="subtitle is-4">I'm Andrew. I write code. Welcome to my site.</div>
      </div>
      <div className="column">
        <img
          alt="me"
          className="b-lazy"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src={`https://avatars2.githubusercontent.com/u/6600392?s=200&v=4`}
        />
      </div>
    </div>
  </div>
);
