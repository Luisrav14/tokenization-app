import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const CreateEnterprise = () => {
  useEffect(() => {
    console.log("Hola");
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 py-5 px-4 px-md-5 mb-5">
            <div className="bg-light rounded-3 p-2">
              <form className="mb-2 mx-5" id="contactForm">
                <div className="text-center mt-5 mb-5">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="fa fa-user"></i>
                  </div>
                  <h1 className="fw-bolder">Registration</h1>
                  <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                  <hr />
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Enter your name..." />
                  <label for="name">Full name</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="name@example.com" />
                  <label for="email">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" />
                  <label for="phone">Phone number</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" cols="3" type="text" placeholder="Enter your message here..."></textarea>
                  <label for="message">Message</label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">
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
