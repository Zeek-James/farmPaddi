import React, { useState } from "react";
import { Button, Label, Input, Alert, Container } from "reactstrap";
import Select from "react-select";
import usePasswordToggle from "../hooks/usePasswordToggle";
import { Link } from "react-router-dom";

const accOptions = [
  { value: "Farmer", label: "Farmer" },
  { value: "Producer", label: "Producer" },
  { value: "Consumer", label: "Consumer" },
];

export const CreateAccount = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const [accType, setAccType] = useState({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);
  const toggle = {};
  // const toggle= !setModal()

  return (
    <div className="createAcc_Container  ">
      <h3 className="text-light my-4">FARMPADDI</h3>
      <Container className=" p-4  mb-4 shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          <h5>CREATE YOUR ACCOUNT</h5>
          <div>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <form onSubmit={"handleSubmit"}>
              <div>
                <Label for="name">Account Type</Label>
                {/* <br />
                <select name={""}>
                  <option value="A">Field Agent</option>
                  <option value="B">Consumer</option>
                  <option value="C">Producer</option>
                </select>
                <br /> */}
                <Select
                  options={accOptions}
                  onChange={setAccType}
                  placeholder="Account Type"
                  isSearchable
                  className="mb-3"
                />
                <Label for="name">First Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="firstName"
                  className="mb-3"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="Name"
                />
                <Label for="name">Last Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="lastName"
                  className="mb-3"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Name"
                />
                <Label for="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="mb-3"
                  placeholder="Email"
                />
                <Label for="email">Phone Number</Label>
                <Input
                  type="number"
                  name="phone"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className="mb-3"
                  placeholder="Phone"
                />
                <Label for="password">Password</Label>
                <Input
                  type={PasswordInputType}
                  name="password"
                  id="password"
                  className="mb-3"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <span className="password-toggle-icon">{ToggleIcon}</span>

                <Label for="password">Re-enter Password</Label>
                <Input
                  type={PasswordInputType}
                  name="password"
                  id="password"
                  className="mb-3"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Re-enter Password"
                />
                <span className="password-toggle-icon">{ToggleIcon}</span>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center ">
            <Link to="dashboard">
              <Button className="w-100" color="success" onClick={toggle}>
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <h6 className="text-light">Already have an account? Login</h6>
    </div>
  );
};
