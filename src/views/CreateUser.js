import React from "react";
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/NavbarComponent";

export const CreateUser = () => {

  return (
    <>
      <NavbarComponent />
      
      <div className="container">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 py-4 px-4 px-md-5 mb-5 mt-5">
            <div className="bg-light rounded-3 shadow-lg border-bottom border-left p-3">
              <form className="mb-2 mx-3" id="contactForm">
                <div className="text-center mt-3 mb-3">
                  <span className="icon-user-register feature bg-primary bg-gradient text-white rounded-3 mx-5 mb-3">
                    <i className="fa fa-user"></i>
                  </span>
                  <h1 className="fw-bolder">Employed Registration</h1>
                  <small className="text-muted"></small>
                  <hr />
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Enter your name..." />
                  <label for="name">Your company name</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="rfc" type="text" placeholder="EXAM00112233" />
                  <label for="rfc">RFC</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="mail" type="email" placeholder="name@example.com" />
                  <label for="mail">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" />
                  <label for="phone">Celphone</label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
