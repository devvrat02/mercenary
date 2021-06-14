import React, { Component } from "react";
import app from "../firebase";
import $ from "jquery";
let db= app.firestore();
let dt=[];
let uid=localStorage.getItem("id");
let name = "";
let img = "";
// "https://cdn.discordapp.com/attachments/808954755682140221/848181376717160478/unknown.png";
let wmail = "";
let address = "";
let pin = "";
let rating ;
let contact="";
let images = [
  {
    id: 1,
    img: "https://cdn.discordapp.com/attachments/808954755682140221/848181376717160478/unknown.png",
  },
  {
    id: 2,
    img: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  },
];

let reviews = [
  {
    id: 1,
    name: "Name",
    stars: 4,
    review: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    id: 2,
    name: "Name",
    stars: 3,
    review: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    id: 3,
    name: "Name",
    stars: 7,
    review: "Lorem ipsum dolor sit amet consectetur ",
  },
];

let lodingdone="No";
class MechanicsProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageId: this.props.match.params.id,
    };
  }

  componentDidMount(){
    this.load_data();
   console.log(dt,"afsfasf");
   }
   
    load_data=()=>{
      console.log("functioncall");
     var docRef =  db.collection("Mechanics")
     .doc(this.state.pageId)
     .get()
     .then(function (doc) {
      dt=doc.data();
      address=dt.address;
      // console.log(address,"fsdf");
      name= dt.name;
      pin= dt.pincode;
      rating= dt.rating;
      contact=dt.contact;
      wmail=dt.id
     lodingdone="Yes";
   
     })
     .catch(function (error) {
       console.log(error);
     })
   
     console.log(dt,"afsfasf");
     
   }
   displayData=()=>{
   
       if(lodingdone=="No"){
         return ( 
           <h1 className="mem_profile_header_org">Loading...</h1>
         )
       }
       else{
         return(
           <>
           <h1 className="mem_profile_header_name">{name}</h1>
           <h1 className="mem_profile_header_org">Mechanics</h1>
           <p className="mem_profile_header_address">{address}</p>
           <p className="mem_profile_header_address"> {pin} </p>
           </>
         )
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
    
  ShowProfile = () => {
    if (img.length != 0) {
      return img;
    } else {
      return "/assets/abstract-user-flat-4.svg";
    }
  };

  starCount = (count) => {
    let starsList = [];
    for (let i = 0; i < 10; i++) {
      if (i < count) {
        starsList.push(
          <span key={i} className="activeStars">
            ★
          </span>
        );
      } else {
        starsList.push(<span key={i}>★</span>);
      }
    }
    return starsList;
  };

  showReviewCards = () => {
    if (reviews.length == 0) {
      return (
        <div className="DisplayFlex">
          <h1>No Reviews Found!</h1>
        </div>
      );
    } else {
      return reviews.map((review) => {
        return (
          <div className="card mem_profile_review_cards my-2" key={review.id}>
            <div className="card-body">
              <h1 className="mem_profile_review_cards_name">{review.name}</h1>
              <p className="mem_profile_review_cards_review">
                {" "}
                {this.starCount(review.stars)}{" "}
              </p>
              <p className="mem_profile_review_cards_review">
                {" "}
                {review.review}{" "}
              </p>
            </div>
          </div>
        );
      });
    }
  };

  showCarouselItems = () => {
    if (images.length == 0) {
      return (
        <div className="DisplayFlex">
          <h1>No Images Uploaded</h1>
        </div>
      );
    } else if (images.length == 1) {
      return (
        <div className="carousel-item active">
          <img className="d-block w-100" src={images[0].img} alt="img slide" />
        </div>
      );
    } else if (images.length > 1) {
      return images.map((item) => {
        if (item.id == 1) {
          return (
            <div className="carousel-item active" key={item.id}>
              <img className="d-block w-100" src={item.img} alt="img slide" />
            </div>
          );
        } else {
          return (
            <div className="carousel-item" key={item.id}>
              <img className="d-block w-100" src={item.img} alt="img 2 slide" />
            </div>
          );
        }
      });
    }
  };

  bookService = (e) => {
    e.preventDefault();
    //book service code
    let bk_str="Appointment: "+ name +" address: "+address+" contact: "+contact+" email: "+wmail;
    this.showNotification("Serviced Booked, Check your Activities");
    let temp= db.collection("users").doc(uid).collection("history").doc().set({
      id: wmail ,
    messages:bk_str,
})
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });


  };
  render() {
    return (
      <div className="dashboard_mainDiv">
          <div id="notifContainer"></div>
        {/* header */}
        <div className="dash_header justify-content-center px-md-5 px-2">
          <img
            src={process.env.PUBLIC_URL + "/assets/MercenaryLogo.svg"}
            className="main-logo"
          />
        </div>

        {/* main white box */}
        <div className="white_box_1 p-0">
          {/* header */}
          <div className="mem_profile_header">
            <div className="DisplayFlex flex-md-row flex-column">
              <div className="mem_profile_header_img">
                <img
                  className="mem_profile_header_Profileimg"
                  src={this.ShowProfile()}
                />
              </div>
              <div className="ml-4">
              {this.displayData()}
                {/* <h1 className="mem_profile_header_name">{name}</h1>
                <h1 className="mem_profile_header_org">Barber</h1>
                <p className="mem_profile_header_address">{address}</p>
                <p className="mem_profile_header_address"> {pin} </p> */}
              </div>
            </div>
            <div className="py-md-0 py-3">
              <button
                type="button"
                className="btn mem_profile_header_btn px-5 py-2"
                onClick={this.bookService}
              >
                Book Service
              </button>
            </div>
          </div>

          {/* body */}
          <div className="container-fluid pt-3 main-color">
            <div className="row">
              {/* reviews */}
              <div className="col-xl-5 col-12 py-2">
                <div className="d-xl-block d-md-flex pb-xl-0 pb-3">
                  <h1 className="m-0 pr-xl-0 pr-lg-3">Reviews</h1>
                  <p className="mem_profile_stars">{this.starCount(rating)}</p>
                </div>

                {/* review cards */}
                <div className="mem_profile_reviews_sec" id="dash_scroll">
                  <div className="mem_profile_review_main py-2">
                    {this.showReviewCards()}
                  </div>
                </div>
              </div>

              {/* carousel */}
              <div className="col-xl-7 col-12 py-2">
                <div className="card mem_profile_carousel_box">
                  <div className="card-body p-0">
                    <div
                      id="carouselControls"
                      className="carousel slide h-100 p-0"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {this.showCarouselItems()}
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselControls"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselControls"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="dash_footer">
          <p>&copy; 2021 MERCENARY All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default MechanicsProfile;
