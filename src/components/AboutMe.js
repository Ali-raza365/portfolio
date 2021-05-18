import React from 'react'

function AboutMe() {
     return (
          <div>
          <section className="row-fluid about_me" id="about_me">
            <aside className="span3 aside_el">
              <h2>About Me</h2>
              {/*<h5>professional profile<br /> and contact info</h5>*/}
            </aside>
            <article className="span6 borderleft par_el">
              <span className="circle"><img style={{float: 'left', height: 84, width: 84}} src="https://twowayresume.com/muhammadwaseem10/wp-content/uploads/sites/2626/2021/03/my-pic-1-150x150.jpg" alt /></span>
              <p>
              </p><p><strong>Thanks for checking out my site!</strong></p>
              <p>Wanted to take this page to provide a little background on myself as well as share some non-work accomplishments and awards. As a person, I am an enthusiastic individual who is highly personable.&nbsp; Self-driven, I am always looking
                for my next project and eager to begin something new.&nbsp; I consider myself a problem solver, being able to think outside the box to provide a solution that may not be obvious to others.&nbsp; Whether working in teams or independently,
                I have had success in managing projects to complete tasks efficiently and effectively.</p>
              <p />
            </article>
            <div className="span3 cont_info">
              <div className="soc">
                <ul>
                </ul>
              </div>
              <br />
              <div className="info">
                <ul>
                  <div className="contact-header">Location</div>
                  <div className="contact-content">Pakistan</div>
                  <div className="contact-header">Contact</div>
                  <div className="contact-content"><a href="mailto:waseempk.csc@yahoo.com">waseempk.csc@yahoo.com</a><br /> +923156242892</div>
                </ul>
              </div>
            </div>
          </section>
        </div>
        
     )
}

export default AboutMe