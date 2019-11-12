import React from 'react';
import PouchDB from 'pouchdb';
import axios from 'axios';
import './App.css';
import StripeCheckout from "react-stripe-checkout";

var tokens = new PouchDB('tokens');

function Checkout() {

  const [product] = React.useState({
    name:"TestProduct",
    price: 20,
    description:"Silicon Valley"
  });

  //this function parses the relavent information needed for the backend and puts the "JSON blob" into Pouchdb to be synced and authenticated  with the backend later
  const convert = (token)=>{
    
    let charge ={
      _id: token.id,
      email: token.email,
      amount: product.price *100,
      currency: "usd",
      description: `purchased the ${product.name}`,
      shipping:{
        name: token.card.name,
        address:{
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city:  token.card.address_city,
          state: token.card.address_state,
          country: token.card.address_country,
          postal_code: token.card.address_zip
        }
      }
    }
    console.log("what will be in the DB",charge);
    tokens.put(charge)
  }

  //turning this into async to get the value of post request
  async function handleBackend(token,product){
    console.log("async ran")
    //awaits the resolution of this request and puts the response into a variable
   const response = await axios.post("http://localhost:8080/checkout", {
      token,
      product
    });
    const {status} = response.data;

    alert("from backend", status)
    console.log(status)
  }


//token and billing and shipping addresses provided
  const handleToken = (token, addresses)=>{
    // convert(token);
    handleBackend(token, product);
  }

  

  return (
    
      <div className="App">

      {/* I made a stripe account and these are the test and private keys. So far this template is using the testKey in line 34 but once we have a backend to authenticate we can test it in full. */}

      {/* pk_test_nOBc87GRC4nCiUc6w8u5NNF800dQqGqVgn */}
      {/* sk_test_w7tGMY2X9EanZkcYrVc1K8Oq00ThL3d4UJ */}
        
        <div className="product">
          <h1>{product.name}</h1>
          <h2>Price: {(product.price)*100}</h2>
          <h3>Description: {product.description}</h3>
        </div>

        <StripeCheckout
        
        stripeKey="pk_test_nOBc87GRC4nCiUc6w8u5NNF800dQqGqVgn"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={product.price * 100}
        name={product.name}
        
        />
        
      </div>
    
  );
}

export default Checkout;