import {Routes, Route} from "react-router-dom"

import Home from "./components/Home";
import DoctorDetails from "./components/DoctorDetailsPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import YourAppointments from "./components/Appointments";
import NotFound from "./components/NotFound";

import bookingContext from "./context/appointmentsContext";

import { useState } from "react";

function App() {
  const [bookingsList,setBookingList] = useState([])
 
  const addAppointment = (bookingData) => {
    setBookingList([...bookingsList,bookingData])
  }

  return (
    <bookingContext.Provider value={
      {bookingsList,addAppointment}
      }>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/doctor/:id/" element={<DoctorDetails/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/your-appointments" element={<YourAppointments/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>

    </bookingContext.Provider>



    // <Routes>
    //   <Route path="/" element={<Home/>} />
    //   <Route path="/doctor/:id/" element={<DoctorDetails/>} />
    //   <Route path="/about-us" element={<AboutUs/>} />
    //   <Route path="/contact-us" element={<ContactUs/>} />
    //   <Route path="/your-appointments" element={<YourAppointments/>} />
    //   <Route path="*" element={<NotFound/>} />
    // </Routes>
  )
}

export default App;
