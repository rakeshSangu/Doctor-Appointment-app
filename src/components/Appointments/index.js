import "./style.css"

import Header from "../Header"
import bookingContext from "../../context/appointmentsContext"

import { useContext } from "react"

import { useNavigate } from "react-router-dom"

const YourAppointments = () => {
    const {bookingsList} = useContext(bookingContext)

    const navigate = useNavigate()

    const onclickButton = () =>{
        navigate("/")
    }

    const renderEmptyListView = () => {
        return (
            <div className="empty-booking-container">
                <p className="empty-booking-para">No Appointments booked Yet....</p>
                <button onClick={onclickButton} className="empty-booking-button">Book Appointment now</button>
            </div>
        )
    }

    console.log(bookingsList)
    const viewAppointments = () => {
        return (
            <div className="appointments-container">
                <h1 className="appointments-heading">Your Appointments</h1>
                <ul>
                {bookingsList.map(each => (
                    <li className="book-item" key={each.bookingId}>
                        <p className="book-heading">Patient Name: <span className="book-value">{each.patientData.patientName}</span></p>
                        <p className="book-heading">Doctor Name: <span className="book-value">{each.doctorName}</span></p>
                        <p className="book-heading">Day: <span className="book-value">{each.patientData.selectedDay}</span></p>
                        <p className="book-heading">Time: <span className="book-value">{each.patientData.selectedTime}</span></p>
                    </li>
                ))}
            </ul>
            
            </div>
        )
    }

    const renderBookedAppointmentsView = () => {
        if(bookingsList.length===0){
            return renderEmptyListView()
        }else{
            return viewAppointments()
        }
    }

    return (
        <>
            <Header />
            <p>no bookings</p>
            {renderBookedAppointmentsView()}
        </>
    )
}

export default YourAppointments