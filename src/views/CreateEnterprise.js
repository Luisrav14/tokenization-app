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
    functionName: 'createTask',
    params: {
      _name: value.name,
      _rfc: value.rfc,
      _email: value.email,
      _phone: value.phone
    }
  })

  useEffect(async () => {
    if (!isWeb3Enabled) {
      await enableWeb3()
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await runContractFunction()
    reset()
  }

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
                  <h1 className="fw-bolder">Registration</h1>
                  <small className="text-muted">We'd love to hear from you</small>
                  <hr />
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={value.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name..."
                    required
                  />
                  <label for="name">Your company name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="rfc"
                    name="rfc"
                    value={value.rfc}
                    onChange={handleInputChange}
                    placeholder="EXAM00112233"
                    required
                  />
                  <label for="rfc">RFC</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="mail"
                    name="email"
                    value={value.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    required
                  />
                  <label for="mail">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={value.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    required
                  />
                  <label for="phone">Phone</label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" id="submitButton" type="submit" onClick={handleSubmit} >
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
