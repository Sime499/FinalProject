import React, { useState } from "react";
import CheckoutPage from "../Display/CheckoutPage";
import { useDispatch, useSelector } from "react-redux";
import { savePayment } from "../actions/cartActions";
import "./Checkout.css";

export default function PaymentPage(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [CardName, setCardName] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [ExpMonth, setExpMonth] = useState("");
  const [ExpYear, setExpYear] = useState("");
  const [Cvv, setCvv] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(CardName, CardNumber, Cvv, ExpMonth, ExpYear));
    props.history.push("/PlaceOrder");
  };

  return (
    <div>
      <CheckoutPage step1 step2 steps3></CheckoutPage>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-discover"></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="CardName"
                    placeholder="John More Doe"
                    value={CardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                  />
                  <label for="CcNum">Credit card number</label>
                  <input
                    type="text"
                    id="CcNum"
                    name="CardNumber"
                    placeholder="1111-2222-3333-4444"
                    value={CardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                  <label for="ExpMonth">Exp Month</label>
                  <input
                    type="text"
                    id="ExpMonth"
                    name="ExpMonth"
                    placeholder="September"
                    value={ExpMonth}
                    onChange={(e) => setExpMonth(e.target.value)}
                    required
                  />

                  <div className="row">
                    <div classClass="col-50">
                      <label for="ExpYear">Exp Year</label>
                      <input
                        type="text"
                        id="ExpYear"
                        name="ExpYear"
                        placeholder="2018"
                        value={ExpYear}
                        onChange={(e) => setExpYear(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                        value={Cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="SameAdr" />{" "}
                Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
