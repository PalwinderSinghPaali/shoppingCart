import React from "react";
import Axios from "axios";
import { Form, Button, Container, Table } from "react-bootstrap";
import '../product.css';
import { useSelector, useDispatch } from "react-redux";

class Product extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", price: "", qty: "", file: "", mylist: [] };
  }
  componentDidMount() {
    Axios.get("http://localhost:4200/showproduct").then((res) =>
      this.setState({ mylist: res.data })
    );
  }

  render() {
    return (
      <div>
        <h3 align="center"> Featured Products </h3>


 
          <br />
          <div className="products">
              {this.state.mylist.map((item, index) => {
                return (
                    <>
                    <div className="productConatiner">

                  <div className="product" key={item.product_id}>
                  <img src={item.product_image} alt="cart" />
                  <h4>{item.product_name}</h4>
                  <p>Rs. {item.product_price}</p>
                  <button className='btn btn-success btn-lg btn-block'>
                    Add to cart
                  </button>
                </div>
                </div>
               
                </>
                );
              })}
               </div>
      </div>
    );
  }
}

export default Product;
