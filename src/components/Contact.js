import React, { useState } from 'react'


function Contact() {
  const [data, setdata] = useState({name:'',email:'',phone:'',humenVerification:'',message:''})
     return (
          <footer className="row-fluid siteFooter">
          <div id="contact">
            <aside className="span3 aside_el">
              <h2>Contact</h2>
              {/*<h5>i'll get back with<br /> you ASAP</h5>*/}
            </aside>
            <div className="span9 borderleft">
              {/* Start Form */}
              <form id="contact-form" name="contact">
                <label htmlFor="contactName"><h4>Name:</h4></label>
                <input type="text" name="name" id="name" 
                  value={data.name}
                  onChange={(evt)=>{
                    setdata({...data,[evt.target.name] :evt.target.value})
                  console.log({data})
                  }}
                required />
                <label htmlFor="email"><h4>Email:</h4></label>
                <input type="text" name="email" 
                value={data.email}
                  onChange={(evt)=>{
                    setdata({...data,[evt.target.name] :evt.target.value})
                  console.log({data})
                  }} 
                  id="email" required />
                <label htmlFor="phone"><h4>Phone:</h4></label>
                <input type="text" name="phone" 
                value={data.phone}
                  onChange={(evt)=>{
                    setdata({...data,[evt.target.name] :evt.target.value})
                  console.log({data})
                  }} id="phone" />
                <label htmlFor="checking"><h4>Human Verification, what is the answer to 2 x 3:</h4></label>
                <input type="text" name="humenVerification" 
                value={data.humenVerification}
                  onChange={(evt)=>{
                    setdata({...data,[evt.target.name] :evt.target.value})
                  console.log({data})
                  }} 
                id="answer" required />
                <label htmlFor="commentsText"><h4>Message:</h4></label>
                <textarea name="message" id="message" required defaultValue={""} />
                <br />
                <input type="hidden" name="submitted" 
                value={data.message}
                  onChange={(evt)=>{
                    setdata({...data,[evt.target.name] :evt.target.value})
                  console.log({data})
                  }} 
                
                id="submitted" defaultValue="true" />
                <input type="hidden" name="blogid" id defaultValue={2626} />
                <input type="hidden" id="nonce_submit_contact" name="nonce_submit_contact" defaultValue="b0a3a9e803" /><input type="hidden" name="_wp_http_referer" defaultValue="/muhammadwaseem10/" />
                <div id="product_id" />
                <button type="submit" className="contact-button pull-right">Send Message</button>
              </form>
              <div id="success-contact">
                <span>
                  <p>Your message was sent successfully!</p>
                </span>
              </div>
              <div id="error-contact">
                <span>
                  <p>Something went wrong, try refreshing and submitting the form again.</p>
                </span>
              </div>
              {/* End Form */}
            </div>
          </div>
        </footer>
        
     )
}

export default Contact