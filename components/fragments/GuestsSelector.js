import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { FaPlus, FaMinus } from 'react-icons/fa'

import { addAdult, 
        removeAdult, 
        addChild, 
        removeChild, 
        addInfant, 
        removeInfant } from '../../slices/guestsSlice'

const SelectorRow = ({ label, description, count, incrementAction, decrementAction }) => {
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
                    onClick={incrementAction}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

const GuestsSelector = () => {
    const adults = useSelector((state) => state.guests.adults)
    const children = useSelector((state) => state.guests.children)
    const infants = useSelector((state) => state.guests.infants)

    const dispatch = useDispatch()

    return (
        <div>
            <SelectorRow 
                label='Adults'
                description='Age 13+'
                count={adults}
                decrementAction={() => dispatch(removeAdult())}
                incrementAction={() => dispatch(addAdult())}
                />
            <SelectorRow 
                label='Children'
                description='Ages 2-12'
                count={children}
                decrementAction={() => dispatch(removeChild())}
                incrementAction={() => dispatch(addChild())}
                />
            <SelectorRow 
                label='Infants'
                description='Under 2'
                count={infants}
                decrementAction={() => dispatch(removeInfant())}
                incrementAction={() => dispatch(addInfant())}
                />
        </div>
    )
}

export default GuestsSelector
