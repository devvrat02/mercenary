import React, { Component } from "react";
import $ from "jquery";
import app from "../firebase";
let db= app.firestore();
let tempml=localStorage.getItem("id");

let Gfname = "";
let Glname = "";
let Gadd = "";
let Gcontact = "";
let Gemail = tempml;
let Gcity = "";
let Gstate = "";
let Gpin = "";
let Gfile = null;

export class UserDashProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: Gfname,
      lname: Glname,
      add: Gadd,
      contact: Gcontact,
      email: Gemail,
      city: Gcity,
      state: Gstate,
      pin: Gpin,
      file: Gfile,
    };
  }

  componentDidMount() {
    
    const { fname, lname, add, contact, email, city, state, pin } = this.state;
    if (
      fname == "" &&
      lname == "" &&
      add == "" &&
      contact == "" &&
      email == "" &&
      city == "" &&
      state == "" &&
      pin == ""
    ) {
      $("#savebtn").attr("disabled", true);
    } else {
      $("#savebtn").attr("disabled", false);
    }

    if (
      (fname != "",
      lname != "",
      add != "",
      contact != "",
      email != "",
      city != "",
      state != "",
      pin != "")
    ) {
      $("#fname").attr("readonly", true);
      $("#lname").attr("readonly", true);
      $("#address").attr("readonly", true);
      $("#contact").attr("readonly", true);
      $("#email").attr("readonly", true);
      $("#city").attr("readonly", true);
      $("#state").attr("readonly", true);
      $("#pin").attr("readonly", true);
      $("#chooseFileLabel").hide();
      $("#savebtn").hide();
      $("#editbtn").show();
    }
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

  handleFname = (e) => {
    this.setState(
      {
        fname: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleLname = (e) => {
    this.setState(
      {
        lname: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleadd = (e) => {
    this.setState(
      {
        add: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleContact = (e) => {
    this.setState(
      {
        contact: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleEmail = (e) => {
    this.setState(
      {
        email: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleCity = (e) => {
    this.setState(
      {
        city: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleState = (e) => {
    this.setState(
      {
        state: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handlePin = (e) => {
    this.setState(
      {
        pin: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  loadPicture = (e) => {
    const file = e.target.files[0];
    if (file != null) {
      if (!file.type.match(/.(jpeg|jpg|png)$/i)) {
        this.showNotification("File extension not allowed!");
      } else if (file.size > 5242880) {
        this.showNotification("File too big!");
      } else {
        this.setState({
          file: URL.createObjectURL(file),
        });
      }
    }
  };

  StateCheck = () => {
    const { fname, lname, add, contact, email, city, state, pin } = this.state;
    if (
      fname == "" ||
      lname == "" ||
      add == "" ||
      contact == "" ||
      email == "" ||
      city == "" ||
      state == "" ||
      pin == ""
    ) {
      $("#savebtn").attr("disabled", true);
    } else {
      $("#savebtn").attr("disabled", false);
    }
  };

  handleProfileSave = (e) => {
    e.preventDefault();
    const { fname, lname, add, contact, email, city, state, pin, file } =
      this.state;
    if (
      fname == "" ||
      lname == "" ||
      add == "" ||
      contact == "" ||
      email == "" ||
      city == "" ||
      state == "" ||
      pin == ""
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
    } else if (!contact.match(/^[6-9]\d{9}$/)) {
      this.showNotification("Invalid contact number");
    } else {
      localStorage.setItem("username",Gfname+" "+Glname)
      Gfname = fname;
      Glname = lname;
      Gadd = add;
      Gcontact = contact;
      Gemail = email;
      Gcity = city;
      Gstate = state;
      Gpin = pin;
      Gfile = file;
      let temp=db.collection("users").doc(Gemail).update({
<<<<<<< HEAD
            name: Gfname+" "+Glname,
=======
               name: Gfname+" "+Glname,
>>>>>>> 8164b457685e066b6e225c0b4579850d9aa20fbf
            img: Gfile,
            city: Gcity,
            address:Gadd,
            contact:Gcontact,
            state:Gstate,
            pincode:Gpin,
          }).then(() => {
              console.log("Document successfully written!");
          })
          .catch((error) => {
              console.error("Error writing document: ", error);
          });



      $("#fname").attr("readonly", true);
      $("#lname").attr("readonly", true);
      $("#address").attr("readonly", true);
      $("#contact").attr("readonly", true);
      $("#email").attr("readonly", true);
      $("#city").attr("readonly", true);
      $("#state").attr("readonly", true);
      $("#pin").attr("readonly", true);
      $("#chooseFileLabel").hide();
      $("#savebtn").hide();
      $("#editbtn").show();
    }
  };

  handleProfileEdit = (e) => {
    e.preventDefault();
    $("#fname").attr("readonly", false);
    $("#lname").attr("readonly", false);
    $("#address").attr("readonly", false);
    $("#contact").attr("readonly", false);
    $("#email").attr("readonly", false);
    $("#city").attr("readonly", false);
    $("#state").attr("readonly", false);
    $("#pin").attr("readonly", false);
    $("#chooseFileLabel").show();
    $("#savebtn").show();
    $("#editbtn").hide();
  };

  render() {
    return (
      <div className="DisplayFlex w-100 h-100">
        <div id="notifContainer"></div>
        <div className="profile-div">
          <div className="profile-img-area">
            <div className="profile-img-circular-div">
              <img src={this.state.file} id="output" />
            </div>
            <label
              htmlFor="profile-img"
              id="chooseFileLabel"
              className="chooseFileUSer text-center"
            >
              Choose file
            </label>
            <input
              type="file"
              id="profile-img"
              accept=".jpeg,.jpg,.png"
              onClick={(event) => {
                event.target.value = null;
              }}
              onChange={this.loadPicture}
            />
          </div>
          <form className="mt-5" onSubmit={this.handleProfileSave}>
            <div className="display-md-flex display-block">
              <input
                type="text"
                required
                id="fname"
                placeholder="First Name*"
                className="profile_input_name"
                maxLength="15"
                autoComplete="off"
                value={this.state.fname}
                onChange={this.handleFname}
              />
              <input
                type="text"
                required
                id="lname"
                placeholder="Last Name*"
                className="profile_input_name"
                maxLength="15"
                autoComplete="off"
                value={this.state.lname}
                onChange={this.handleLname}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                required
                placeholder="Email*"
                id="email"
                autoComplete="off"
                className="profile_input_contact"
                maxLength="30"
                value={this.state.email}
                onChange={this.handleEmail}
              />
              <input
                type="tel"
                pattern="^[0-9]{3,45}$"
                id="contact"
                placeholder="Contact*"
                autoComplete="off"
                maxLength="10"
                minLength="10"
                className="profile_input_contact"
                value={this.state.contact}
                onChange={this.handleContact}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                required
                placeholder="Address*"
                id="address"
                autoComplete="off"
                className="profile_input_add"
                maxLength="50"
                value={this.state.add}
                onChange={this.handleadd}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                required
                placeholder="City"
                autoComplete="off"
                className="profile_input_city"
                id="city"
                maxLength="20"
                value={this.state.city}
                onChange={this.handleCity}
              />
              <input
                type="text"
                required
                placeholder="State"
                className="profile_input_city"
                autoComplete="off"
                id="state"
                value={this.state.state}
                maxLength="30"
                onChange={this.handleState}
              />
              <input
                type="text"
                required
                placeholder="Pin Code"
                maxLength="6"
                minLength="6"
                autoComplete="off"
                className="profile_input_city"
                id="pin"
                value={this.state.pin}
                onChange={this.handlePin}
              />
            </div>
            <div className="my-5 text-center">
              <button type="Save" id="savebtn" className="btn px-5 btn-profile">
                Save
              </button>
              <button
                type="Save"
                id="editbtn"
                className="btn px-5 btn-profile"
                onClick={this.handleProfileEdit}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserDashProfile;
