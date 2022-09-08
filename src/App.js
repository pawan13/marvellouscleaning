import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter} from "react-router-dom";
import BookingScreens from "./screens/BookingScreens.js";
import AboutScreens from "./screens/AboutScreens.js";
import ServicesScreens from './screens/ServicesScreens';
import HomeScreens from './screens/HomeScreens';
import MainScreen from './screens/MainScreen';

function App() {
  return (
    <>
    <div>
     <Navbar/>
     

     <BrowserRouter>
     <Routes>
       <Route path="/bookingscreens" element={<BookingScreens/>}></Route>
        <Route path="/about" element={<AboutScreens/>}></Route> 
        <Route path="/services" element={<ServicesScreens/>}></Route>
        <Route path="/home" element={<HomeScreens/>}></Route>
        <Route path="/" element={<MainScreen/>}></Route>
        
     </Routes>
     </BrowserRouter>
     
     {/* This navbar is from Navbarmarvellous.js in components */}
     
    </div>
    <footer className='text-center'>
      <h5>Contact us</h5>
      <h7>MobileNumber: 0413173626 / 0403939483</h7><br/>
      <h7>Email:Pawan@Marvellouscleaningservices.com.au</h7><br/>
      <h7>Address: 11 Kalianna Street Harrison 2914</h7>
    </footer>
    </>
  );
}

export default App;
