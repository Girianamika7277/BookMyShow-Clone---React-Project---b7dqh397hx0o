import React, { useContext, useState } from "react";
import "./TicketBooking.css";
import { UserContex } from "../../Home";
import { NavLink } from "react-router-dom"
import { Overlay } from "../../OverLay/Overlay";

export function TheaterSeats(props) {
    const price = useContext(UserContex)
    const [flag,setFlag] = useState(false);
  let styleSeat = props.Seats.map((item, index, arr) => {
    return arr.map((c, i) => {
      return {
        seatNo: `${item}-${i}`,
        flag: false,
      };
    });
  });

  let seatSelected = [];

  const [seatState, setSeatState] = useState([]);
  const [seatSelect, setSeatSelect] = useState(styleSeat);
  const seatsSection = (arr, row) => {
    return arr.map((item, index) => {
      return (
        <div
          id={`${row}-${index}`}
          className={`seat ${
            seatSelect[row][index].flag ? "seatSelect-on" : ""
          }`}
          key={"seat" + row + "" + index}
          onClick={(e) => {
            SeatNumber(`${row}-${index}`, e.target);
          }}
        >{`${row}-${index}`}</div>
      );
    });
  };
  const SeatNumber = (num, arg2) => {
    let seatSelect1 = seatSelect.map((i, j, arr) => {
      return i.map((l, m) => {
        return l.seatNo === num ? { ...l, flag: !l.flag } : l;
      });
    });
    setSeatSelect(seatSelect1);
    setSeatState([...seatState, num]);
  };

  const submitSeatSelected = () => {
    console.log(typeof(props.BookingDate))
    // if(props.BookingDate === null){
    //   setFlag(true);
    //   return;
    // }

    const ticketDetails = {
        seats : seatState,
        noSeats : seatState.length,
        price,
        name : props.movieName,
        BookingDate : props.BookingDate
    }
    sessionStorage.setItem('BookingDetails',JSON.stringify(ticketDetails))
}

  const overlayFlagCheck = () => {
    setFlag(false);
  }

  return (
    <>
    <div className="seats-grid">
      <div className="seat-row">{seatsSection(props.Seats, 0)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 1)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 2)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 3)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 4)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 5)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 6)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 7)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 8)}</div>
      <div className="seat-row">{seatsSection(props.Seats, 9)}</div>
      <NavLink to="/checkout">
      <button className="btn-seat" onClick={submitSeatSelected}>Submit</button>
      </NavLink>
      </div>
    </>
  );
}
