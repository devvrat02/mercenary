import React, { Component } from "react";
import $ from "jquery";

let Gfname = "";
let Glname = "";
let Gadd = "";
let Gcontact = "";
let Gemail = "";
let Gcity = "";
let Gstate = "";
let Gpin = "";
let Gpro = "";
let Gexp = "";
let Gdescription = "";
let WorkPictures = [];
let Gfile = null;

class MemberDashProfile extends Component {
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
      pro: Gpro,
      exp: Gexp,
      desc: Gdescription,
      file: Gfile,
    };
  }

  componentDidMount() {
    const {
      fname,
      lname,
      add,
      contact,
      email,
      city,
      state,
      pin,
      pro,
      exp,
      desc,
    } = this.state;
    if (
      fname == "" &&
      lname == "" &&
      add == "" &&
      contact == "" &&
      email == "" &&
      city == "" &&
      state == "" &&
      pin == "" &&
      pro == "" &&
      exp == "" &&
      desc == ""
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
      pin != "",
      pro != "",
      exp != "",
      desc != "")
    ) {
      $("#fname").attr("readonly", true);
      $("#lname").attr("readonly", true);
      $("#address").attr("readonly", true);
      $("#contact").attr("readonly", true);
      $("#email").attr("readonly", true);
      $("#city").attr("readonly", true);
      $("#state").attr("readonly", true);
      $("#pin").attr("readonly", true);
      $("#pro").attr("readonly", true);
      $("#exp").attr("readonly", true);
      $("#desc").attr("readonly", true);
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

  handleProChange = (e) => {
    this.setState(
      {
        pro: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleExpChange = (e) => {
    this.setState(
      {
        exp: e.target.value,
      },
      () => {
        this.StateCheck();
      }
    );
  };

  handleDescription = (e) => {
    this.setState(
      {
        desc: e.target.value,
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

  WorkPicture = (e) => {
    const file = e.target.files[0];
    if (file != null) {
      if (!file.type.match(/.(jpeg|jpg|png)$/i)) {
        this.showNotification("File extension not allowed!");
      } else if (file.size > 5242880) {
        this.showNotification("File too big!");
      } else {
        WorkPictures.push(URL.createObjectURL(file));
        console.log(WorkPictures);
        // backend code
        this.showNotification("Picture Uploaded!");
      }
    }
  };

  StateCheck = () => {
    const {
      fname,
      lname,
      add,
      contact,
      email,
      city,
      state,
      pin,
      pro,
      exp,
      desc,
    } = this.state;
    if (
      fname == "" ||
      lname == "" ||
      add == "" ||
      contact == "" ||
      email == "" ||
      city == "" ||
      state == "" ||
      pin == "" ||
      pro == "" ||
      exp == "" ||
      desc == ""
    ) {
      $("#savebtn").attr("disabled", true);
    } else {
      $("#savebtn").attr("disabled", false);
    }
  };

  handleProfileSave = (e) => {
    e.preventDefault();
    const {
      fname,
      lname,
      add,
      contact,
      email,
      city,
      state,
      pin,
      file,
      pro,
      exp,
      desc,
    } = this.state;
    if (
      fname == "" ||
      lname == "" ||
      add == "" ||
      contact == "" ||
      email == "" ||
      city == "" ||
      state == "" ||
      pin == "" ||
      pro == "" ||
      exp == "" ||
      desc == ""
    ) {
      this.showNotification("Required fields can not be empty");
    } else if (
      !fname.match(/^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/) ||
      !lname.match(/^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/)
    ) {
      this.showNotification("Invalid name format");
    } else if (!email.match(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i)) {
      this.showNotification("Invalid email");
    } else if (!contact.match(/^[6-9]\d{9}$/)) {
      this.showNotification("Invalid contact number");
    } else {
      Gfname = fname;
      Glname = lname;
      Gadd = add;
      Gcontact = contact;
      Gemail = email;
      Gcity = city;
      Gstate = state;
      Gpin = pin;
      Gfile = file;
      Gpro = pro;
      Gexp = exp;
      this.showNotification("Profile Updated");
      $("#fname").attr("readonly", true);
      $("#lname").attr("readonly", true);
      $("#address").attr("readonly", true);
      $("#contact").attr("readonly", true);
      $("#email").attr("readonly", true);
      $("#city").attr("readonly", true);
      $("#state").attr("readonly", true);
      $("#pin").attr("readonly", true);
      $("#pro").attr("readonly", true);
      $("#exp").attr("readonly", true);
      $("#desc").attr("readonly", true);
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
    $("#pro").attr("readonly", false);
    $("#exp").attr("readonly", false);
    $("#desc").attr("readonly", false);
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
            <div className="d-flex flex-md-row flex-column chooseFilesDiv">
              <label
                htmlFor="profile-img"
                id="chooseFileLabel"
                className="chooseFile mx-1 text-center"
              >
                Choose Profile Pic
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
              <label
                htmlFor="profile-img1"
                id="chooseFileLabel"
                className="chooseFile mx-1 text-center"
              >
                Your Works
              </label>
              <input
                type="file"
                id="profile-img1"
                accept=".jpeg,.jpg,.png"
                onClick={(event) => {
                  event.target.value = null;
                }}
                onChange={this.WorkPicture}
              />
            </div>
          </div>
          <form className="mt-md-3 mt-5" onSubmit={this.handleProfileSave}>
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
            <div className="mt-3">
              <input
                type="text"
                className="profile_input_name"
                placeholder="Profession*"
                required
                id="pro"
                maxLength="25"
                autoComplete="off"
                value={this.state.pro}
                onChange={this.handleProChange}
              />
              <input
                type="number"
                className="profile_input_name"
                placeholder="Years of exp*"
                required
                maxLength="2"
                id="exp"
                autoComplete="off"
                value={this.state.exp}
                onChange={this.handleExpChange}
              />
            </div>
            <div className="mt-3">
              <textarea
                placeholder="Description*"
                id="desc"
                required
                value={this.state.desc}
                onChange={this.handleDescription}
                className="profile_input_textarea"
              />
            </div>
            <div className="mt-3 text-center">
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

export default MemberDashProfile;
