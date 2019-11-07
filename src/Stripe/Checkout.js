import React from 'react';

import './App.css';
import StripeCheckout from "react-stripe-checkout";

function Checkout() {

  const [product] = React.useState({
    name:"California",
    price: 20,
    description:"Solicon Valley"
  });

  const handleToken = (token, addresses)=>{
    console.log({token, addresses});
  }

  return (
    
      <div className="App">

      {/* I made a stripe account and these are the test and private keys. So far this template is using the testKey in line 34 but once we have a backend to authenticate we can test it in full. */}

      {/* pk_test_nOBc87GRC4nCiUc6w8u5NNF800dQqGqVgn */}
      {/* sk_test_w7tGMY2X9EanZkcYrVc1K8Oq00ThL3d4UJ */}
        Yeet
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
        amount={product.price}
        name={product.name}
        
        />
        
      </div>
    
  );
}

export default Checkout;