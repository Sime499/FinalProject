import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutPage from "../Display/CheckoutPage";
import { saveShippingAddress } from "../actions/cartActions";
import "./Checkout.css";

export default function ShippingAddressPage(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!userInfo) {
    props.history.push("/signin");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [state, setState] = useState(shippingAddress.state);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, state })
    );

    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutPage step1 step2></CheckoutPage>
      <div class="row">
        <div class="col-75">
          <div class="container">
            <form onSubmit={submitHandler}>
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <i class="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="FullName"
                    placeholder="John M. Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <label for="email">
                    <i class="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label for="adr">
                    <i class="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <label for="city">
                    <i class="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  <div>
                    <div class="row">
                      <div class="col-50">
                        <label for="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="NY"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          required
                        />
                      </div>
                      <div class="col-50">
                        <label for="zip">Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="10001"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label />
                        <button className="btn3 " type="submit">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
