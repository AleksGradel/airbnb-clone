import React from 'react'
import Avatar from '../fragments/Avatar'

const Reviews = ({ place }) => {
    return (
        <div>
            {place.reviews ? (
                place.reviews.map((review) => (
                    <div key={review._key} className='my-8'>
                        <div className='flex flex-row'>
                            <div className='mr-4'>
                                <Avatar
                                    image={review.author.avatar}
                                    alt={review.author.name}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    {review.author.name}
                                </span>
                                <span className='text-grey'>
                                    {review.monthOfVisit}
                                </span>
                            </div>
                        </div>
                        <div className='mt-2'>{review.comment}</div>
                    </div>
                ))
            ) : (
                <div className='my-8 font-bold text-2xl'>No reviews (yet)</div>
            )}
        </div>
    )
}

export default Reviews
