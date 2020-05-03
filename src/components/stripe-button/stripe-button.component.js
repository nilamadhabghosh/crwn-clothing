import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // Stripe wants the price to be in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_s2lF0vxTBT0lKVrEusKsgXfE00xnFfdLrM';

    const onToken = token => {
        console.log(token);
        alert("payment Successful!");
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
