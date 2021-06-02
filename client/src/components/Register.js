import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utilities/fontAwesome";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavLink,
} from "reactstrap";

import React, { useState } from "react";

export const Register = () => {
  const [modal, setModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  //   const [userName, setUserName] = useState("");
  // const [msg, setMsg] = useState(null);

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const error = useSelector((state) => state.error);
  // console.log(error);
  // const dispatch = useDispatch();
  // const toggle = useCallback(
  //   () => {
  //       setMsg(null)
  //       setModal(!modal);
  //     } ,
  //   [modal],
  // )

  const toggle = () => setModal(!modal);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //   Create user object
  //   const newUser = {
  //     name,
  //     email,
  //     password,
  //   };

  //   //   Attemp to SignUp
  //   dispatch(signUp(newUser));
  //   setName("");
  //   setPassword("");
  //   setEmail("");
  // };

  // useEffect(() => {
  //   if (error.id === "REGISTER_FAIL") {
  //     setMsg(error.msg.msg);
  //   } else {
  //     setMsg(null);
  //   }

  // }, [error]);

  // useEffect(() => {
  //   if(modal){
  //     if(isAuthenticated){
  //       toggle()
  //     }
  //   }
  // },[ modal,toggle, isAuthenticated])

  return (
    <div>
      <NavLink onClick={toggle} href="#" className="text-success">
        <FontAwesomeIcon icon="user-plus" />
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {/* {msg ? <Alert color="danger">{msg}</Alert> : null} */}
          <Form onSubmit={"handleSubmit"}>
            <FormGroup>
              <Label for="name">Account Type</Label>
              <Input
                type="text"
                name="account"
                id="account"
                className="mb-3"
                value={accountType}
                onChange={(e) => {
                  setAccountType(e.target.value);
                }}
                placeholder="Name"
              />
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                className="mb-3"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First Name"
              />
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                className="mb-3"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Last Name"
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

              <Label for="phone">Phone Number</Label>
              <Input
                type="number"
                name="phone"
                id="phone"
                className="mb-3"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Phone"
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                className="mb-3"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              {/* 
                <Label for="username">
                  User Name
                </Label>
                <Input
                  type="text"
                  name="username"
                  className='mb-3'
                  id="username"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="User name"
                />
              */}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className='d-flex justify-content-center'>
          <Button color="success" className='w-75' type="submit" onClick={"handleSubmit"}>
            Create Account
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
