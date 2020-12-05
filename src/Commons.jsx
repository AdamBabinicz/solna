import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import web from "./images/1.png";

const Commons = (props) => {
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
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
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
