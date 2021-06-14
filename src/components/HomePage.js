import React, { Component } from "react";
import BlobCarousel from "./BlobCarousel";
import Navbar from "./Navbar";
import ServiceCards from "./ServiceCards";
import Typer from "./Typer";
import TopReviews from "./TopReviews";
import About from "./About";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* front-page */}
        <div className="container-fluid shadow front-page pt-md-3 pt-2">
          <img
            src={process.env.PUBLIC_URL + "/assets/Blob_.svg"}
            alt="blob"
            className="bg-blob"
          />
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <div className="py-5 mt-3 pl-xl-4">
                {/* text-head */}
                <div className="typer-area">
                  <Typer
                    heading="We provide assistance in"
                    headingStyle="home-head-text  main-color"
                    dataText={[
                      "Plumbering.",
                      "Gardening.",
                      "Carpentering.",
                      "Painting.",
                      "Caretaking.",
                      "Maintenance.",
                      "🙳 many more...",
                    ]}
                  />
                </div>

                {/* status */}
                <div className="d-flex flex-md-row flex-column w-100 justify-content-between align-items-md-center pr-md-5 pr-0 mt-4">
                  <div className="text-md-center text-left">
                    <h1 className="m-0 front-page-data">10+</h1>
                    <p className="front-page-data-lead">States covered</p>
                  </div>
                  <div className="text-md-center text-left">
                    <h1 className="m-0 front-page-data">50+</h1>
                    <p className="front-page-data-lead">Members</p>
                  </div>
                  <div>
                    <h1 className="m-0 front-page-data-text">
                      And still growing...
                    </h1>
                  </div>
                </div>

                {/* buttons */}
                <div className="pt-4 mt-2 front-btns">
                  <Link
                    to="/get-access"
                    type="button"
                    className="btn bg-main px-lg-5 px-3 my-1 py-3 mr-4 text-white home-btns"
                  >
                    GET STARTED
                  </Link>
                  <Link
                    type="button"
                    className="link btn bg-main px-lg-5 px-3 my-1 py-3 text-white home-btns"
                    to="/page-under-construction"
                  >
                    DOWNLOAD APP
                  </Link>
                </div>
              </div>
            </div>
            {/* blob-img */}
            <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
              <div className="blob-area">
                <div className="h-100 d-flex blob-carousel-area d-absolute justify-content-center align-items-center">
                  <BlobCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container home-steps-container mt-xl-3 mt-lg-1 mt-md-5">
          <img
            src={process.env.PUBLIC_URL + "/assets/curve-arrow.png"}
            alt="arrow"
            className="home-steps-arrow"
          />
          <div className="row">
            <div className="col-lg-6 col-md-5 d-flex justify-content-center align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/Inkedmap.png"}
                alt="mobile"
                className="home-steps-img"
              />
            </div>
            <div className="col-lg-6 col-md-7 home-steps">
              <h1 className="home-steps-head main-color">
                Get all your services done with just few clicks...
              </h1>
              <ol className="home-steps-list">
                <li>Search for the service and select your location.</li>
                <li>Get the list of people near your location.</li>
                <li>Check their ratings and profile.</li>
                <li>Choose any.</li>
                <li>Get your work done!</li>
              </ol>
              <h1 className="home-steps-head main-color">Bonus points!</h1>
              <ol start="6" className="home-steps-list">
                <li>
                  Get <span className="main-color-yellow">SUPERCOINS</span>{" "}
                  after every booked service.
                </li>
                <li>Use those coins to avail offers in next service.</li>
                <li>
                  Moreover, you can even get{" "}
                  <span className="main-color-yellow">DISCOUNT CODES</span>{" "}
                  while booking any service.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-1" id="home-service-area">
          {/* service-page */}
          <div className="container home-service-area">
            <h1 className="home-title">#Services</h1>
            <div className="row home-service-page">
              <div className="p-0">
                <ServiceCards img="/assets/hammer.svg" title="Carpenter" />
              </div>
              <div className="p-0">
                <ServiceCards img="/assets/paint.svg" title="Painter" />
              </div>
              <div className="p-0">
                <ServiceCards img="/assets/plant.svg" title="Gardener" />
              </div>
              <div className="p-0">
                <ServiceCards img="/assets/cleaner.svg" title="Maid" />
              </div>
              <div className="p-0">
                <ServiceCards
                  img="/assets/electritian_icon.svg"
                  title="Electrician"
                />
              </div>
              <div className="p-0">
                <ServiceCards img="/assets/doctor_icon.svg" title="Doctor" />
              </div>
              <div className="p-0">
                <ServiceCards img="/assets/plumber_icon.svg" title="Plumber" />
              </div>
              <div className="p-0">
                <ServiceCards img="/assets/barbar_icon.svg" title="Barber" />
              </div>
              <div className="p-0">
                <ServiceCards
                  img="/assets/mechanic_icon.svg"
                  title="Mechanic"
                />
              </div>
              <div className="p-0">
                <ServiceCards
                  img="/assets/caretaker_icon.svg"
                  title="Caretaker"
                />
              </div>
              <div className="p-0">
                <ServiceCards img="/assets/massage_icon.svg" title="Massager" />
              </div>
            </div>
          </div>
          <TopReviews />
        </div>
        <div className="pt-1" id="about-us">
          <About />
        </div>
        <div className="mt-5 mx-0 footer">
          <div className="row m-0 footer-row">
            <div className="col-lg col-md-3 py-md-0 py-3">
              <h1 className="footer-head">Contact us</h1>
              <p className="footer-lead footer-links">contact@mercenary.com</p>
              <p className="footer-lead footer-links">(+91)89890-06727</p>
              <p className="footer-lead footer-links">(+91)79870-30482</p>
            </div>
            <div className="col-lg col-md-3 py-md-0 py-3">
              <h1 className="footer-head">Policies</h1>
              <Link to="/terms-and-conditions" className="footer-lead link">
                Terms & conditions
              </Link>{" "}
              <br />
              <Link to="/terms-and-conditions" className="footer-lead link">
                Private Policy
              </Link>
              <br />
              <Link to="/terms-and-conditions" className="footer-lead link">
                Cookie Policy
              </Link>
              <br />
              <Link to="/terms-and-conditions" className="footer-lead link">
                Refund Policy
              </Link>
            </div>
            <div className="col-lg col-md-3 py-md-0 py-3">
              <h1 className="footer-head">Support</h1>
              <p className="footer-lead">Community</p>
              <p className="footer-lead">FAQs</p>
              <p className="footer-lead">Help</p>
            </div>
            <div className="col-lg col-md-3 py-md-0 py-3">
              <h1 className="footer-head">Account</h1>
              <Link to="/get-access">
                <p className="footer-lead">Login</p>
              </Link>
              <Link to="/get-access">
                <p className="footer-lead">Register</p>
              </Link>
            </div>
            <div className="col-lg col-md-12 py-md-4 py-3 ">
              <h1 className="footer-head">Follow us on</h1>
              <div className="d-flex main-color-yellow">
                <i className="fab fa-instagram circle-icon mr-2"></i>
                <i className="fab fa-linkedin-in circle-icon mr-2"></i>
                <i className="fab fa-twitter circle-icon mr-2"></i>
                <i className="fab fa-facebook-f circle-icon"></i>
              </div>
            </div>
            <p className="footer-bottom">
              &copy; 2021 MERCENARY All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
