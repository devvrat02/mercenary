import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let reviews = [
  {
    id: 1,
    name: "Name",
    occupation: "Shop keeper",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem suscipit sed nemo, ab officia illum quibusdam consequuntur aspernatur eligendi mollitia? Voluptatem suscipit sed nemo, ab officia illum quibusdam consequuntur aspernatur eligendi mollitia?",
  },
  {
    id: 2,
    name: "Name2",
    occupation: "wicket keeper",
    review:
      "Lorem suscipit sed nemo, ab officia illum quibusdam consequuntur aspernatur eligendi mollitia? Voluptatem suscipit sed nemo, ab officia illum quibusdam consequuntur aspernatur eligendi mollitia?",
  },
];

class TopReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        margin: 20,
        autoplay: true,
        center: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      },
    };
  }

  showReviews = () => {
    return reviews.map((person) => {
      let reviewlength = 180;

      if (person.review.length > reviewlength) {
        var a = person.review.substr(0, reviewlength);
        var reviewDisplay = `${a}...`;
      } else {
        reviewDisplay = person.review;
      }

      return (
        <div
          className="active-carousel-area d-flex flex-column justify-content-between"
          key={person.id}
        >
          <div className="active-carousel-text-area">
            <div className="d-flex py-xl-5 py-lg-4 py-md-5 py-4">
              <div className="double-codes px-2">
                <i className="fas fa-quote-left"></i>
              </div>
              <div className="active-carousel-text px-3">{reviewDisplay}</div>
            </div>
            <div className="active-carousel-text-arrow">
              <i className="fas fa-sort-down"></i>
            </div>
          </div>
          <div className="active-carousel-img d-flex flex-column justify-content-center align-items-center text-center">
            <div>
              <img
                src="/assets/abstract-user-flat-4.svg"
                alt=""
                className="rounded-circle shadow"
              />
            </div>
            <div className="py-2 main-color-yellow">{person.name}</div>
            <div className="card-tags small px-2"> {person.occupation} </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container reviews-bg">
        <h1 className="home-title">#Reviews</h1>
        <OwlCarousel className="owl-theme activeclass" {...this.state.options}>
          {this.showReviews()}
        </OwlCarousel>
      </div>
    );
  }
}

export default TopReviews;
