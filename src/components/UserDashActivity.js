import React, { Component } from "react";

let messages = [
  {
    id: 1,
    message:
      "Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text",
  },
  {
    id: 2,
    message:
      "Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text",
  },
  {
    id: 3,
    message:
      "Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text",
  },
];

class UserDashActivity extends Component {
  showMessages = () => {
    return messages.map((msg) => {
      return (
        <div className="msg_box" key={msg.id}>
          {msg.message}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="p-3">
        <h1 className="dash_main_div_head">Your Activities</h1>
        <div
          className="container-fluid dash_service_container"
          id="dash_scroll"
        >
          <div className="dash_main_div">{this.showMessages()}</div>
        </div>
      </div>
    );
  }
}

export default UserDashActivity;
