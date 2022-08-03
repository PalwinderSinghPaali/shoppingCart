import React, { Component } from 'react'
import  Axios  from 'axios';
import { Button,Table } from 'react-bootstrap';

export default class Applicants extends Component {

   
        constructor(props)
        { 
         super(props);
         this.state = { "id":'',"name":'',"price":'',"qty":'',"file":'',mylist:[] }
         
        }
    
    componentDidMount()
    {
      Axios.get("http://localhost:4200/showapplicants").then(
          res=> this.setState({mylist:res.data}) 
          
          );
          console.log("hello");
    }

    onSend = (e) => {
      e.preventDefault();
      const id = e.target.id;
      const name = e.target.value;
   
       
  
      const data = { "job_id": id, "customer_name": name};
      console.log(data);
      Axios.post("http://localhost:4200/invitation", data).then((res) =>
        console.log("invitation sent")
      );
  
      const uname= localStorage.getItem("cname");
      console.log(uname);
    };

 
  render() {

    return (
      <div>
        <h1 style={{textAlign:"center"}}>Applicants</h1>
        
        <Table striped bordered hover>
            <thead>
              {/* <th>Image</th> */}
              <th> Job ID </th> <th> Applicant Name </th> <th> Job Title </th> <th> Job Location </th><th>Resume</th><th>Invitation</th>
              {/* <th>Delete</th> <th>Edit</th> */}
            </thead>
            <tbody>
              {this.state.mylist.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {/* <img src={item.product_image} width="100" height="100" />
                       */}
                       {item.product_id}
                    </td>
                    <td>{item.customer_name}</td>
                    <td>{item.job_name}</td>
                    <td>{item.job_loc}</td>
                    {/* <td>{item.product_price}</td> */}

                    <td>
                      <a href={item.image_name} target="_blank">
                      Resume[ {item.image_name} ] 
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        id={item.product_id}
                        value={item.customer_name}
                        style={{width:"150px"}}
                        onClick={this.onSend}
                      >
                        Send Invitation
                      </Button>
                    </td>
{/*
                    <td>
                      <Button
                        variant="warning"
                        id={item.product_id}
                        onClick={this.onEdit}
                      >
                        Edit
                      </Button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        
      </div>
    )
  }
}
