import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCards(props) {
  return (
    <div className="card service-cards m-1">
      <div className="card-body service-cards-img-div d-flex flex-column align-items-center">
        <div className="pb-3">
          <img
            src={props.img}
            alt="service-card-images"
            className="service-card-imgs"
          />
        </div>
      </div>
      <div className="service-card-text">{props.title}</div>
    </div>
  );
}
