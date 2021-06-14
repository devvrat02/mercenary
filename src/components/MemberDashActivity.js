import React, { Component } from "react";
import app from "../firebase"
let db= app.firestore();
let gid=localStorage.getItem("id");
let messages=[];
var docRef=db.collection("users"+"/"+gid+"/history").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      messages.push(doc.data());
    console.log(doc.data(),"ksmca");
  })
});

// let messages = [
//   {
//     id: 1,
//     message:
//       "Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text",
//   },
//   {
//     id: 2,
//     message:
//       "Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text",
//   },
//   {
//     id: 3,
//     message:
//       "Ipsum is simply dummy text of the printing and typesett ingindustry. Lorem Ipsum has been the industry's standard dummy text",
//   },
// ];

class MemberDashActivity extends Component {
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
      <>
        <h1 className="dash_main_div_head">Your Activities</h1>
        <div
          className="container-fluid dash_service_container"
          id="dash_scroll"
        >
          <div className="dash_main_div">{this.showMessages()}</div>
        </div>
      </>
    );
  }
}

export default MemberDashActivity;
