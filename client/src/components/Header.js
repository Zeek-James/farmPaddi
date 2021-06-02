import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utilities/fontAwesome";
import React, { Fragment, useState } from "react";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  UncontrolledDropdown,
  Button,
} from "reactstrap";
import { Login } from "./Login";
// import { SignUp } from "./SignUp";
import { Register } from "./Register";
import { Link } from "react-router-dom";
// import "../../utilies/fontawesome";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const authorisedLink = (
    <Fragment>
      <Nav navbar>
        <NavItem>
          <p>
            {/* <Avatar gender="male" className="avatar border rounded-circle" width="40" height="40" alt="Avatar" />    */}
            <span className="ml-4">
              Log out <FontAwesomeIcon classname="m-2" icon="sign-out-alt" />
            </span>
          </p>
        </NavItem>
      </Nav>
    </Fragment>
  );

  const guestlink = (
    <Fragment>
      <Nav navbar>
        <NavItem>
          <div className="text-success guest d-flex ">
            <Login />
            <Register />
          </div>
        </NavItem>
      </Nav>
    </Fragment>
  );

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="shadow-lg p-4 " color="light" light expand="md">
      <Link to=''>
      <NavbarBrand className="text-success" href="/">
        FARMPADDI
      </NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="text-success">
              Categories
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Grains</DropdownItem>
              <DropdownItem>Legumes</DropdownItem>
              <DropdownItem>Fruits</DropdownItem>
              <DropdownItem>Nuts</DropdownItem>
              <DropdownItem>Vegetables</DropdownItem>
              <DropdownItem>Oil</DropdownItem>
              <DropdownItem divider />
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="text-success">
              Who are we
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/aboutus">About Us</NavLink>
              </DropdownItem>
              <DropdownItem>Our Solutions</DropdownItem>
              <DropdownItem>Our Market</DropdownItem>
              <DropdownItem>Partners</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink href="/contactus">Contact Us</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {guestlink}
        </Nav>
      </Collapse>
    </Navbar>
  );
};
