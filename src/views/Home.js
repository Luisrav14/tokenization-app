import React from "react";
import images from "../assets/images";
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/NavbarComponent";

export const Home = () => {
  return (
    <>
      <NavbarComponent />

      <section id="home">
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="container">
              <div className="inner cover text-center">
                <div className=" cover-heading display-1">
                  <span className="text-white font-weight-bold-900 font-weight-bold">Safely</span> <span className="text-primary font-weight-bold-900">Contracts</span>
                </div>
                <p className="lead text-light">Work in chain.</p>
                <a href="#" className="btn btn-lg btn-primary"><span className="fw-light fs-5" >Learn More</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section id="about" className="mt-5">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content px-xl-5">
              <h1>Tokenize <strong>Employes</strong></h1>
              <p>
              Safely Contracts offers to the enterprises and employees the necessary security and reliability to a business network that must be reliable.
              </p>
            </div>
            </div>
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 mb-5" >
          <img className=" image-max-width rounded shadow shadow-sm" src={images.AboutImage}  alt="about" />
          </div>
        </div>
      </div>
    </section>


      <section className="bg-light py-5" id="prices">
    <div className="container px-5 my-5">
        <div className="text-center mb-5">
            <h1 className="fw-bolder">Pay as you grow</h1>
            <p className="lead fw-normal text-muted mb-0">With our no hassle pricing plans</p>
        </div>
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-6 col-xl-4">
                <div className="card mb-5 mb-xl-0">
                    <div className="card-body p-5">
                        <div className="small text-uppercase fw-bold text-muted">Free</div>
                        <div className="mb-3">
                            <span className="display-4 fw-bold">$0</span>
                            <span className="text-muted">/ mo.</span>
                        </div>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <strong>5 contracts</strong>
                            </li>
                        </ul>
                        <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-4">
                <div className="card mb-5 mb-xl-0">
                    <div className="card-body p-5">
                        <div className="small text-uppercase fw-bold">
                            <i className="bi bi-star-fill text-warning"></i>
                            Pro
                        </div>
                        <div className="mb-3">
                            <span className="display-4 fw-bold">$9.99</span>
                            <span className="text-muted">/ mo.</span>
                        </div>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <strong>50 contracts</strong>
                            </li>
                        </ul>
                        <div className="d-grid"><a className="btn btn-primary" href="#!">Choose plan</a></div>
                    </div>
                </div>
            </div>
        
            <div className="col-lg-6 col-xl-4">
                <div className="card">
                    <div className="card-body p-5">
                        <div className="small text-uppercase fw-bold text-muted">Enterprise</div>
                        <div className="mb-3">
                            <span className="display-4 fw-bold">$49.99</span>
                            <span className="text-muted">/ mo.</span>
                        </div>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <strong>Unlimited contracts</strong>
                            </li>
                        </ul>
                        <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      <section className="py-5" id="team">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">TEAM</h2>
                <p className="lead fw-normal text-muted text-light mb-5">Safely contracts was created during the zencon event in playa del carmen by the UTD programming team</p>
              </div>
            </div>
          </div>
          
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-4 col-md-6 mb-5 max-width-380">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={images.luis} alt="..." />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Luis Raul Valenzuela Martinez</h5>
                  {/* <a className="text-decoration-none link-dark stretched-link" href="#">
                  </a> */}
                  <p className="card-text mb-0">Developer full stack</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 max-width-380">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={images.neto} alt="..." />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Ernesto Amaya Rocha</h5>
                  {/* <a className="text-decoration-none link-dark stretched-link" href="#">
                  </a> */}
                  <p className="card-text mb-0">Developer full stack</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5 max-width-380">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={images.pablo} alt="..." />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Pablo Cesar Cordova Tapia</h5>
                  {/* <a className="text-decoration-none link-dark stretched-link" href="#">
                  </a> */}
                  <p className="card-text mb-0">Developer full stack</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5 max-width-380">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={images.paola} alt="..." />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Paola Rosales Verdín</h5>
                  {/* <a className="text-decoration-none link-dark stretched-link" href="#">
                  </a> */}
                  <p className="card-text mb-0">Developer full stack</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5 max-width-380">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={images.ramon} alt="..." />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Ramon Morales Sanchez</h5>
                  {/* <a className="text-decoration-none link-dark stretched-link" href="#">
                  </a> */}
                  <p className="card-text mb-0">Developer full stack</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

    </>
  );
}
