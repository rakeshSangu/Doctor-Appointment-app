import "./style.css"

import { useParams } from "react-router-dom"
import { useState,useEffect, useContext } from "react";
import Modal from 'react-modal';
import  {v4 as uuid} from "uuid"


import Header from "../Header";
import FooterSection from "../FooterSection";

import bookingContext from "../../context/appointmentsContext";


   

//API data for replecating as from backend
const getApiDummyData = () => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const timeSlotsPool = [
    "9:00 AM", "10:30 AM", "12:00 PM",
    "2:00 PM", "3:30 PM", "4:00 PM", "5:30 PM"
    ];

    function getRandomTimeSlots() {
    const shuffled = [...timeSlotsPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
    }

    function getRandomDaysSchedule() {
    const shuffledDays = [...weekdays].sort(() => 0.5 - Math.random());
    return [
        {
        day: shuffledDays[0],
        timeSlots: getRandomTimeSlots(),
        },
        {
        day: shuffledDays[1],
        timeSlots: getRandomTimeSlots(),
        },
    ];
    }
    const doctors = Array.from({ length: 30 }, (_, i) => ({
                id: i + 1,
                name: `Dr. ${["Rakesh", "Meera", "Vikram", "Anjali", "Rajesh", "Sneha", "Rohit", "Priya", "Karan", "Ishita",
                            "Neeraj", "Divya", "Harsh", "Riya", "Yash", "Pooja", "Amit", "Nisha", "Manav", "Kavya",
                            "Siddharth", "Tanya", "Rahul", "Shreya", "Nitin", "Lakshmi", "Arjun", "Simran", "Varun", "Neha"][i]}`,
                gender: ["Male", "Female"][i % 2],
                specialization: ["Cardiologist", "Dermatologist","Pediatrician","Cardiologist","Neurologist","Orthopedic","ENT" ,"Pediatrician","Orthopedic", "Neurologist", "ENT","Dermatologist"][i % 12],
                availabilityStatus: ["Available Today","Available Today", "Fully Booked", "On Leave"][i % 4],
                experience: `${Math.floor(Math.random() * 5 + 5)} years`,
                bio: `Expert in treating ${["heart", "skin", "bone", "child", "brain", "ear-nose-throat"][i % 6]} related conditions.`,
                qualification: ["MBBS", "MBBS, MD", "MBBS, MS"][i % 3],
                languagesSpoken: ["English", "Hindi", "Telugu", "Kannada", "Tamil", "Bengali"].slice(0, (i % 4) + 2),
                location: ["Hyderabad", "Delhi", "Mumbai","Bengaluru","Chennai","Delhi","Kolkata","Mumbai", "Bengaluru","Hyderabad", "Kolkata","Chennai"][i % 12],
                address: `${["Sunshine Clinic", "Care Plus", "City Health Center", "MediLife", "HealthFirst", "LifePoint"][i % 6]}, Street No. ${i + 1}, ${["Hyderabad", "Delhi", "Mumbai", "Bengaluru", "Chennai", "Kolkata"][i % 6]}, India - 5000${i}`,
                contact: {
                    email: `doctor${i + 1}@clinicmail.com`,
                    phone: `+91-98765${10000 + i}`,
                },
                rating: (Math.random() * 1.5 + 3.5).toFixed(1),
                consultationFee: 300 + (i % 5) * 100,
                availabilitySchedule: getRandomDaysSchedule(),
                services: ["General Consultation", "ECG", "Blood Pressure Monitoring", "X-Ray", "Lab Tests"].slice(0, (i % 3) + 2),
                awards: ["Best Doctor Award 2020", "Patient Choice Award", "Top Specialist 2022"].slice(0, (i % 2) + 1),
                }));
    return doctors
}

const doctors =  getApiDummyData()


