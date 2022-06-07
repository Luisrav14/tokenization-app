import React, { useEffect } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from '../assets/contracts/EnterprisesContract';
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/NavbarComponent";
import { useForm } from "../hooks/useForm";

export const CreateEnterprise = () => {

  const [value, handleInputChange, reset, setValue] = useForm({ name: '', rfc: '', email: '', phone: '' });

  const { enableWeb3, isWeb3Enabled } = useMoralis()

  const { runContractFunction, data, error } = useWeb3Contract({
    abi,
    contractAddress,
    functionName: 'createEnterprise',
    params: {
      _name: value.name,
      _rfc: value.rfc,
      _email: value.email,
      _phone: value.phone
    }
  })

  useEffect(async () => {
    await enableWeb3()
  }, [])


  return (
    <>
      <NavbarComponent />

      {
        !isWeb3Enabled &&
        <button onClick={enableWeb3} className="btn btn-primary">Connect</button>
      }
      <div className="container">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 py-4 px-4 px-md-5 mb-5 mt-5">
            <div className="bg-light rounded-3 shadow-lg border-bottom border-left p-3">
              <form className="mb-2 mx-3" id="contactForm">
                <div className="text-center mt-3 mb-3">
                  <span className="icon-user-register feature bg-primary bg-gradient text-white rounded-3 mx-5 mb-3">
                    <i className="fa fa-user"></i>
                  </span>
                  <h1 className="fw-bolder">Registration</h1>
                  <small className="text-muted">We'd love to hear from you</small>
                  <hr />
                </div>
                <div className="form-floating mb-3">
                  <label for="name">Your company name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    name="titulo"
                    value={value.titulo}
                    onChange={handleInputChange}
                    required




                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                  />
                </div>

                <div className="form-floating mb-3">
                  <label for="rfc">RFC</label>
                  <input className="form-control" id="rfc" type="text" placeholder="EXAM00112233" />
                </div>

                <div className="form-floating mb-3">
                  <label for="mail">Email</label>
                  <input className="form-control" id="mail" type="email" placeholder="name@example.com" />
                </div>

                <div className="form-floating mb-3">
                  <label for="phone">Phone</label>
                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" id="submitButton" type="submit" onClick={runContractFunction} >
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
