import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import $ from "jquery";
import { auth } from "../firebase"
import app from "../firebase";
let db= app.firestore();

class Access extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login_id: "",
      login_pw: "",
      reg_id: "",
      reg_pw: "",
      reg_Cpw: "",
      mem_login_id: "",
      mem_login_pw: "",
      isUserLoggedIn: false,
      isMemberLoggedIn: false,
    };
  }

  handleLoginId = (e) => {
    e.preventDefault();
    $(".err-msg").hide();
    $("#id-input").removeClass("err-input");
    this.setState({
      login_id: e.target.value,
    });
  };

  handleLoginPw = (e) => {
    e.preventDefault();
    $(".err-msg").hide();
    $("#pw-input").removeClass("err-input");
    this.setState({
      login_pw: e.target.value,
    });
  };

  handleRegId = (e) => {
    e.preventDefault();
    $(".err-msg").hide();
    $("#id-input-reg").removeClass("err-input");
    this.setState({
      reg_id: e.target.value,
    });
  };

  handleRegPw = (e) => {
    e.preventDefault();
    $(".err-msg").hide();
    $("#pw-input-reg").removeClass("err-input");
    this.setState({
      reg_pw: e.target.value,
    });
  };

  handleRegCPw = (e) => {
    e.preventDefault();
    $(".err-msg").hide();
    $("#Cpw-input-reg").removeClass("err-input");
    this.setState({
      reg_Cpw: e.target.value,
    });
  };

  handleMemLoginId = (e) => {
    e.preventDefault();
    $(".err-msg").hide();
    $("#mem-id-input").removeClass("err-input");
    this.setState({
      mem_login_id: e.target.value,
    });
  };

  handleMemLoginpw = (e) => {
    e.preventDefault();
    $(".err-msg").hide();
    $("#mem-pw-input").removeClass("err-input");
    this.setState({
      mem_login_pw: e.target.value,
    });
  };

  OpenUserRegistration = () => {
    $(".login-right").hide();
    $(".mem-login-right").hide();
    $(".access-loading").css("display", "flex").delay(2000).fadeOut();
    $(".register-right").show();
  };

  OpenUserLogin = () => {
    $(".register-right").hide();
    $(".mem-login-right").hide();
    $(".access-loading").css("display", "flex").delay(2000).fadeOut();
    $(".login-right").show();
  };

  OpenMemberLogin = () => {
    $(".register-right").hide();
    $(".login-right").hide();
    $(".access-loading").css("display", "flex").delay(2000).fadeOut();
    $(".mem-login-right").show();
  };

  handleUserLogin = (e) => {
    e.preventDefault();
    if (this.state.login_id == "") {
      $("#id-input").addClass("err-input");
      $("#login-err").show();
      $("#login-err").html("Required fields cannot be empty!");
    } else if (this.state.login_pw == "") {
      $("#pw-input").addClass("err-input");
      $("#login-err").show();
      $("#login-err").html("Required fields cannot be empty!");
    } else if (
      !this.state.login_id.match(
        /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
      ) &&
      !this.state.login_id.match(/^[6-9]\d{9}$/)
    ) {
      $("#id-input").addClass("err-input");
      $("#login-err").show();
      $("#login-err").html("Invalid Format!!");
    } else {
      // login backend
   let authref= auth.signInWithEmailAndPassword(this.state.login_id,this.state.login_pw)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("user login: ",this.state.login_id)
    localStorage.setItem("id", this.state.login_id);
    
var docRef = db.collection("users").doc(this.state.login_id);

var getOptions = {
    source: 'server'
};

let no=docRef.get(getOptions).then((doc) => {
    console.log("Server document data:", doc.data());
    let data=doc.data();
    console.log(data.name);
    let temp ={};
   localStorage.setItem("username",data.name);
}).catch((error) => {
    console.log("Error getting cached document:", error);
});
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error: ",this.state.login_id)
  });
      this.setState(
        {
          isUserLoggedIn: true,
        },
        () => {
          $("#login-err").show();
          $("#login-err").html("Logged in!");
        }
      );
    }
  };

  handleMemberLogin = (e) => {
    e.preventDefault();
    if (this.state.mem_login_id == "") {
      $("#mem-id-input").addClass("err-input");
      $("#mem-login-err").show();
      $("#mem-login-err").html("Required fields cannot be empty!");
    } else if (this.state.mem_login_pw == "") {
      $("#mem-pw-input").addClass("err-input");
      $("#mem-login-err").show();
      $("#mem-login-err").html("Required fields cannot be empty!");
    } else if (
      !this.state.mem_login_id.match(
        /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
      ) &&
      !this.state.mem_login_id.match(/^[6-9]\d{9}$/)
    ) {
      $("#mem-id-input").addClass("err-input");
      $("#mem-login-err").show();
      $("#mem-login-err").html("Invalid Format!!");
    } else {
      // login backend
      let authref=auth.signInWithEmailAndPassword(this.state.mem_login_id, this.state.mem_login_pw)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("user login: ",this.state.mem_login_id)
    localStorage.setItem("id", this.state.mem_login_id);
        
var docRef = db.collection("users").doc(this.state.mem_login_id);

var getOptions = {
    source: 'server'
};

let no=docRef.get(getOptions).then((doc) => {
    console.log("Server document data:", doc.data());
    let data=doc.data();
    console.log(data.name);
    let temp ={};
   localStorage.setItem("username",data.name);
}).catch((error) => {
    console.log("Error getting cached document:", error);
});

   }).then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
