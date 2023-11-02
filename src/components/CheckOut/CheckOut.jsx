import React from "react";
import { Payment } from "./Payment";
import { Summary } from "./Summary";
import { NavLink } from "react-router-dom";

export function CheckOut() {
  const ticketDetails = JSON.parse(sessionStorage.getItem("BookingDetails"));
  return (
    <div className="check-out">
      <NavLink to="/">
        <button>Back</button>
      </NavLink>
      <h1 className="checkout-heading">Checkout</h1>
      <div className="wraper-checkout">
        <Summary BookingDetails={ticketDetails} />
        <Payment />
      </div>
    </div>
  );
}
