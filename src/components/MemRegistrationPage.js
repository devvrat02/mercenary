import React, { Component } from "react";
import $ from "jquery";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../firebase"
import app from "../firebase";
let db=app.firestore();
class MemRegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      contact: "",
      address: "",
      city: "",
      state: "",
      pin: "",
      pro: "",
      exp: "",
      checked: false,
      isRegistered: false,
    };
  }

  showNotification = (message) => {
    const notifContainer = document.getElementById("notifContainer");
    const notif = document.createElement("div");
    notif.classList.add("notifBox");
    notif.innerText = message;
    notifContainer.appendChild(notif);
    setTimeout(() => $(notif).addClass("pop"), 10);
    setTimeout(() => $(notif).removeClass("pop"), 3000);
  };

  handleFnameChange = (e) => {
    this.setState({
      fname: e.target.value,
    });
  };

  handleLnameChange = (e) => {
    this.setState({
      lname: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleContactChange = (e) => {
    this.setState({
      contact: e.target.value,
    });
  };

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleStateChange = (e) => {
    $("#select").attr("disabled", true);
    this.setState({
      state: e.target.value,
    });
  };

  handlePinChange = (e) => {
    this.setState({
      pin: e.target.value,
    });
  };

  handleProChange = (e) => {
    this.setState({
      pro: e.target.value,
    });
  };

  handleExpChange = (e) => {
    this.setState({
      exp: e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  RegisterMember = (e) => {
    e.preventDefault();
    const {
      fname,
      lname,
      address,
      contact,
      email,
      city,
      state,
      pin,
      pro,
      exp,
    } = this.state;
    if (
      fname == "" ||
      lname == "" ||
      address == "" ||
      contact == "" ||
      email == "" ||
      city == "" ||
      state == "" ||
      pin == "" ||
      pro == "" ||
      exp == ""
    ) {
      this.showNotification("Required fields can not be empty");
    } else if (
      !fname.match(/^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/) ||
      !lname.match(/^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/)
    ) {
      this.showNotification("Invalid name format");
    } else if (
      !this.state.email.match(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i)
    ) {
      this.showNotification("Invalid email");
    } else if (!contact.match(/^[6-9]\d{9}$/) || contact.length != 10) {
      this.showNotification("Invalid contact number");
    } else if (!this.state.checked) {
      this.showNotification("Please Check the terms before Registering");
    } else {
      // registration code
      let authref =auth.createUserWithEmailAndPassword(this.state.email,"1234")
  .then((userCredential) => {
    // Signed in 
    let temp= db.collection("member").doc(this.state.email).set({
            id: this.state.email,
          email:this.state.email,
          fname:this.state.fname,
          lname:this.state.lname,
          address:this.state.address,
          contact:this.state.contact,
          city:this.state.city,
          state:this.state.state,
          pin:this.state.pin,
          pro:this.state.pro,
          exp:this.state.exp,

   })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        temp= db.collection(this.state.pro).doc(this.state.email).set({
                      id: this.state.email,
                      fname:this.state.fname,
                      lname:this.state.lname,
                      name: "Mr."+this.state.fname+" "+this.state.lname,
                      img: "",
                      city: this.state.city,
                      rating: 4,
                      about:
                      "Im elwknv uwen iuoejwoci joweij oiwdjsoj Im elwknv uwen iuoejwoci joweij oiwdjsoj",
                      address:this.state.address,
                      contact:this.state.contact,
                      email:this.state.email,
                      state:"M.P",
                      pincode:this.state.pin,
                      exp:this.state.exp,

 })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
    // ..
  });




      this.setState({
        isRegistered: true,
      });
    }
  };

  render() {
    if (this.state.isRegistered) {
      return <Redirect to="/member/dashboard" />;
    }
    return (
      <div className="mem_reg_page">
        <div id="notifContainer"></div>
        <div className="mem_reg_page_header">
          <img
            src={process.env.PUBLIC_URL + "/assets/MercenaryLogo.svg"}
            className="main-logo"
          />
          <h1 className="mem_reg_page_head">
            <i className="fas fa-quote-left"></i>{" "}
            <span>Grow your business with us</span>
          </h1>
        </div>
        <div className="mem_reg_page_body">
          <div className="mem_reg_page_box DisplayFlex">
            <form className="container" onSubmit={this.RegisterMember}>
              <div className="display-md-flex display-block">
                <input
                  type="text"
                  required
                  id="fname"
                  placeholder="First Name*"
                  className="profile_input_name text-muted"
                  maxLength="15"
                  autoComplete="off"
                  value={this.state.fname}
                  onChange={this.handleFnameChange}
                />
                <input
                  type="text"
                  required
                  id="lname"
                  placeholder="Last Name*"
                  className="profile_input_name text-muted"
                  maxLength="15"
                  autoComplete="off"
                  value={this.state.lname}
                  onChange={this.handleLnameChange}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  required
                  placeholder="Email*"
                  id="email"
                  autoComplete="off"
                  className="profile_input_contact text-muted"
                  maxLength="30"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
                <input
                  type="tel"
                  pattern="^[0-9]{3,45}$"
                  id="contact"
                  placeholder="Contact*"
                  autoComplete="off"
                  maxLength="10"
                  minLength="10"
                  className="profile_input_contact text-muted"
                  value={this.state.contact}
                  onChange={this.handleContactChange}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  required
                  placeholder="Address*"
                  id="address"
                  autoComplete="off"
                  className="profile_input_add text-muted"
                  maxLength="50"
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  required
                  placeholder="City*"
                  autoComplete="off"
                  className="profile_input_city text-muted"
                  id="city"
                  maxLength="20"
                  value={this.state.city}
                  onChange={this.handleCityChange}
                />
                <select
                  className="profile_input_city text-muted"
                  required
                  value={this.state.state}
                  onChange={this.handleStateChange}
                >
                  <option value="select" id="select">
                    State*
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <input
                  type="text"
                  required
                  placeholder="Pin Code*"
                  maxLength="6"
                  minLength="6"
                  autoComplete="off"
                  className="profile_input_city text-muted"
                  id="pin"
                  value={this.state.pin}
                  onChange={this.handlePinChange}
                />
                <div className="mt-3">
                  <input
                    type="text"
                    className="profile_input_name text-muted"
                    placeholder="Profession*"
                    required
                    maxLength="25"
                    autoComplete="off"
                    value={this.state.pro}
                    onChange={this.handleProChange}
                  />
                  <input
                    type="number"
                    className="profile_input_name text-muted"
                    placeholder="Years of exp*"
                    required
                    maxLength="2"
                    autoComplete="off"
                    value={this.state.exp}
                    onChange={this.handleExpChange}
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <input
                  type="checkbox"
                  required
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />{" "}
                <span className="text-muted">
                  I agree all terms and conditions, read them{" "}
                </span>
                <span className="text-warning">
                  <Link to="/terms-and-conditions">here</Link>
                </span>
              </div>
              <div className="mt-3 text-center">
                <button
                  type="Register"
                  id="registrationbtn"
                  className="btn px-5 btn-registration"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MemRegistrationPage;
