import React from 'react';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51GZ5WWAthPctb0O5jpvB35Wp2J4TpfjB2truepjOYJwQF9UtDDtdgIK3xCInGGun03YkkktYTLGVdKM21tL0e6Eg00dAkttSBE'

    const onToken = token =>{
        console.log(token)

        axios({
            url:'payment',
            method: 'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response=>{alert('payment successfull')})
        .catch(err=>{
            console.log('Payment error:',JSON.stringify(err));
            alert('there was an issue with your test card')
        })
    }

    return ( 
        <StripeCheckout
            label="Pay Now"
            name="E-Clothing"
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
     );
}
 
export default StripeCheckOutButton;