const apiStatusObj = {
    pending: "PENDING",
    success: "SUCCESS",
    failure: "FAILURE"
}

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const DoctorDetails = () => {
    const [apiStatus,setApiStatus] = useState(apiStatusObj.pending)
    const [doctorInfo,setDoctorInfo] = useState({})

    const [patientData,setPatientData] = useState({
        patientName: "",
        age: "",
        patientGender: "",
        mobile: "",
        selectedDay: "",
        selectedTime: "",
        reason: ""
    })
    const [errorMessage,setErrorMessage] = useState("")
    const [bookingConfirm,setBookingConfirm] = useState(false)


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    const {id} = useParams()
    useEffect(() => {
        const data = doctors.filter(each => each.id===parseInt(id))
        setTimeout(()=>{
            setDoctorInfo(data[0])
            setApiStatus(apiStatusObj.success)
        },500)
        window.scrollTo(0, 0);
    })

    const renderLoadingView = () => {
        return (
            <p className="loading-para">Loading...please wait...</p>
        )
    }

    const renderFailureView = () => {
        return (
            <div className="failure-container">
                <img alt="failure-view-image" className="failure-image" src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1754130017/download_j5qrgu.png" />
                <p className="failure-para">Request failure, Please try again....</p>
            </div>
        )
    }

    const onChangeDay = (event) => {
        setPatientData({...patientData,selectedDay: event.target.value})
    }

    const onChangeTime= (event) => {
        setPatientData({...patientData,selectedTime: event.target.value})
    }

    const closeForm = () => {
        closeModal(true)
        setPatientData({
                patientName: "",
                age: "",
                patientGender: "",
                mobile: "",
                selectedDay: "",
                selectedTime: "",
                reason: ""
        })
        setErrorMessage("")
    }
    
    const onChangeName = (event) => {
        setPatientData({...patientData,patientName: event.target.value})
    }

    const onChangeAge = (event) => {
        setPatientData({...patientData,age: event.target.value})
    }

    const onChangeGender = (event) => {
        setPatientData({...patientData,patientGender: event.target.value})
    }

    const onChangeMobile = (event) => {
        setPatientData({...patientData,mobile: event.target.value})
    }

    const onChangeReason = (event) => {
        setPatientData({...patientData,reason: event.target.value})
    }


    const {addAppointment} = useContext(bookingContext)
    const storeInContextList = (patient,doctorId,doctor) => {
        addAppointment({
            bookingId: uuid(),
            doctorId: doctorId,
            doctorName: doctor,
            patientData: patient
        })
    }

   

    const onSubmitForm = (event) => {
        event.preventDefault()
        const {patientName,patientGender,age,mobile,selectedDay,selectedTime} = patientData
        const mobileRegex = /^\d{10}$/;
        if(patientName.length>0 && patientGender!=="" &&
            age!=="" && mobileRegex.test(mobile) && selectedDay!=="" && selectedTime !== ""){
                // setBookingConfirm(true)
                storeInContextList(patientData,doctorInfo.id,doctorInfo.name)
                setPatientData({
                    patientName: "",
                    age: "",
                    patientGender: "",
                    mobile: "",
                    selectedDay: "",
                    selectedTime: "",
                    reason: ""
                })
                setBookingConfirm(true)
                setErrorMessage("")
                closeModal(true)
        }else{
            setErrorMessage("Please Enter Valid Details...")
            setBookingConfirm(false)
        }

    }

    const renderDoctorDetails = () => {
        const {name,gender,specialization,availabilityStatus,experience,bio,
            languagesSpoken,address,rating,
            availabilitySchedule,services,awards,qualification} = doctorInfo 

        let availabilityStyleClass;
        if(availabilityStatus === "Available Today"){
            availabilityStyleClass="available-2"
        }else if(availabilityStatus === "Fully Booked"){
            availabilityStyleClass="full-2"
        }else{
            availabilityStyleClass="leave-2"
        }
        const {patientName,patientGender,age,mobile,selectedDay,selectedTime,reason} = patientData
        return (<div className="details-background-container">
                 <img className="doctor-item-image-2" alt={name} src={
                    gender==="Male" ? 
                    "https://res.cloudinary.com/dct2c9u8o/image/upload/v1754153828/Screenshot_2025-08-02_222647_xoxuty.png" 
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkXw8SYElaFf0KzvCQ33oPVvCoNtV-2Rl3g&s"} 
                    />
                 <div className="details-section">
                    <p className="name">{name}, <span className="spectialization">{specialization}</span></p>
                    <p className="bio-para">{bio}</p>
                    <ul>
                        <li className="side-heading">
                            Qualification: <span className="value">{qualification}</span>
                        </li>
                        <li className="side-heading">
                            Experience: <span className="value">{experience}</span>
                        </li>
                        <li className="side-heading">
                            Rating: <span className="value">{rating}/5</span>
                        </li>
                        <li className="side-heading">
                            Address: <span className="value">{address}</span>
                        </li>
                        <li>
                            <p className="side-heading">Availablity-Status: <span className={`value-status ${availabilityStyleClass}`}> {availabilityStatus}</span></p>
                        </li>
                        <li className={`next-week-booking-para ${availabilityStatus === "Available Today" ? "hide-message" : ""}`}>
                            Book for next available Schedule...!!!
                        </li>
                    </ul>
    
                    <div className="time-container">
                        <ul className="schedule-list-container">
                            <p className="slots-title">Available Time Slots</p>
                            {availabilitySchedule.map(each => (
                                <li key={each.day}>
                                    {each.day}: {each.timeSlots.join(" | ")}
                                </li>
                            ))}

                        </ul>
                    </div>
                    <button onClick={openModal} className="book-button">{bookingConfirm ? "BOOK ANOTHER" : "BOOK NOW"}</button>
                    {bookingConfirm && <p className="success-para">Your appointment has been successfully booked!...</p>}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                       
                    >
                        <form onSubmit={onSubmitForm} className="form-ele">
                             <p className="form-title">Enter Details</p>
                            <div className="form-input-container">
                                <label htmlFor="name-input" className="label-ele">Patient Name</label>
                                <input onChange={onChangeName} value={patientName} required placeholder="Enter patient name" id="name-input" />
                            </div>
                            <div className="form-input-container">
                                <p className="label-ele">Gender</p>
                                <div className="radio-group-container">
                                    <div className="radio-section">
                                        <input onChange={onChangeGender} value="Male" checked={patientGender==="Male"}  required id="male"  name="gender" type="radio" />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="radio-section">
                                        <input onChange={onChangeGender} value="Female" checked={patientGender==="Female"} required id="female" name="gender" type="radio" />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-input-container">
                                <label className="label-ele">Age</label>
                                <input onChange={onChangeAge} value={age} required placeholder="Enter age" max={100} type="number" />
                            </div>
                            <div className="form-input-container">
                                <label className="label-ele">Mobile</label>
                                <input onChange={onChangeMobile} value={mobile} required placeholder="Type mobile number"  pattern="[0-9]{10}" type="tel" />
                            </div>
                            <div className="form-input-container">
                                <label className="label-ele">Select Day</label>
                                <select required value={selectedDay} onChange={onChangeDay}>
                                    <option value="">--Choose Day--</option>
                                    {availabilitySchedule.map((each,i) => (
                                        <option key={i}>{each.day}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-input-container">
                                <label className="label-ele">Select Time</label>
                                <select required onChange={onChangeTime} value={selectedTime}>
                                    <option value="">--Choose Time--</option>
                                    {selectedDay !== "" && 
                                        availabilitySchedule.find((each) => each.day === selectedDay)?.timeSlots.map((each,i) => (
                                        <option value={each} key={i}>{each}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-input-container">
                                <label className="label-ele">Reason for Appointment (Optional)</label>
                                <textarea onChange={onChangeReason} value={reason} rows={2}>
                                </textarea>
                            </div>
                            <div className="form-input-container buttons-container">
                                <button onClick={onSubmitForm} type="submit" className="form-submit-button">submit</button>
                                <button onClick={closeForm} className="form-submit-button close-btn">Close</button>
                            </div>
                            <p className="error-msg-para">{errorMessage}</p>
                        </form>
                    </Modal>
                 </div>
                <details>
                        <summary>
                            More Info about doctor
                        </summary>
                         <ul className="more-info-container">
                            <li className="side-heading">
                                Languages-Spoken: {languagesSpoken.map(each => (
                                        <span key={each} className="value">{each}, </span> 
                                ))}
                            </li>
                            <li className="side-heading">Services: {
                                services.map(each => (
                                    <span key={each} className="value">{each}, </span>
                                ))
                            }</li>
                             <li className="side-heading">Awards: {
                                awards.map(each => (
                                    <span key={each} className="value">{each}, </span>
                                ))
                            }</li>
                         </ul>
                        
                </details>
    
        </div>)
    }


    const renderDetailsView = () => {
        switch(apiStatus){
            case apiStatusObj.pending:
                return renderLoadingView()
            case apiStatusObj.failure:
                return renderFailureView()
            case apiStatusObj.success:
                return renderDoctorDetails()
            default:
                return null
        }
    }

    return (
        <main className="details-view-container">
            <Header />
            {renderDetailsView()}
            <FooterSection/>
        </main>
    )
}
export default DoctorDetails