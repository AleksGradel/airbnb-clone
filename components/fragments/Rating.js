import { FaStar } from 'react-icons/fa'

const Rating = ({ rates }) => {
    const countRate = (reviews) => {
        if (reviews !== null) {
            const sum = reviews.reduce((total, obj) => {
                return total + Number(obj.rating)
            }, 0)

            return sum / reviews.length
        }
        return null
    }

    return (
        <div className="flex flex-row items-center">
            <span className="mr-1">
                <FaStar />
            </span>
            <span>{countRate(rates) ? countRate(rates) : 'New'}</span>
        </div>
    )
}

export default Rating
