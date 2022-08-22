import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter} from "react-router-dom";
import BookingScreens from "./screens/BookingScreens.js"

function App() {
  return (
    <div >
     <Navbar/> 

     <BrowserRouter>
     <Routes>
       <Route path="/bookingscreens" element={<BookingScreens/>}>

       </Route>
     </Routes>
     </BrowserRouter>
     
     {/* This navbar is from Navbarmarvellous.js in components */}
    </div>
  );
}

export default App;
