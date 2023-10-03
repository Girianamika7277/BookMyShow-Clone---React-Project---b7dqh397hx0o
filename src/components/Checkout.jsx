import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Checkout.css';
import Nav from "./Nav";

const Checkout = () => {

    const bookingData = JSON.parse(localStorage.getItem('bookingDataValue'))
    const movieSelected = JSON.parse(localStorage.getItem('currentMovieBooking'));
    const moviePrice = JSON.parse(localStorage.getItem('moviePrice'));
    const convenienceFee = bookingData.seat.length * moviePrice * 1.75 / 100;
    const totalPrice = bookingData.seat.length * moviePrice + convenienceFee;

    const navigate = useNavigate();

    const paymentButtonHandler = (e) => {
        e.preventDefault();
        navigate('/bookingconfirmation');
    }
    const backButtonHandler = () => {
        navigate('/seatbooking');
    }

    return (
        <>
            <Nav />
            <div className="checkout-container" >
                <button type="submit" onClick={backButtonHandler} >Back</button>
                <div className="checkout-details" >
                    <div className="checkout-summary" >
                        <h1>Summary</h1>
                        <h2>{movieSelected.title}</h2>
                        <div className="ticket-type" >
                            <p>Classic Ticket</p>
                            <p>&#8377; <span>{moviePrice}</span></p>
                        </div>
                        <div className="noOfTicket" >
                            <p>Number of tickets</p>
                            <p>{bookingData.seat.length}</p>
                        </div>
                        <div className="convenience" >
                            <p>Convenience Fee (1.75%)</p>
                            <p>&#8377; <span>{convenienceFee.toFixed(2)}</span></p>
                        </div>
                        <hr />
                        <div className="totalamount" >
                            <p>Sub total</p>
                            <p>&#8377; <span>{totalPrice.toFixed(2)}</span></p>
                        </div>
                    </div>
                    <div className="checkout" >
                        <h1>Checkout</h1>
                        <form onSubmit={paymentButtonHandler} >
                            <h2>Payment</h2>
                            <div className="user-details" >
                                <div>
                                    <label for="firstname" >First Name</label>
                                    <input type="text" id="firstname" required />
                                </div>
                                <div>
                                    <label for="lastname" >Last Name</label>
                                    <input type="text" id="firstname" required />
                                </div>
                                <div>
                                    <label for="email" >Email</label>
                                    <input type="email" id="email" placeholder="you@example.com" required />
                                </div>
                            </div>
                            <hr className="line" />
                            <div className="cardtype" >
                                <input type="radio" id="creditcard" value='debit' name="paymentMode" required />
                                <label for="creditcard" >Credit Card</label>
                                <input type="radio" id="debitcard" value='debit' name="paymentMode" required />
                                <label for="debitcard" >Dedit Card</label>
                            </div>
                            <label for="cardname" >Name on Card</label>
                            <input type="text" id="cardname" required />
                            <p>Full name as displayed on card</p>
                            <label for="cardnumber" >Credit Card Number</label>
                            <input id="cardnumber" type="tel" pattern="[0-9\s]{16}" maxLength="16" placeholder="xxxxxxxxxxxxxxxx" required />
                            <label for="expiry" >Expiration</label>
                            <input type="umonth" id="expiry" maxLength='5' placeholder="xx/xx" required />
                            <label for="cvv" >CVV</label>
                            <input type="tel" id="cvv" maxLength='3' required />
                            <button type="submit" >Proceed to pay</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;