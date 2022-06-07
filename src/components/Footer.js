import React from "react";
import { } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Luisrav14/tokenization-app" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3 bg-primary">
        <a className="text-white text-decoration-none" href="#">
          Created by Universidad Tecnológica de Durango.
        </a>
      </div>
    </footer>
  );
}