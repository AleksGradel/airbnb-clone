import { format, addDays, differenceInDays } from 'date-fns'
import { useState, createContext, useContext, useLayoutEffect, useEffect } from 'react'

const ReservationDetailsContext = createContext()

export const useReservationDetails = () => useContext(ReservationDetailsContext)

export const ReservationDetailsContextProvider = ({ children }) => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    const [adultsCount, setAdultsCount] = useState(0)
    const [childrenCount, setChildrenCount] = useState(0)
    const [infantsCount, setInfantsCount] = useState(0)

    const checkinDate = format(dateRange[0].startDate, "MM/dd/yyyy")
    const checkoutDate = format(dateRange[0].endDate, "MM/dd/yyyy")
    const numberOfNights = differenceInDays(new Date(checkoutDate), new Date(checkinDate))

    const incrementAdultsCount = () => {
        setAdultsCount(adultsCount => adultsCount + 1)
    }

    const decrementAdultsCount = () => {
        setAdultsCount(adultsCount => adultsCount - 1)
    }

    const incrementChildrenCount = () => {
        setChildrenCount(infantsCount => infantsCount + 1)
    }

    const decrementChildrenCount = () => {
        setChildrenCount(infantsCount => infantsCount - 1)
    }

    const incrementInfantsCount = () => {
        setInfantsCount(infantsCount => infantsCount + 1)
    }

    const decrementInfantsCount = () => {
        setInfantsCount(infantsCount => infantsCount -1)
    }

    const resetGuestsTotalCount = () => {
        setAdultsCount(0)
        setChildrenCount(0)
        setInfantsCount(0)
    }
    
    return (
        <ReservationDetailsContext.Provider 
            value={{ 
                dateRange,
                adultsCount,
                childrenCount,
                infantsCount,
                setDateRange, 
                checkinDate, 
                checkoutDate, 
                numberOfNights,
                incrementAdultsCount,
                decrementAdultsCount,
                incrementChildrenCount,
                decrementChildrenCount,
                incrementInfantsCount,
                decrementInfantsCount,
                resetGuestsTotalCount
                }}>
            {children}
        </ReservationDetailsContext.Provider>
    )
}
