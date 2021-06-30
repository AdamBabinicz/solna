import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import Popup from "./Popup";

const Commons = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <p className="my-3">{props.description}</p>
                  <p className="my-3">{props.description1}</p>
                  <p className="my-3">{props.description2}</p>
                  <div className="mt-3">
                    <button
                      onClick={() => setButtonPopup(true)}
                      primary={true}
                      className="btn-get-started"
                    >
                      {props.btname}
                    </button>
                  </div>
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>{props.title}</h3> <br />
                    <img src={props.img} /> <br />
                    <p>{props.p}</p>
                    <em>{props.em}</em>
                  </Popup>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="mały Adaś"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commons;
