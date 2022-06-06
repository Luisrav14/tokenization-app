import React from "react";
import images from "../assets/images";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="container">
            <div className="inner cover text-center">
              <h1 className="cover-heading text-white">
                Safely <strong className="text-primary">Contracts</strong>
              </h1>
              <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">TEAM</h2>
                <p className="lead fw-normal text-muted mb-5">Safely contracts was created by the founding team during the zencon event </p>
              </div>
            </div>
          </div>

          <div className="row gx-5 justify-content-center">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark stretched-link" href="#!">
                    <h5 className="card-title mb-3">Luis Raul Valenzuela Martinez </h5>
                  </a>
                  <p className="card-text mb-0">Developer Back-End</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark stretched-link" href="#!">
                    <h5 className="card-title mb-3">Ernesto Amaya Rocha</h5>
                  </a>
                  <p className="card-text mb-0">Desarrollador Fron-End</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark stretched-link" href="#!">
                    <h5 className="card-title mb-3">Pablo Cesar Cordova Tapia</h5>
                  </a>
                  <p className="card-text mb-0">Developer Back-End</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark stretched-link" href="#!">
                    <h5 className="card-title mb-3">Paola Rosales Verdín</h5>
                  </a>
                  <p className="card-text mb-0">Developer Back-end</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark stretched-link" href="#">
                    <h5 className="card-title mb-3">Ramon Morales Sanchez</h5>
                  </a>
                  <p className="card-text mb-0">Doctor Strange</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
