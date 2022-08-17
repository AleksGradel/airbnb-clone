import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { DateRange } from 'react-date-range'

function Calendar({ range, setDateRange }) {
    
    return (
        <div className='w-full flex justify-center'>
            <DateRange
                editableDateInputs={true}
                onChange={setDateRange}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={['#ff385c', '#222222', '#d4d4d4']}
            />
        </div>
    )
}

export default Calendar
