import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Banner section Start */}
      <section className='banner'>
        <div className='container'>
          <div className='row banner-section d-flex pt-5'>
            <div className='col-12 col-md-6 mt-5 pt-5'>
              <h1 className='text-white'>We Create Applications</h1>
              <h1 className='text-white'>with Excellent Technology</h1>
              <p className='text-white mb-4 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown p</p>
              <button type="button" className="btn bg-white p-3">Download Now <img className='downloadbtn' src='download.png' alt='img...' /></button>
              <small className='text-white p-3'>Explore More <img className='arrowright' src='arrowright.png' alt='img...' /></small>
            </div>
            <div className='col-12 col-md-6 mt-5'>
              <img className='bannermobile img-fluid' src='bannermobile.png' alt='img...' />
            </div>
          </div>
        </div>
      </section>
      {/* Banner section End */}

      <section className='services'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-12'>
              <h1 className='mb-0 mt-4'>We provide various kind of</h1>
              <h1>service for you</h1>
            </div>
          </div>
          <div className='row justify-content-center text-center'>
            <div className='col-12'>
              <p className='textlight mb-0 mt-2'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
              <p className='textlight'>Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</p>
            </div>
          </div>
          

          <div className='row justify-content-center text-center mt-5'>
            <div className='col shadow p-3   mb-5 mr-5 rounded'>
              <img className='services-img mt-3 mb-3' src='smartphone.svg' alt='img..'></img>
              <h3>Unique App Ui</h3>
              <p className='textlight'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page</p>
            </div>
            <div className='col shadow p-3 mb-5 rounded ml-5 mr-5'>
              <img className='services-img mt-3 mb-3' src='Dashboard.svg' alt='img..'></img>
              <h3>Unique App Ui</h3>
              <p className='textlight'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page</p>
            </div>
            <div className='col shadow p-3 mb-5 rounded ml-5'>
              <img className='services-img mt-3 mb-3' src='layout.svg' alt='img..'></img>
              <h3>Unique App Ui</h3>
              <p className='mb-3 textlight'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page</p>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-12'>
              <h1 className='mb-0 mt-4'>We provide various kind of</h1>
              <h1>service for you</h1>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-12'>
              <p className='textlight mb-0 mt-2'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
              <p className='textlight'>Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</p>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-12 col-md-4'>
              <img className='bigImg img-fluid' src='iPhone.png' alt='img...' />
            </div>
            <div className='col-12 col-md-8 m-auto'>
              <h3 className=''>Built The App That</h3>
              <h3 className=''>Everyone Love.</h3>
              <p className='textlight '>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters</p>
              <p className='mt-3 textlight '>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using </p>
              <button type="button" className="btn btn-outline-primary getmoreBtn ">Get More <img className='arrowi' src='arrow-r.svg' alt='img...' /></button>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-12'>
              <h1 className='mb-0 mt-4'>We Completed 1200+ Projects Yearly</h1>
              <h1>Successfully & Counting</h1>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-12'>
              <p className='mb-0 mt-2'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
              <p className='mb-5'>Content Of A Page When Looking At Its Layout. The</p>
            </div>
          </div>
          <div className='row mb-5'>
            <div className='col-12 col-md-3 pt-3 d-flex project-c align-items-center'>
              <img className='i-m' src='check_circle.svg' alt='img...' />
              <div className='align-self-center'>
                <p className='mb-0 numberText'>100+</p>
                <p className='mb-0 projectP'>Projects Completed</p>
              </div>
            </div>
            <div className='col-12 col-md-3 pt-3 d-flex project-c align-items-center'>
              <img className='i-m' src='assignment.svg' alt='img...' />
              <div className='align-self-center'>
                <p className='mb-0 numberText'>100+</p>
                <p className='mb-0 projectP'>Projects Completed</p>
              </div>
            </div>
            <div className='col-12 col-md-3 pt-3 d-flex project-c align-items-center'>
              <img className='i-m' src='supervised.svg' alt='img...' />
              <div className='align-self-center'>
                <p className='mb-0 numberText'>100+</p>
                <p className='mb-0 projectP'>Projects Completed</p>
              </div>
            </div>
            <div className='col-12 col-md-3 pt-3 d-flex project-c align-items-center'>
              <img className='i-m' src='supervised.svg' alt='img...' />
              <div className='align-self-center'>
                <p className='mb-0 numberText'>100+</p>
                <p className='mb-0 projectP'>Projects Completed</p>
              </div>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-12'>
              <h1 className='mb-0 mt-4'>Our portfolio</h1>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-12'>
              <p className='mb-0 mt-3'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
              <p className=''>Content Of A Page When Looking At Its Layout.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-3'>
              <img className='bigImg1 img-fluid' src='iPhone.png' alt='img...' />
            </div>
            <div className='col-12 col-md-3'>
              <img className='bigImg1 img-fluid' src='iPhone-Light.png' alt='img...' />
            </div>
            <div className='col-12 col-md-3'>
              <img className='bigImg1 img-fluid' src='iPhoneX1.png' alt='img...' />
            </div>
            <div className='col-12 col-md-3'>
              <img className='bigImg1 img-fluid' src='iPhoneX1.png' alt='img...' />
            </div>
          </div>
        </div>
      </section>

      {/* Footer section start */}
      <section className='footer'>
        <div className='container pt-5'>
          <div className='row pt-4'>
            <div className='col-12 col-md-3'>
              <img className='pixbey' src='pixbey.png' alt='img...' />
              <div className='mt-3'>
                <img className="social-img mr-2 border border-secondary p-2 rounded-circle" src='facebook.svg' alt='img...' />
                <img className="social-img mr-2 border border-secondary p-2 rounded-circle" src='twitter.svg' alt='img...' />
                <img className="social-img mr-2 border border-secondary p-2 rounded-circle" src='pintrest.svg' alt='img...' />
                <img className="social-img mr-2 border border-secondary p-2 rounded-circle" src='linkedin.svg' alt='img...' />
              </div>
            </div>
            <div className='col-12 col-md-3'>
              <ul className='unstyled'>
                <li className='font-weight-bold mb-4'>Links</li>
                <li className="textGray">Home</li>
                <li className="textGray">Pricing</li>
                <li className="textGray">About</li>
                <li className="textGray">Download</li>
                <li className="textGray">Services</li>
              </ul>
            </div>
            <div className='col-12 col-md-3'>
              <ul className='unstyled'>
                <li className='font-weight-bold mb-4'>Support</li>
                <li className="textGray">FAQ</li>
                <li className="textGray">How it</li>
                <li className="textGray">Features</li>
                <li className="textGray">Contact</li>
                <li className="textGray">Reporting</li>
              </ul>
            </div>
            <div className='col-12 col-md-3'>
              <ul className='unstyled'>
                <li className='font-weight-bold mb-4'>Contact Us</li>
                <li className="textGray">+880 12345678</li>
                <li className="textGray">youremail@gmail.com</li>
                <li className="textGray">Rangpur City</li>
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-between pb-3 pt-2'>
            <span className='bottom-text'>Copyright & Design By @Khalid</span>
            <span className='bottom-text'>Terms of use | Privacy Policy</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
