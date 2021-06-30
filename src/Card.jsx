import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Popup from "./Popup";
import Data from "./Data";

const Card = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={props.imgsrc} alt={props.imgsrc} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <button
            className="btn btn-secondary"
            onClick={() => setButtonPopup(true)}
          >
            Zobacz
          </button>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{props.Title}</h3> <br />
          <img src={props.img} /> <br />
          <p>{props.p}</p>
          <em>{props.em}</em>
        </Popup>
      </div>
    </div>
  );
};

export default Card;
