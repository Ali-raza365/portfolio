import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import   './css/bootstrap-responsive.css'
import   './css/bootstrap.css'
import   './css/form-css.css'
import   './css/lightbox.css'
import   './css/magnific-popup.css'
import   './css/progressbar.css'
import   './css/styles.css'
import   './css/testimonial-slider.css'
function App() {
  return (
    <div class="wrapper">
        <div class="container">
          <Header/>
          <div class="container-fluid page">
          <AboutMe/>
          <Expertise/>
          <Experience/>
          <Contact/>
          <Footer/>
          </div>
        </div>
        </div>

  );
}

export default App;
