import React, {useState} from 'react'
import Head from 'next/head';
import Script from 'next/script'
export default function LogicWheather({children, data}) {
    const [stripe,
        setStripe] = useState(null)
    return (
        <React.Fragment>
            <Head>
                <title>Wheather</title>
            </Head>
            <div>
                {children}
            </div>
            <Script
                id="stripe-js"
                src="https://js.stripe.com/v3/"
                onLoad={() => {
                setStripe({
                    stripe: window.Stripe('pk_test_12345')
                })
            }}/>
        </React.Fragment>
    )
}