import { createContext, useEffect, useState, } from "react";

export const ReservedDaysContext = createContext()

const ReservedDaysProvider = ({ children }) => {
    const [reservedDays, setReservedDays] = useState({
        roomOne: JSON.parse(localStorage.getItem('roomOne')) || [{}],
        roomTwo: JSON.parse(localStorage.getItem('roomTwo')) || [{}],
        roomThree: JSON.parse(localStorage.getItem('roomThree')) || [{}],
        roomFour: JSON.parse(localStorage.getItem('roomFour')) || [{}],
        roomFive: JSON.parse(localStorage.getItem('roomFive')) || [{}],
    })
    const [visitors, setVisitors] = useState({
        roomOne: JSON.parse(localStorage.getItem('roomOneVisitors')) || [],
        roomTwo: JSON.parse(localStorage.getItem('roomTwoVisitors')) || [],
        roomThree: JSON.parse(localStorage.getItem('roomThreeVisitors')) || [],
        roomFour: JSON.parse(localStorage.getItem('roomFourVisitors')) || [],
        roomFive: JSON.parse(localStorage.getItem('roomFiveVisitors')) || [],
    })
    const [state, setState] = useState({
        roomOne: JSON.parse(localStorage.getItem('stateroomOne')) || [],
        roomTwo: [],
        roomThree: [],
        roomFour: [],
        roomFive: [],
    })

    useEffect(() => {
        console.log("state", state)
      }, [state])

    const values = {
        reservedDays,
        setReservedDays,
        visitors,
        setVisitors,
        state, 
        setState
    }
    return <ReservedDaysContext.Provider value={values}>{children}</ReservedDaysContext.Provider>
}
export default ReservedDaysProvider