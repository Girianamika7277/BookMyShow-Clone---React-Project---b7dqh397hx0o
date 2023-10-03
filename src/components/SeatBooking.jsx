import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SeatBooking.css"
import Nav from "./Nav";

const initialState = {
    cinema: "",
    date: "",
    time: "",
    seat: []
}

const SeatBooking = () => {

    const [selectedSeat, setSelectedSeat] = useState([]);
    const [selectedCinemaValue, setSelectedCinemaValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [bookingData, setBookingData] = useState(initialState);

    const navigate = useNavigate();

    const onSeatClick = (index) => {
        let tempArray = [...selectedSeat];
        let seatIndex = tempArray.indexOf(index);
        if (seatIndex > -1) {
            tempArray.splice(seatIndex, 1);
        } else {
            tempArray.push(index);
        }
        setSelectedSeat(tempArray);
    };
    const handleCinemaChange = (event) => {
        setSelectedCinemaValue(event.target.value);
    };

    const dateHandler = (event) => {
        setDateValue(event.target.value);
    }
    const handleTimeChange = (event) => {
        setTimeValue(event.target.value);
    };

    const bookingButtonHandler = () => {
        if (selectedSeat.length !== 0 && selectedCinemaValue && dateValue && timeValue) {
            bookingData.cinema = selectedCinemaValue;
            bookingData.date = dateValue;
            bookingData.time = timeValue;
            bookingData.seat = selectedSeat;
            setBookingData(bookingData);
            localStorage.setItem('bookingDataValue', JSON.stringify(bookingData));
            navigate('/checkout');
        }
        else {
            alert('Please fill all the field')
        }
    }

    return (
        <>
            <Nav />
            <div className="seatBooking-container" >
                <div>
                    <h2>Book Ticket</h2>
                </div>
                <div className="booking-details" >
                    <div className="cinema" >
                        <label for="cinema-name" >Cinema</label>
                        <select id="cinema-name" value={selectedCinemaValue} onChange={handleCinemaChange} >
                            <option value="" >Select Cinema</option>
                            <option value="Wave Lucknow" >Wave Lucknow</option>
                            <option value="Cinepolis Gomti Nagar" >Cinepolis Gomti Nagar</option>
                            <option value="PVR Singapur Mall, Gomti Nagar" >PVR Singapur Mall, Gomti Nagar</option>
                        </select>
                    </div>
                    <div className="booking-date" >
                        <label for="date" >Booking Date</label>
                        <input type="date" id="date" value={dateValue} onChange={dateHandler} />
                    </div>
                    <div className="booking-time" >
                        <label for="cinema-time" >Time</label>
                        <select id="cinema-time" value={timeValue} onChange={handleTimeChange} >
                            <option value="" >Select Time</option>
                            <option value="9:30" >9:30</option>
                            <option value="12:30" >12:30</option>
                            <option value="15:30">15:30</option>
                            <option value="18:30">18:30</option>
                            <option value="21:30">21:30</option>
                        </select>
                    </div>
                </div>
                <div className="screen-container" >
                    <div className="na" >
                        <p></p>
                        <span>N/A</span>
                    </div>
                    <div className="selected" >
                        <p></p>
                        <span>Selected</span>
                    </div>
                    <div className="occupied" >
                        <p></p>
                        <span>Occupied</span>
                    </div>
                </div>
                <div className="screen" >
                </div>
                <div className="seats" >
                    {[...Array(10)].map((el, i) => (
                        <div key={i}>
                            {[...Array(10)].map((el, j) => (
                                <p className={selectedSeat.indexOf(i * 10 + j) > -1 ? 'selected-seat' : ''}
                                    onClick={() => onSeatClick(i * 10 + j)} key={j}>{`${i}-${j}`}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="booking-btn" >
                    <button type="submit" onClick={bookingButtonHandler} >Submit</button>
                </div>
            </div>
        </>
    )
}

export default SeatBooking;