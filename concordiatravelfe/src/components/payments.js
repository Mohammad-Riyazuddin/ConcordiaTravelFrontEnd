import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import base_url from "../api/bootapi";

const Payments = () => {
    const location = useLocation();
    const selectedItem = location.state;

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            console.log("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            console.log(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>{selectedItem.name}</h3>
                    <h5>$ {selectedItem.bookingCost}</h5>
                </div>
            </div>
            <form action={`${base_url}/stripe/create-checkout-session/18`} method="POST">
                <button type="submit">
                    Checkout
                </button>
            </form>
        </section>
    );
};

export default Payments;
