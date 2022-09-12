import { format, addDays, differenceInDays } from 'date-fns'
import { useState, createContext, useContext } from 'react'

const DatesContext = createContext()

export const useDates = () => useContext(DatesContext)

export const DatesContextProvider = ({ children }) => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    const checkinDate = format(dateRange[0].startDate, "MM/dd/yyyy")
    const checkoutDate = format(dateRange[0].endDate, "MM/dd/yyyy")
    const numberOfNights = differenceInDays(new Date(checkoutDate), new Date(checkinDate))

    return (
        <DatesContext.Provider value={{ dateRange, setDateRange, checkinDate, checkoutDate, numberOfNights }}>
            {children}
        </DatesContext.Provider>
    )
}
