import React from 'react';

export default () => (
  <div className="column">
    <div className="subtitle is-3">Work</div>
    <div className="content">
      <p>
        I currently work at <strong>Hayneedle</strong> in Omaha, NE. I write <strong>React and Node</strong>,
        with all the fun toys like <strong>Redux</strong> and am currently helping them kill off their old
        ColdFusion site.
      </p>
      <p>
        I've helped them convert entire pages over to React and consume their in-house REST APIs. These
        have ranged from simple CRUD pages like a user's favorites page to a more vital piece of the site,
        such as the <a href="https://www.hayneedle.com/cart/">cart page</a> and all ways a user to can add
        a product to their cart.
      </p>
    </div>
    <div className="subtitle is-4">Other gigs:</div>
    <div className="content">
      <div className="subtitle is-5">Cerner</div>
      <p>
        I worked at Cerner for a couple years prior to Hayneedle, fresh out of college. I was full stack there,
        writing <strong>Rails</strong> applications for various nursing workflows, powered by <strong>RESTful Java services</strong>.
      </p>
      <p>
        I also mentored new engineers going through the training program as I once did, teaching them how to succeed
        at the company. I taught them things such as unit testing best practices and how to attack code reviews, among other things.
      </p>
      <div className="subtitle is-5">Principal Financial Group</div>
      <p>
        During college I interned at Principal Financial Group in Des Moines, IA for a couple summers. I wrote
        mostly <strong>Java</strong> and vanilla <strong>JavaScript</strong> there.
      </p>
    </div>
  </div>
);
