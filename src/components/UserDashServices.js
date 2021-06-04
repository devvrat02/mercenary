import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserDashServices extends Component {
  render() {
    return (
      <div className="p-3">
        <h1 className="dash_main_div_head">Choose from available services</h1>
        <div
          className="container-fluid dash_service_container"
          id="dash_scroll"
        >
          <div className="dash_main_div">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/doctors">
                  <div className="card dash_service_card mb-4">
                    <h1>Doctor</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/plumbers">
                  <div className="card dash_service_card mb-4">
                    <h1>Plumber</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/carpenters">
                  <div className="card dash_service_card mb-4">
                    <h1>Carpenter</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/electricians">
                  <div className="card dash_service_card mb-4">
                    <h1>Electrician</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/barbers">
                  <div className="card dash_service_card mb-4">
                    <h1>Barber</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/painters">
                  <div className="card dash_service_card mb-4">
                    <h1>Painter</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/gardeners">
                  <div className="card dash_service_card mb-4">
                    <h1>Gardener</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/mechanics">
                  <div className="card dash_service_card mb-4">
                    <h1>Mechanic</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/caretakers">
                  <div className="card dash_service_card mb-4">
                    <h1>Caretaker</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/maids">
                  <div className="card dash_service_card mb-4">
                    <h1>Maid</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <Link to="/user/dashboard/services/massagers">
                  <div className="card dash_service_card mb-4">
                    <h1>Massager</h1>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/services_sideicon.svg"
                      }
                      alt="service"
                      className="dash_service_cardImg"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashServices;
