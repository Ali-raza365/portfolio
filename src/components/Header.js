import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
     return (
          <>
               <div class="upbtnwrapp">
                <div class="upbtn"><span class="icon-up-open-big"></span></div>
            </div>

            {/* <!-- NAVIGATION --> */}
            <nav class="site_nav" id="site_nav">
                <ul class="">
                    <li><AnchorLink href="#about_me">About</AnchorLink></li>
                    <li><AnchorLink href="#my_expertise">Expertise</AnchorLink></li>
                    <li><AnchorLink href="#experience">Experience</AnchorLink></li>
                    <li><AnchorLink href="#education">Education</AnchorLink></li>
                    <li><AnchorLink href="#contact">Contact</AnchorLink></li>
                </ul>
            </nav>
            {/* <!-- /site_nav --> */}
            <div id="aftermenuspace"></div>
            <header class="site_header centerise borderbtn">
                <div id="logoline">
                    <h1>MUHAMMAD WASEEM</h1>
                </div>
                <h2>MASTER STUDENT</h2>
                <h3>Welcome to my online resume &amp; portfolio. Have a look around and contact me with any questions!</h3>
            </header>
          </>
     )
}

export default Header
