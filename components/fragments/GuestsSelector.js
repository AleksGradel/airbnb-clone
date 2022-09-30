import { FaPlus, FaMinus } from 'react-icons/fa'
import { useReservationDetails } from '../../context/ReservationDetailsContext'

const SelectorRow = ({
    label,
    description,
    count,
    incrementAction,
    decrementAction,
    maxCount,
}) => {
    return (
        <div className='flex my-4'>
            <div className='w-1/2 flex flex-col'>
                <span className='font-bold'>{label}</span>
                <span>{description}</span>
            </div>
            <div className='w-1/2 flex items-center'>
                <button
                    className='border border-grey disabled:border-grey-light text-grey disabled:text-grey-light rounded-full p-2 text-sm'
                    onClick={decrementAction}
                    disabled={count === 0}>
                    <FaMinus />
                </button>
                <span className='mx-4'>{count}</span>
                <button
                    className='border border-grey disabled:border-grey-light text-grey disabled:text-grey-light rounded-full p-2 text-sm'
                    onClick={incrementAction}
                    disabled={maxCount}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

const GuestsSelector = ({ maxGuestNumber }) => {
    const {
        adultsCount,
        childrenCount,
        infantsCount,
        incrementAdultsCount,
        decrementAdultsCount,
        incrementChildrenCount,
        decrementChildrenCount,
        incrementInfantsCount,
        decrementInfantsCount,
    } = useReservationDetails()

    const checkGuestLimit = Boolean(
        adultsCount + childrenCount === maxGuestNumber
    )

    return (
        <div>
            <SelectorRow
                label='Adults'
                description='Age 13+'
                count={adultsCount}
                decrementAction={() => decrementAdultsCount()}
                incrementAction={() => incrementAdultsCount()}
                maxCount={checkGuestLimit}
            />
            <SelectorRow
                label='Children'
                description='Ages 2-12'
                count={childrenCount}
                decrementAction={() => decrementChildrenCount()}
                incrementAction={() => incrementChildrenCount()}
                maxCount={checkGuestLimit}
            />
            <SelectorRow
                label='Infants'
                description='Under 2'
                count={infantsCount}
                decrementAction={() => decrementInfantsCount()}
                incrementAction={() => incrementInfantsCount()}
            />
        </div>
    )
}

export default GuestsSelector
