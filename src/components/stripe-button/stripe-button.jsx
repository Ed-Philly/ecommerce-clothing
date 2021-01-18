import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_2lza2EGMcoX0w8BP17e4gOwi00NdNcgChl'

    const onToken = token =>{
        console.log(token)
        alert('Payment successfull');
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