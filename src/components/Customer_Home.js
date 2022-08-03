import React from "react";
import Axios from "axios";
import { Form, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class Customer_Home extends React.Component {
  constructor(props) {
    super(props);
    this.onAddcart=this.onAddcart.bind(this);
    this.state = { btn: true, mylist: [],mylist1:[] };
  }

  componentDidMount() {
    Axios.get("http://localhost:4200/showproduct").then((res) =>
      this.setState({ mylist: res.data })
    );
  }
  showStatus = (e) => {
    e.preventDefault();
    const data={customer_name:localStorage.getItem("cname")}
    Axios.post("http://localhost:4200/showstatus",data).then((res) =>
    this.setState({ mylist1: res.data })
  );


  }
  onAddcart = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const name = e.target.value;
    const loc = e.target.onChange;
    // const jobName = e.mylist.job_loc;
    // const qty = 1;
     console.log(name);
    //  this.setState({btn: e.target.btn})
    // this.setState({btn: false});
     

    const data = { "id": id, "name": localStorage.getItem("cname")};
    Axios.post("http://localhost:4200/productaddcart", data).then((res) =>
      console.log("Added to Cart")
    );

    const uname= localStorage.getItem("cname");
    console.log(uname);
  };

  render() {
    let btn = this.state.btn;
   
    return (
      <>
        <Button
                          variant="success"
                          type="button"
                         
                          onClick={this.showStatus}
                        >
                          Status
                        </Button>  
<Container>
<Table striped bordered hover>
            <thead>
              <th> Job id</th>
              <th>Status</th> 
            </thead>
            <tbody>
              {this.state.mylist1.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.job_id}</td>
                    <td>{item.customer_name} you have selected for this post</td>
                   
                  </tr>
                );
              })}
            </tbody>
          </Table>
</Container>


          <h2 align="center"> Apply here </h2>        

          {/* <div style={{ marginLeft: "60%", display: "flex" }}>
            <b> Search </b> <div></div>
            <input type="search" />{" "}
    </div> */}

        <Container>
          <hr />
          <Table striped bordered hover>
            <thead>
            <th> Job Id</th>
              <th> Job Title</th>
              <th>Requirements</th> <th> Experience </th>
              <th> Job Location </th>
              <th>Apply</th>
            </thead>
            <tbody>
              {this.state.mylist.map((item, index) => {
                return (
                  <tr key={index}>
                       <td>{item.product_id}</td>
               
                    <td>{item.job_name}</td>
                    <td>{item.job_req}</td>
                    <td>{item.job_exp}</td>
                    <td>{item.job_loc}</td>
                    <td>
                      {/* {btn===true ? */}
                       <Button
                          variant="success"
                          type="button"
                          id={item.product_id}
                          value={item.job_name}
                          
                          // loc1={item.job_loc}
                          // value={item.job_loc}
                          onClick={this.onAddcart}
                        >
                          Apply
                        </Button>  
                         {/* : 'Applied' }   */}
                      
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
        {/* <Link to="/applied">
        <Button>
          go
        </Button>
        </Link> */}
      </>
    );
  }
}

export default Customer_Home;
