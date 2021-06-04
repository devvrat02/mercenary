import React, { Component } from "react";
var today = new Date();
const Currmonth = today.getMonth();
const CurrDay = today.getDay();
const CurrDate = today.getDate();
const CurrTime = today.getHours();

let Name = "User Name";
let NumOfUsers = 0;
let SupportStaff = 0;
let WebActivity = 63;
let ServicesUsed = 0;
let SuperCoins = 10;
let Rewards = 2;
let Headlines =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

class UserDashHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: Name,
      NumOfUsers: NumOfUsers,
      SupportStaff: SupportStaff,
      WebActivity: WebActivity,
      ServicesUsed: ServicesUsed,
      SuperCoins: SuperCoins,
      Rewards: Rewards,
      Headlines: Headlines,
      TimelyWish: "",
      Months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  }

  componentDidMount() {
    if (CurrTime >= 0 && CurrTime <= 11) {
      this.setState({
        TimelyWish: "Good Morning",
      });
    } else if (CurrTime >= 12 && CurrTime <= 18) {
      this.setState({
        TimelyWish: "Good Afternoon",
      });
    } else if (CurrTime >= 18 && CurrTime <= 24) {
      this.setState({
        TimelyWish: "Good Evening",
      });
    }
  }

  addLeadingZeros = (num) => {
    var s = num;
    if (s < 10) {
      return `0${s}`;
    } else {
      return s;
    }
  };

  render() {
    return (
      <div className="container-fluid userdashhome">
        <div className="p-2 mt-3">
          <marquee>
            <p className="main-color font-italic">{this.state.Headlines}</p>
          </marquee>
        </div>
        <div className="row">
          <div className="col-xl-9 col-12">
            <div className="col-12">
              <div className="card dashHomeWelcomeBox">
                <h1 className="dashHomeWelcomeBox_name">
                  {this.state.TimelyWish} 🙳
                </h1>
                <h1 className="dashHomeWelcomeBox_name">
                  Welcome Back{" "}
                  <span className="main-color">{this.state.userName}</span>
                </h1>
                <p className="dashHomeWelcomeBox_date">
                  {this.state.days[CurrDay]}, {this.state.Months[Currmonth]}{" "}
                  {CurrDate}
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="card UsersStatBox">
                <div className="row">
                  <div className="col-md-4 col-12 py-2">
                    <div className="card dashHomeStatsBox_card">
                      <div className="card-body">
                        <h1 className="dashHomeStatsBox_head">Services used</h1>
                        <p className="dashHomeStatsBox_lead">
                          {this.addLeadingZeros(this.state.ServicesUsed)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 py-2">
                    <div className="card dashHomeStatsBox_card">
                      <div className="card-body">
                        <h1 className="dashHomeStatsBox_head">Super Coins</h1>
                        <p className="dashHomeStatsBox_lead">
                          {this.addLeadingZeros(this.state.SuperCoins)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 py-2">
                    <div className="card dashHomeStatsBox_card">
                      <div className="card-body">
                        <h1 className="dashHomeStatsBox_head">
                          Active Rewards
                        </h1>
                        <p className="dashHomeStatsBox_lead">
                          {this.addLeadingZeros(this.state.Rewards)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12">
            <div className="card dashHomeStatsBox">
              <div className="col-12 py-2">
                <div className="card dashHomeStatsBox_card">
                  <div className="card-body">
                    <h1 className="dashHomeStatsBox_head">No. of User</h1>
                    <p className="dashHomeStatsBox_lead">
                      {this.addLeadingZeros(this.state.NumOfUsers)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="card dashHomeStatsBox_card">
                  <div className="card-body">
                    <h1 className="dashHomeStatsBox_head">Support Staff</h1>
                    <p className="dashHomeStatsBox_lead">
                      {this.addLeadingZeros(this.state.SupportStaff)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="card dashHomeStatsBox_card">
                  <div className="card-body">
                    <h1 className="dashHomeStatsBox_head">Web Activity</h1>
                    <p className="dashHomeStatsBox_lead">
                      {this.addLeadingZeros(this.state.WebActivity)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashHome;
