import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import app from "../firebase"
let db= app.firestore();

let data1 =[];
const query = db.collection('Electrician').get().then((querySnapshot) => {
querySnapshot.forEach((doc) => {
      data1.push(doc.data());
});
console.log(data1,"asda");
});

let data = data1;

// let data = [
//   {
//     id: 1,
//     name: "Name",
//     img: "https://i.pinimg.com/736x/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg",
//     city: "indore",
//     rating: 4,
//     about:
//       "Im elwknv uwen iuoejwoci joweij oiwdjsoj Im elwknv uwen iuoejwoci joweij oiwdjsoj",
//   },
// ];

class Electricians extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
    };
  }

  componentDidMount() {
    window.addEventListener("click", function (event) {
      if (event.target.className != "search-box") {
        $(".search-box").removeClass("search-focus");
      }
    });
  }

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value.toLowerCase(),
    });
  };

  openSearchBox = (e) => {
    e.stopPropagation();
    $("#search-box").addClass("search-focus");
  };

  showDataCards = () => {
    let FilteredData = data.filter((person) => {
      return person.city.toLowerCase().indexOf(this.state.searchInput) != -1;
    });
    return FilteredData.map((person) => {
      const starsList = [];
      let showChar = 60;
      let showName = 25;

      if (person.name.length > showName) {
        var a = person.name.substr(0, showName);
        var nameDisplay = `${a}...`;
      } else {
        nameDisplay = person.name;
      }

       // if (person.about.length > showChar) {
      //   var c = person.about.substr(0, showChar);
      //   var display = `${c}...`;
      // } else {
      //   display = person.about;
      // }
      var display = person.about;

      if (person.img.length != 0) {
        var pic = person.img;
      } else {
        pic = "/assets/abstract-user-flat-4.svg";
      }

      for (let i = 0; i < 10; i++) {
        if (i < person.rating) {
          starsList.push(
            <span key={i} className="activeStars">
              ★
            </span>
          );
        } else {
          starsList.push(<span key={i}>★</span>);
        }
      }
      return (
        <div className="col-xl-4 col-md-6 col-12" key={person.id}>
          <Link to={`/user/dashboard/services/electricians/${person.id}`}>
            <div className="card emp_card mb-4">
              <div className="emp_card_img_col">
                <img src={pic} alt={nameDisplay} className="rounded-circle" />
              </div>
              <div className="emp_card_data_col p-3">
                <h1 className="emp_card_data_name">{nameDisplay}</h1>
                <p className="RatingStars">Ratings: {starsList}</p>
                <p>
                  City: <span className="text-capitalize">{person.city}</span>{" "}
                </p>
                <p className="emp_card_data_about pt-lg-2 pt-1">{display}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="dashboard_mainDiv">
        {/* header */}
        <div className="dash_header px-md-5 px-2">
          <img
            src={process.env.PUBLIC_URL + "/assets/MercenaryLogo.svg"}
            className="main-logo"
          />
          <input
            type="text"
            className="dash_search"
            placeholder="Search here..."
            autoComplete="off"
            value={this.state.searchInput}
            onChange={(e) => this.handleSearch(e)}
          />
        </div>

        {/* main white box */}
        <div className="white_box_1">
          <div className=" white_box_1_header d-md-none d-flex justify-content-between align-items-center">
            <div>
              <form>
                <input
                  type="text"
                  className="search-box"
                  id="search-box"
                  placeholder="Search"
                  autoComplete="off"
                  onClick={this.openSearchBox}
                  value={this.state.searchInput}
                  onChange={(e) => this.handleSearch(e)}
                />
              </form>
            </div>
            <h1 className="white_box_1_heads">#Electricians</h1>
          </div>
          <h1 className=" white_box_1_heads d-md-block d-none">
            #Electricians
          </h1>
          <div className="dash_scroll_container" id="dash_scroll">
            <div className="dash_scroll_div container-fluid">
              <div className="row">{this.showDataCards()}</div>
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

export default Electricians;
