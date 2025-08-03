import { createContext } from "react";

const bookingContext = createContext({
    bookingsList: [],
    addAppointment: () => {}
})

export default bookingContext

