import React, { Fragment, useEffect, useState } from 'react';
import { Header } from "./Header";
// import { Avatar } from 'react-lorem-ipsum';
import '../utilities/fontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Nav, NavbarBrand, NavItem} from 'reactstrap';

export const AppNavbar = () => {
      const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

      const authorisedLink = (
        <Fragment>
          <Nav navbar>
            <NavItem>
            <p>
                {/* <Avatar gender="male" className="avatar border rounded-circle" width="40" height="40" alt="Avatar" />    */}
                <span className="ml-4">Log out  <FontAwesomeIcon classname="m-2" icon="sign-out-alt" /></span>
            </p>
            </NavItem>
          </Nav>
        </Fragment>
  );

  const guestlink = (
    <Fragment>
      <Nav navbar>
        <NavItem>
          <p>
            <span className="mr-4">
              Login <FontAwesomeIcon classname="m-2" icon="sign-in-alt" />
            </span>
            <FontAwesomeIcon classname="m-2" icon="user-plus" />
          </p>
        </NavItem>
      </Nav>
    </Fragment>
  );
    const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

  }, []);

    return(
    <div className='position-sticky'>
    {/* <div className={`posi d-flex justify-content-between p-4 ${!show && "shadow-lg  bg-white"} `}>
      {!show ? (
        <NavbarBrand className="text-success">
          FARMPADDI
        </NavbarBrand>
      ) : (
        ""
      )}
      <Nav className="input-group rounded w-50">
        <input
          type="search"
          className="form-control rounded mr-2 p-2 "
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
          <FontAwesomeIcon icon="search" onClick={toggleNavbar} />
      </Nav>
      {collapsed ? guestlink : authorisedLink}
    </div> */}
        <Header className={show}/>
    </div>
  );
}


