import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component{

    render(){
      //  debugger
        return (
            <StripeCheckout 
                amount={500}
                description="$5 for 5 email credits"
                token={token=>console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn red">
                Add Credits
                </button>
            </StripeCheckout>
        )
    }
}
export default Payments