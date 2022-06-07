import React, { useEffect } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from '../assets/contracts/WorkersContracts';
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/NavbarComponent";
import { useForm } from "../hooks/useForm";

export const CreateUser = () => {

  const [value, handleInputChange, reset, setValue] = useForm({ firstName: '', lastName: '', phone: '', userAddress: '', email: '', experience: '', grades: '', skills: '', languages: '' });

  const { enableWeb3, isWeb3Enabled } = useMoralis()

  const { runContractFunction, data, error } = useWeb3Contract({
    abi,
    contractAddress,
    functionName: 'createWorker',
    params: {
      _firstName: value.firstName,
      _lastName: value.lastName,
      _phone: value.phone,
      _userAddress: value.userAddress,
      _email: value.email,
      _experience: value.experience,
      _grades: value.grades,
      _skills: value.skills,
      _languages: value.languages
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
                  <h1 className="fw-bolder">Employees Registration</h1>
                  <small className="text-muted"></small>
                  <hr />
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={value.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your firstName..."
                    required
                  />
                  <label for="firstName">Your first name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={value.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your lastname..."
                    required
                  />
                  <label for="lastname">Your lastname</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={value.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone ..."
                    required
                  />
                  <label for="phone">Your phone</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    name="Address"
                    value={value.userAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your name..."
                    required
                  />
                  <label for="Address">Your Address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={value.email}
                    onChange={handleInputChange}
                    placeholder="Example@example.com"
                    required
                  />
                  <label for="email">Your email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    name="experience"
                    value={value.experience}
                    onChange={handleInputChange}
                    placeholder="Your work experience"
                    required
                  />
                  <label for="experience">Your work experience</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="grades"
                    name="grades"
                    value={value.grades}
                    onChange={handleInputChange}
                    placeholder="Your grades"
                    required
                  />
                  <label for="grades">Your grades</label>
                </div>
                
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    name="skills"
                    value={value.skills}
                    onChange={handleInputChange}
                    placeholder="Your skills"
                    required
                  />
                  <label for="skills">Skills</label>
                </div>
                
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="languajes"
                    name="languajes"
                    value={value.languages}
                    onChange={handleInputChange}
                    placeholder="Your knoledge programing languages"
                    required
                  />
                  <label for="languajes">Your grades</label>
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
