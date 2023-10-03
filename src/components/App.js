import React from 'react'
import '../styles/App.css';
import Nav from "./Nav";
import Movies from './Movies';
import Genres from './Genres';
import MovieCard from './MovieCard';
import SignUp from './SignUp';
import SeatBooking from './SeatBooking';
import Checkout from './Checkout';
import Login from './Login';
import Wishlist from './Wishlist';
import AllRoutes from '../Routes/AllRoutes';
import BookingConfirmation from './BookingConfirmation';

const App = () => {


  return (
    <div id="main">
      {/* <Nav /> */}
      <AllRoutes />
      {/* <Movies /> */}
      {/* <MovieCard /> */}
      {/* <SignUp/> */}
      {/* <SeatBooking /> */}
      {/* <Checkout /> */}
      {/* <Login /> */}
      {/* <Wishlist /> */}
      {/* <BookingConfirmation/> */}
    </div>
  )
}


export default App;



// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

// import Movies from './Movies';
// import Login from './Login';
// import SignUp from './SignUp';
// import SeatBooking from './SeatBooking';
// import Checkout from './Checkout';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Movies} />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//         <PrivateRoute path="/seatbooking" component={SeatBooking} />
//         <PrivateRoute path="/checkout" component={Checkout} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;