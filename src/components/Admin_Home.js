import React from "react";
import Axios from "axios";
import { Form, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
class Admin_Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", req: "",exp: "", loc: "", mylist: [] };
  }
  componentDidMount() {
    Axios.get("http://localhost:4200/showproduct").then((res) =>
      this.setState({ mylist: res.data })
    );
  }
  change1 = (e) => {
    this.setState({ name: e.target.value });
  };

  
  change2 = (e) => {
    this.setState({ req: e.target.value });
  };
  change3 = (e) => {
    this.setState({ exp: e.target.value });
  };
  change4 = (e) => {
    this.setState({ loc: e.target.value });
  };

  mysubmit = () => {
    const formData = new FormData();
    formData.append("job_name", this.state.name);
    formData.append("job_req", this.state.req);
    formData.append("job_exp", this.state.exp);

    formData.append("job_loc", this.state.loc);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    Axios.post("http://localhost:4200/saveproduct", formData, config).then(
      (res) => this.setState({ mylist: res.data })
    );
  };

  myupdate = () => {
    const data = { ...this.state };
    Axios.post("http://localhost:4200/update", data).then((res) =>
      this.setState({ mylist: res.data })
    );
  };
  onDelete = (e) => {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    Axios.get(`http://localhost:4200/productdelete/${id}`).then((res) => {
      this.setState({ mylist: res.data });
    });
  };

  onEdit = (e) => {
    e.preventDefault();
    const id = e.target.id;

    console.log(id);
    Axios.get(`http://localhost:4200/productedit/${id}`).then((res) => {
      this.setState({
        id:res.data[0].product_id,
        name: res.data[0].job_name,
        req: res.data[0].job_req,
        exp: res.data[0].job_exp,
        loc: res.data[0].job_loc,
      });
    });
  };

  render() {
    return (
      <div>
        <h3 align="center"> Welcome to Admin Home </h3>
      <Link to="/applicants"> <Button style={{width:"150px"}}>View applicants</Button></Link>    

        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="p1">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Title"
                name="t1"
                onChange={this.change1}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p2">
              <Form.Label>Job Requirements</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job Requirements"
                name="t2"
                onChange={this.change2}
                value={this.state.req}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p3">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Experience"
                name="t2"
                onChange={this.change3}
                value={this.state.exp}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="p4">
              <Form.Label>Job Location/Company</Form.Label>
              <Form.Control type="text" name="file" 
                placeholder="Enter Location"
              
              onChange={this.change4} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.mysubmit}>
              Submit
            </Button>
            &nbsp;
            <Button variant="success" type="button" onClick={this.myupdate}>
              Update
            </Button>
          </Form>

          <br />

          <Table striped bordered hover>
            <thead>
              <th>Job Title</th>
              <th> Requirements</th> <th> Experience</th> <th> Job Location </th>
              <th>Delete</th> <th>Edit</th>
            </thead>
            <tbody>
              {this.state.mylist.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {/* <img src={item.product_image} width="100" height="100" /> */}
                      {item.job_name}
                    </td>
                    <td>{item.job_req}</td>
                    
                    <td>{item.job_exp}</td>
                  
                    <td>{item.job_loc}</td>
                    <td>
                      <Button
                        variant="danger"
                        id={item.product_id}
                        onClick={this.onDelete}
                      >
                        Delete
                      </Button>
                    </td>

                    <td>
                      <Button
                        variant="warning"
                        id={item.product_id}
                        onClick={this.onEdit}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Admin_Home;
