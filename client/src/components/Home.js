import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

export const Home = () => {
  return (
    <div>
      <section className="home_Container" color="success">
        <Container className=" home text-white position-relative">
          <h6>FARM PADDI</h6>

          <h1 className="font-weight-bold">Fresh foods from farm to table</h1>
          <Link to="createaccount">
            <Button>Create a free account</Button>
          </Link>
        </Container>
      </section>
      <section className="contactUs bl-5">
        <Container className=" d-flex justify-content-between py-4">
          <h4>Grow your farm with Farm Paddi.</h4>
          <Button>Contact Us</Button>
        </Container>
      </section>
    </div>
  );
};
