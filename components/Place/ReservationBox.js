import { FaChevronDown } from 'react-icons/fa'
import Separator from '../fragments/Separator'
import GuestsSelector from '../fragments/GuestsSelector'
import Rating from '../fragments/Rating'
import { useReservationDetails } from '../../context/ReservationDetailsContext'
import Dropdown from '../fragments/Dropdown'

function ReservationBox({
    pricePerNight,
    checkinDate,
    reserveAction,
    maxGuestNumber,
    checkoutDate,
    reviewsCount,
    handleReviewsClick,
    numberOfNights,
    totalPrice,
    rates,
    showCalendar,
}) {
    const { adultsCount, childrenCount, infantsCount } = useReservationDetails()

    const totalGuestCount = adultsCount + childrenCount

    return (
        <div className='border border-grey-light rounded-lg shadow-md m-4 p-6'>
            <div className='flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div>
                        <span className='font-bold'>${pricePerNight} </span>
                        <span>night</span>
                    </div>
                    <div className='flex flex-row mb-4 gap-1'>
                        <Rating rates={rates} />
                        {rates?.length 
                            ?   <>
                                    <span>&#8226;</span>
                                    <span
                                        onClick={handleReviewsClick}
                                        className='text-grey underline decoration-1 underline-offset-2 cursor-pointer'
                                    >
                                        {reviewsCount}
                                    </span>
                                </>
                            : null
                        }
                        
                    </div>
                </div>
                <div className='mb-2 border border-grey rounded-lg cursor-pointer'>
                    <div
                        className='flex flex-row text-sm'
                        onClick={showCalendar}
                    >
                        <div className='flex flex-col p-2 w-1/2 border-r border-grey'>
                            <span className=''>Check in</span>
                            <span>{checkinDate}</span>
                        </div>
                        <div
                            className='flex flex-col p-2 w-1/2'
                            onClick={showCalendar}
                        >
                            <span>Checkout</span>
                            <span>{checkoutDate}</span>
                        </div>
                    </div>
                    <Dropdown
                        button={
                            <div className='inline-flex flex-row justify-between items-center w-full p-2 border-t border-grey text-sm'>
                                <div className='flex flex-col'>
                                    <span className='flex justify-start'>
                                        Guests
                                    </span>
                                    {totalGuestCount > 0 ? (
                                        <span className='text-xs'>
                                            {totalGuestCount}{' '}
                                            {totalGuestCount > 1
                                                ? 'guests'
                                                : 'guest'}
                                            {infantsCount
                                                ? ', ' +
                                                  infantsCount +
                                                  ' infants'
                                                : null}
                                        </span>
                                    ) : (
                                        <span className='text-xs'>
                                            Add guests
                                        </span>
                                    )}
                                </div>
                                <>
                                    <FaChevronDown />
                                </>
                            </div>
                        }
                        items={
                            <>
                                <GuestsSelector
                                    maxGuestNumber={maxGuestNumber}
                                />
                                <span className='text-xs'>
                                    This place has a maximum of {maxGuestNumber}{' '}
                                    guests, not including infants.
                                </span>
                            </>
                        }
                    />
                </div>
                {numberOfNights ? (
                    <>
                        <div className='my-2 flex flex-col'>
                            <button
                                onClick={reserveAction}
                                className='bg-pink rounded-lg py-3 text-white font-bold'
                            >
                                Reserve
                            </button>
                            <span className='flex justify-center my-4 text-sm text-grey'>
                                You wont be charged yet
                            </span>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <span className='underline decoration-1'>
                                ${pricePerNight} x ${numberOfNights} nights
                            </span>
                            <span>${totalPrice}</span>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span className='underline decoration-1'>
                                Service fee
                            </span>
                            <span>$0</span>
                        </div>
                        <Separator />
                        <div className='flex justify-between mt-4 mb-2 font-bold'>
                            <span>Total before taxes</span>
                            <span>${totalPrice}</span>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default ReservationBox
