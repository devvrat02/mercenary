import React, { Component } from "react";
import $ from "jquery";
import UserDashHome from "./UserDashHome";
import UserDashServices from "./UserDashServices";
import UserDashProfile from "./UserDashProfile";
import UserDashActivity from "./UserDashActivity";
import { Redirect } from "react-router";

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      selectedTab: "",
      isloggedout: false,
    };
  }

  componentDidMount() {
    this.OpenHomeTab();
  }

  handleSidebar = () => {
    if ($("#dash_sideBar").hasClass("dash_sideBar_show")) {
      $("#dash_sideBar")
        .removeClass("dash_sideBar_show")
        .addClass("dash_sideBar");
    } else {
      $("#dash_sideBar")
        .removeClass("dash_sideBar")
        .addClass("dash_sideBar_show");
    }
  };

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleLogout = (e) => {
    // logout code
    // redirect to home page
    localStorage.removeItem("id");
    this.setState({
      isloggedout: true,
    });
  };

  OpenHomeTab = () => {
    $("#tab_home").addClass("activeTab");
    $("#tab_services").removeClass("activeTab");
    $("#tab_activity").removeClass("activeTab");
    $("#tab_profile").removeClass("activeTab");
    this.setState({
      selectedTab: "home",
    });
  };

  OpenServicesTab = () => {
    $("#tab_home").removeClass("activeTab");
    $("#tab_services").addClass("activeTab");
    $("#tab_activity").removeClass("activeTab");
    $("#tab_profile").removeClass("activeTab");
    this.setState({
      selectedTab: "services",
    });
  };

  OpenActivityTab = () => {
    $("#tab_home").removeClass("activeTab");
    $("#tab_services").removeClass("activeTab");
    $("#tab_activity").addClass("activeTab");
    $("#tab_profile").removeClass("activeTab");
    this.setState({
      selectedTab: "activity",
    });
  };

  OpenProfileTab = () => {
    $("#tab_home").removeClass("activeTab");
    $("#tab_services").removeClass("activeTab");
    $("#tab_activity").removeClass("activeTab");
    $("#tab_profile").addClass("activeTab");
    this.setState({
      selectedTab: "profile",
    });
  };

  showSelectedTab = () => {
    if (this.state.selectedTab == "home") {
      return <UserDashHome />;
    } else if (this.state.selectedTab == "services") {
      return <UserDashServices />;
    } else if (this.state.selectedTab == "activity") {
      return <UserDashActivity />;
    } else if (this.state.selectedTab == "profile") {
      return <UserDashProfile />;
    }
  };

  render() {
    if (this.state.isloggedout) {
      return <Redirect to="/" />;
    }
    return (
      <div className="dashboard_mainDiv">
        {/* header */}
        <div className="dash_header px-md-4 px-2">
          <img
            src={process.env.PUBLIC_URL + "/assets/hamburger.svg"}
            className="hamburger"
            onClick={this.handleSidebar}
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/MercenaryLogo.svg"}
            className="main-logo"
          />
          <input
            type="text"
            className="dash_search"
            placeholder="Search here..."
            value={this.state.searchInput}
            onChange={(e) => this.handleSearch(e)}
          />
          <div
            className="DisplayFlex pointer"
            onClick={(e) => this.handleLogout(e)}
          >
            <h4 className="logoutText">Logout</h4>
            <img
              src={process.env.PUBLIC_URL + "/assets/logout.svg"}
              className="logoutSvg"
            />
          </div>
        </div>

        {/* sidebar */}
        <div className="dash_sideBar DisplayFlex" id="dash_sideBar">
          <table className="table sidebar_table borderless">
            <tbody>
              <tr onClick={this.OpenHomeTab}>
                <td id="tab_home">Home</td>
              </tr>
              <tr onClick={this.OpenServicesTab}>
                <td id="tab_services">Services</td>
              </tr>
              <tr onClick={this.OpenActivityTab}>
                <td id="tab_activity">Your Activity</td>
              </tr>
              <tr onClick={this.OpenProfileTab}>
                <td id="tab_profile">Profile</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* main white box */}
        <div className="white_box">{this.showSelectedTab()}</div>
      </div>
    );
  }
}

export default UserDashboard;
