import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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

import '../utilities/fontAwesome'

export const Login = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //   const [userName, setUserName] = useState("");
    const [msg, setMsg] = useState(null);
    
    return (
        <div>
          <NavLink onClick={toggle} href="#" className=" border-left  text-success" color="success" >
              Login <FontAwesomeIcon classname="" icon="sign-in-alt" />        
          </NavLink>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
              Login <FontAwesomeIcon classname="m-2" icon="sign-in-alt" />
            </ModalHeader>
            <ModalBody>
              {msg ? <Alert color="danger">{msg}</Alert> : null}
              <Form onSubmit={'handleSubmit'}>
                <FormGroup>
                  <Label for="email">Email</Label>
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

                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter className='d-flex justify-content-center'>
              <Button color="success" type="submit" className='w-75' onClick={'handleSubmit'}>
                LOGIN IN TO YOUR ACCOUNT </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    
}