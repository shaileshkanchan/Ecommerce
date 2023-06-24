import { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import "./cart.css"

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result))
  }, []);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e))
  }



  const cards = products.map(product => (
    // <div key={product.id} style={{ marginBottom: '10px' }}>

      <div key={product.id}   className="card card-shadow">
        <div className="card-header card-image">
          <img src={product.image}  alt=""/>
        </div>
        <div className="card-body">
          {product.title}
        </div>
        <div className="card-footer">
          <button className="btn" onClick={() => send(product)}>Add to cart</button>
          
        </div>
      </div>
    // </div>


  ))


  return (
    <>
      {/* <h1>Product Dashboard</h1> */}
      <div className="card-grid">{cards}</div>

    </>
  )
}
export default Product