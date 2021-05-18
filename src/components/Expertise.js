import React from 'react'

function Expertise() {
     return (
          <section className="row-fluid my_expertise" id="my_expertise">
  <aside className="span3 aside_el">
    <h2>My Expertise</h2>
    {/*<h5>skills that I'm<br /> proud of</h5>*/}
  </aside>
  <article className="span4 borderleft par_el">
    <p />
  </article>
  <div className="span5 skill_level">
    <h4>Time Management</h4>
    <div className="progressbar percent_90">
      <div className="progressbar-inner" />
    </div>
    <h4>Networking</h4>
    <div className="progressbar percent_95">
      <div className="progressbar-inner" />
    </div>
    <h4>Deadlines</h4>
    <div className="progressbar percent_100">
      <div className="progressbar-inner" />
    </div>
    <h4>Communication</h4>
    <div className="progressbar percent_95">
      <div className="progressbar-inner" />
    </div>
  </div>
</section>

     )
}

export default Expertise