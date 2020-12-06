import React, { useState } from "react";
import Data from "./Data";
import "./index.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.phone}`);
  };
  return (
    <div className="contact">
      <div className="my-5">
        <h1 className="text-center">Kontakt</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Imię i nazwisko lub Nick
                </label>
                <input
                  type="text"
                  name="fullname"
                  onChange={inputEvent}
                  value={data.fullname}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Wpisz imię i nazwisko lub Nick"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Telefon
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={inputEvent}
                  class="form-control"
                  value={data.phone}
                  id="exampleFormControlInput1"
                  placeholder="Podaj telefon"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Wiadomość
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Wpisz wiadomość"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" class="btn btn-outline-secondary">
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
