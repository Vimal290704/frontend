import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <main role="main" style={{ marginTop: "50px" }}>
        <div className="jumbotron text-center bg-primary text-white">
          <div className="container">
            <h1 className="display-3">Welcome to Our Site!</h1>
            <p className="lead">
              Discover our amazing products and services. Get started with our
              comprehensive guides and insights.
            </p>
            <p>
              <Link to="/learn-more" className="btn btn-light btn-lg">
                Learn More »
              </Link>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h2>Our Mission</h2>
              <p>
                We strive to provide exceptional service and innovative
                solutions to help our customers succeed.
              </p>
              <p>
                <Link className="btn btn-secondary" to="/mission">
                  View Details »
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Our Products</h2>
              <p>
                Explore our wide range of products designed to meet all your
                needs, from everyday essentials to cutting-edge technology.
              </p>
              <p>
                <Link className="btn btn-secondary" to="/products">
                  View Products »
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Contact Us</h2>
              <p>
                Have questions or need support? Our team is here to help you
                with any inquiries or feedback you might have.
              </p>
              <p>
                <Link className="btn btn-secondary" to="/contact">
                  Get in Touch »
                </Link>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </main>
      <footer className="container text-center py-4">
        <p>© Company 2025. All rights reserved.</p>
        <p>
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
}

export default Homepage;
