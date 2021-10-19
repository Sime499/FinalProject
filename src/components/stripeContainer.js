import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../Display/PaymentForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(
  "pk_test_51JlzBFCtDai4X8WKV1jVdxghyVrStrSYn6JiAqJjtEVWpcmtBNuId8ZCgHpRxuckqCVkamfX9IGepJBh2CDGzUhT00yFQicNfk"
);

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}
