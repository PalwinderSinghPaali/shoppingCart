import React, { useState } from 'react';
import { Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", firstName: "",lastName: "", contact: "", email: "","file":'', mylist: [] };
  }
  // componentDidMount() {
  //   Axios.get("http://localhost:4200/showproduct").then((res) =>
  //     this.setState({ mylist: res.data })
  //   );
  // }
  change1 = (e) => {
    this.setState({ username: e.target.value });
  };

  change2 = (e) => {
    this.setState({password: e.target.value });
  };
  change3 = (e) => {
    this.setState({ firstName: e.target.value });
  };
  change4 = (e) => {
    this.setState({ lastName: e.target.value });
  };
  change5 = (e) => {
    this.setState({ contact: e.target.value });
  };
  change6 = (e) => {
    this.setState({ email: e.target.value });
  };
  change33 = (e) => { this.setState({"file":e.target.files[0]}); }

  mysubmit = () => {
    const formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("contact", this.state.contact);
    formData.append("email", this.state.email);
    formData.append('file',this.state.file)
 
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    Axios.post("http://localhost:4200/register", formData, config).then(
      (res) => this.setState({ mylist: res.data })
    );
  };

  render() {
    return (
      <div style={{backgroundImage: "url(Wimbart_We-are-hiring-2.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"fit-content" ,height:"120vh", color:"white"}}>
        {/* <h5 align="center"> <b> Register Here </b> </h5> */}

        <Container style={{color:"white"}}>
          <Form style={{width:"50%", height:"80%", padding:"3vh", borderRadius:"5px", margin:"auto",color:"white",marginTop:"-3.5vh"}}>
            <Form.Group className="mb-3" controlId="p1">
              <Form.Label><b style={{color:"white"}} >Username</b></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="t1"
                onChange={this.change1}
                value={this.state.username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p2">
              <Form.Label><b style={{color:"white"}} >Password</b></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                name="t2"
                onChange={this.change2}
                value={this.state.password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p3">
              <Form.Label><b style={{color:"white"}}>First Name</b></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="t2"
                onChange={this.change3}
                value={this.state.firstName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p4">
              <Form.Label><b style={{color:"white"}}>Last Name</b></Form.Label>
              <Form.Control type="text" name="file" 
                placeholder="Enter Last Name"
                value={this.state.lastName}
              onChange={this.change4} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p3">
              <Form.Label><b style={{color:"white"}}>Contact</b></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact"
                name="t2"
                onChange={this.change5}
                value={this.state.contact}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p3">
              <Form.Label><b style={{color:"white"}}>Email</b></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="t2"
                onChange={this.change6}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p4">
             <Form.Label><b style={{color:"white"}}>Upload Resume</b></Form.Label>
            <Form.Control type="file"  name="file" onChange={this.change33}  />
    
           </Form.Group>

            <Button variant="primary" type="button" onClick={this.mysubmit}>
              Submit
            </Button>
            &nbsp;
            {/* <Button variant="success" type="button" onClick={this.myupdate}>
              Update
            </Button> */}
          </Form>
          </Container>
      </div>
    );
  }
}

export default Register;
