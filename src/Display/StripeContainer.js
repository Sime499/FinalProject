import React from "react";
import { Element } from "@stripe/react-stripe-js";
import { loadStripe } from "stripe/stripe-js";
import PaymentForm from "../Display/PaymentForm";

const PUBLIC_KEY =
  "pk_test_51JlzBFCtDai4X8WKV1jVdxghyVrStrSYn6JiAqJjtEVWpcmtBNuId8ZCgHpRxuckqCVkamfX9IGepJBh2CDGzUhT00yFQicNfk";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