// ..
    // ...
 
      this.setState(
        {
          isMemberLoggedIn: true,
        },
        () => {
          $("#mem-login-err").show();
          $("#mem-login-err").html("Logged in!");
        }
      );
    }
  };

  handleUserRegistration = (e) => {
    e.preventDefault();
    if (this.state.reg_id == "") {
      $("#id-input-reg").addClass("err-input");
      $("#err-msg-reg").show();
      $("#err-msg-reg").html("Required fields cannot be empty!");
    } else if (this.state.reg_pw == "") {
      $("#pw-input-reg").addClass("err-input");
      $("#err-msg-reg").show();
      $("#err-msg-reg").html("Required fields cannot be empty!");
    } else if (
      !this.state.reg_id.match(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i) &&
      !this.state.reg_id.match(/^[6-9]\d{9}$/)
    ) {
      $("#id-input-reg").addClass("err-input");
      $("#err-msg-reg").show();
      $("#err-msg-reg").html("Invalid Format!!");
    } else if (this.state.reg_pw.length < 8 || this.state.reg_pw.length > 21) {
      $("#pw-input-reg").addClass("err-input");
      $("#err-msg-reg").show();
      $("#err-msg-reg").html("Password must be between 8 to 21 letters!");
    } else if (this.state.reg_pw != this.state.reg_Cpw) {
      $("#Cpw-input-reg").addClass("err-input");
      $("#err-msg-reg").show();
      $("#err-msg-reg").html("Confirm password should match your password!");
    } else {
      // registration backend code
      //createUserWithEmailAndPassword(email, password)
      let authref =auth.createUserWithEmailAndPassword(this.state.reg_id, this.state.reg_pw)
  .then((userCredential) => {
    // Signed in 
    let temp= db.collection("users").doc(this.state.reg_id).set({
            id: this.state.reg_id ,
          email:this.state.reg_id
   })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
   
    // ..
  });
      $("#err-msg-reg").show();
      $("#err-msg-reg").html("Registered! You'll be redirected to login page");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  render() {
    if (this.state.isUserLoggedIn) {
      return <Redirect to="/user/dashboard" />;
    } else if (this.state.isMemberLoggedIn) {
      return <Redirect to="/member/dashboard" />;
    }
    return (
      <React.Fragment>
        <div className="container-fluid access-container">
          <div className="access-box">
            <div className="row h-100">
              {/* left side */}
              <div className="col-lg-5 col-md-4 col-12 m-0 login-left">
                <img
                  src={process.env.PUBLIC_URL + "/assets/vector.svg"}
                  className="login-left-img"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/MercenaryLogo.svg"}
                  className="main-logo"
                />
              </div>
              {/* right side */}
              <div className="col-lg-7 col-md-8 col-12 px-0 m-0 bg-white h-100 d-xl-block d-md-flex d-block justify-content-center align-items-center">
                <div className="access-right-side">
                  {/* loading div */}
                  <div className="access-loading">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/LoadingLogo.svg"}
                    />
                  </div>
                  {/* login */}
                  <div className="login-right">
                    <h1 className="login-head">Login Here</h1>
                    <p
                      className="members-access-link"
                      onClick={this.OpenMemberLogin}
                    >
                      If you're a professional, click here to login!
                    </p>
                    <form className="login-right-form">
                      <input
                        type="text"
                        id="id-input"
                        autoComplete="off"
                        placeholder="Email or mobile"
                        required
                        value={this.state.login_id}
                        onChange={this.handleLoginId}
                      />
                      <input
                        type="password"
                        id="pw-input"
                        autoComplete="off"
                        placeholder="Password"
                        required
                        value={this.state.login_pw}
                        onChange={this.handleLoginPw}
                      />
                      <div className="mt-3 err-msg-div">
                        <p className="err-msg" id="login-err">
                          dummy error message
                        </p>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="access-form-btn px-5 py-3"
                          onClick={(e) => this.handleUserLogin(e)}
                        >
                          Log in
                        </button>
                      </div>
                      <p className="mt-3 accessTravel">
                        Don't have an account?{" "}
                        <span
                          className="main-color-yellow pointer"
                          onClick={this.OpenUserRegistration}
                        >
                          <u>Register here</u>
                        </span>
                      </p>
                    </form>
                  </div>

                  {/* Members login */}
                  <div className="mem-login-right">
                    <h1 className="login-head">Members Login</h1>
                    <p
                      className="members-access-link"
                      onClick={this.OpenUserLogin}
                    >
                      Back to User's Login!
                    </p>
                    <form className="login-right-form">
                      <input
                        type="text"
                        id="mem-id-input"
                        autoComplete="off"
                        required
                        placeholder="Email or mobile"
                        value={this.state.mem_login_id}
                        onChange={this.handleMemLoginId}
                      />
                      <input
                        type="password"
                        id="mem-pw-input"
                        autoComplete="off"
                        required
                        placeholder="Password"
                        value={this.state.mem_login_pw}
                        onChange={this.handleMemLoginpw}
                      />
                      <div className="mt-3 err-msg-div">
                        <p className="err-msg" id="mem-login-err">
                          dummy error message
                        </p>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="access-form-btn px-5 py-3"
                          onClick={(e) => this.handleMemberLogin(e)}
                        >
                          Log in
                        </button>
                      </div>
                      <p className="mt-3 accessTravel">
                        Want to register as a member?{" "}
                        <Link
                          to="/member/registration"
                          className="main-color-yellow pointer"
                        >
                          <u>Register here</u>
                        </Link>
                      </p>
                    </form>
                  </div>

                  {/* register */}
                  <div className="register-right">
                    <h1 className="login-head">Register Here</h1>
                    <Link to="/member/registration">
                      <p className="members-access-link">
                        If you're a professional, click here to register!
                      </p>
                    </Link>
                    <form className="register-right-form">
                      <input
                        type="text"
                        id="id-input-reg"
                        placeholder="Email or mobile"
                        autoComplete="off"
                        required
                        value={this.state.reg_id}
                        onChange={this.handleRegId}
                      />
                      <input
                        type="password"
                        id="pw-input-reg"
                        placeholder="Password"
                        required
                        autoComplete="off"
                        value={this.state.reg_pw}
                        onChange={this.handleRegPw}
                      />
                      <input
                        type="password"
                        id="Cpw-input-reg"
                        placeholder="Cofirm Password"
                        autoComplete="off"
                        required
                        value={this.state.reg_Cpw}
                        onChange={this.handleRegCPw}
                      />
                      <div className="mt-3 err-msg-div">
                        <p className="err-msg" id="err-msg-reg">
                          dummy error message
                        </p>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="access-form-btn px-5 py-3"
                          onClick={(e) => this.handleUserRegistration(e)}
                        >
                          Register
                        </button>
                      </div>
                      <p className="mt-3 accessTravel">
                        Already Registered?{" "}
                        <span
                          className="main-color-yellow pointer"
                          onClick={this.OpenUserLogin}
                        >
                          <u>Login here</u>
                        </span>
                      </p>
                    </form>
                  </div>
                  <div className="login-footer">
                    <hr />
                    <p className="login-footer-text">
                      &copy; 2021 MERCENARY All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Access;
