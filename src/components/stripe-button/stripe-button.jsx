import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ILoy7KwdxRbgIUg4iRecFzgbAGT4BLiwA2UH7LZZuEc8YkWYSa6EHL5ZJyEHOGcZwUtqdsEM8szTkQyUg8ueHaD00CNoi1a0P';

    const onToken = token => {
        console.log(token);
        alert('Payment successful!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.' 
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;