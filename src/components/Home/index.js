import "./style.css"

import { IoSearch } from "react-icons/io5";


import Header from "../Header"
import DoctorItem from "../DoctorItem";
import FooterSection from "../FooterSection";

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

//API data for replecating as from backend
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
            availabilitySchedule: [
                {
                day: "Monday",
                timeSlots: ["9:00 AM", "4:00 PM"],
                },
                {
                day: "Wednesday",
                timeSlots: ["10:00 AM", "3:00 PM"],
                },
            ],
            services: ["General Consultation", "ECG", "Blood Pressure Monitoring", "X-Ray", "Lab Tests"].slice(0, (i % 3) + 2),
            awards: ["Best Doctor Award 2020", "Patient Choice Award", "Top Specialist 2022"].slice(0, (i % 2) + 1),
            }));

const apiStatusObj = {
    pending: "PENDING",
    success: "SUCCESS",
    failure: "FAILURE"
}
const Home = () => {
    const [apiStatus,setApiStatus] = useState(apiStatusObj.pending)
    const [doctorsList,setDoctorsList] = useState([])
    const [userInput,setUserInput] = useState({
        searchInput: "",
        location: "",
        gender: ""
    })

    const {searchInput,location,gender} = userInput
    const filterDoctorsList = doctorsList.filter(each => (
        (each.name.toLowerCase().includes(searchInput.toLowerCase()) || 
        each.specialization.toLowerCase().includes(searchInput.toLowerCase())) &&
        (each.location.includes(location)) &&
        (each.gender.includes(gender))

        
    ))

    useEffect(() => {
        setTimeout(()=>{
            setDoctorsList(doctors)
            setApiStatus(apiStatusObj.success)
        },500)
        window.scrollTo(0, 0);
    })

    const changeInput = (event) => {
        setUserInput({...userInput,searchInput: event.target.value})
    }

    const changeLocation = (event) => {
        setUserInput({...userInput,location: event.target.value})
    }

    const changeGender = (event) => {
        setUserInput({...userInput,gender: event.target.value})
    }

    const renderLoadingView = () => {
        return (
            <p className="loading-para">Loading...please wait...</p>
        )
    }

    const renderEmptyListView = () => {
        return (
            <div className="Empty-Doctors-container">
                <p>Not Found !!!</p>
                <p>Try changing Filters....</p>
            </div>
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

    const renderDoctorsListView = () => {
        if(filterDoctorsList.length===0){
            return renderEmptyListView()
        }
        return (
            <main>
                <p className="home-bottom-section-heading">Meet Our Top-Rated Doctors</p>
                <p className="home-bottom-section-para">"Select. Schedule. Stay Healthy."</p>
                <ul className="doctors-list-container">
                    {filterDoctorsList.map(eachItem => (
                        <Link key={eachItem.id} to={`/doctor/${eachItem.id}`} className="doctor-item-link">
                            <li className="doctors-list-item">
                                <DoctorItem doctorInfo = {eachItem}/>
                            </li>
                        </Link>
                    ))}
                </ul>
            </main>
        )
    }

    const renderHomeBottomView = () => {
        switch(apiStatus){
            case apiStatusObj.pending:
                 return renderLoadingView()
            case apiStatusObj.success:
                return renderDoctorsListView()
            case apiStatusObj.failure:
                return renderFailureView()
            default:
                return null
                
        }
    }

       
 
    return (
        <>
            <Header />
            <main className="top-section">
                <img alt="doctor-image" className="home-top-image" src="https://i.pinimg.com/736x/9d/85/ef/9d85ef63db3691882dee8b0d2dd08a4c.jpg" />
                <div className="hero-section-container">
                    <h1 className="title">
                        Book Trusted Doctors Instantly
                    </h1>
                    <p className="sub-title">
                        Find specialists near you, view their profiles, and schedule your appointment online with ease.
                    </p>
                    <p className="slogon-para">
                          "Your health, our priority — just a click away."
                    </p>
                    <div className="search-filter-container">
                        <div className="input-container">
                            <input value={userInput.searchInput} onChange={changeInput} type="search" placeholder="Search by name/specialization" className="search-input" />
                            <button className="search-button">
                                <IoSearch />   
                            </button>
                        </div>
                        <div className="filter-container">
                            <select value={userInput.location} onChange={changeLocation} className="select-ele location-ele">
                                <option value="">Select Location</option>
                                <option>Hyderabad</option>
                                <option>Delhi</option>
                                <option>Mumbai</option>
                                <option>Bengaluru</option>
                                <option>Chennai</option>
                                <option>Kolkata</option>
                            </select>
                             <select value={userInput.gender} onChange={changeGender} className="select-ele">
                                <option value="" >Select Doctor Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>

            </main>
            {renderHomeBottomView()}
            <FooterSection />
        </>
    )
}
export default Home