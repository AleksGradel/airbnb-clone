import { FaStar } from 'react-icons/fa'
import Separator from '../fragments/Separator'

function ReservationBox({ pricePerNight, checkinDate, checkoutDate, numberOfNights, totalPrice }) {
  return (
    <div className='border border-grey-light rounded-lg shadow-md m-4 p-6'>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between">
            <div>
                <span className='font-bold'>${pricePerNight} </span>
                <span>night</span>
            </div>
            <div className='flex flex-row mb-4'>
                <span className='flex flex-row items-center font-bold'><FaStar/>4.9</span>
                &nbsp;&#183;&nbsp;
                <span className='text-grey underline decoration-1'>8 reviews</span>
            </div>
        </div>
        <div className='mb-2 border border-grey rounded-lg'>
            <div className='flex flex-row text-sm'>
                <div className='flex flex-col p-2 w-1/2 border-r border-grey'>
                    <span>Check in</span>
                    <span>{checkinDate}</span>
                </div>
                <div className='flex flex-col p-2 w-1/2'>
                    <span>Checkout</span>
                    <span>{checkoutDate}</span>
                </div>
            </div>
            <div className='flex flex-col p-2 border-t border-grey text-sm'>
                <span>Guests</span>
                <span>1 guest</span>
            </div>
        </div>
        { numberOfNights ? (
            <div>
                <div className='my-2 flex flex-col'>
                    <button className='bg-pink rounded-lg py-3 text-white font-bold'>Reserve</button>
                    <span className='flex justify-center my-4 text-sm text-grey'>You wont be charged yet</span>
                </div>
                <div className='flex justify-between mb-2'>
                    <span className='underline decoration-1'>${pricePerNight} x ${numberOfNights} nights</span>
                    <span>${totalPrice}</span>
                </div>
                <div className='flex justify-between mb-4'>
                    <span className='underline decoration-1'>Service fee</span>
                    <span>$0</span>
                </div>
                <Separator />
                <div className='flex justify-between mt-4 mb-2 font-bold'>
                    <span>Total before taxes</span>
                    <span>${totalPrice}</span>
                </div>
            </div>
        ) : null }
      </div>
    </div>
  )
}

export default ReservationBox
