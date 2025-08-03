import "./style.css"

import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


const DoctorItem = (props) => {
    const {doctorInfo} = props
    const {name,gender,location,qualification,specialization,rating,availabilityStatus} = doctorInfo
    let styleClassName;
    if(availabilityStatus === "Available Today"){
        styleClassName="available"
    }else if(availabilityStatus === "Fully Booked"){
        styleClassName="full"
    }else{
        styleClassName="leave"
    }

    return (
        <>
            <img className="doctor-item-image" alt={name} src={
                gender==="Male" ? 
                "https://res.cloudinary.com/dct2c9u8o/image/upload/v1754153828/Screenshot_2025-08-02_222647_xoxuty.png" 
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkXw8SYElaFf0KzvCQ33oPVvCoNtV-2Rl3g&s"} 
            />
            <p className="doctor-item-name">{name}</p>
            <p className="doctor-item-info">
                <span>{qualification} | {specialization} | {rating} <FaStar className="star-icon" /> </span>
            </p>
            <p className="location-para">
                <CiLocationOn className="location-icon" />
                <span>{location}</span>
            </p>
            <span className={`avalaible-span ${styleClassName}`} >{availabilityStatus}</span>
        </>
    )
}

export default DoctorItem