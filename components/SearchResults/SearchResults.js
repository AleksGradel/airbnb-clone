import Link from 'next/link'
import { useSelector } from 'react-redux'
import Tile from '../Tile/Tile'
import { urlFor } from '../../sanity'
import { FaSearchLocation } from 'react-icons/fa'

const SearchResults = ({ places }) => {
    const totalGuestNumber = useSelector((state) => state.guests.total)

    const results = places.filter(place => place.guestNumber >= totalGuestNumber && place.guestNumber !== null)

    return (
            <div>
                { results.length > 0
                    ? <div className='p-12 xl:p-24 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                        {
                            results.map((result) => result.slug && (
                                <Link href={`place/${result.slug.current}`} key={result?._id}>
                                    <a>
                                    <Tile
                                        img={result.mainImage ? urlFor(result.mainImage).url() : ''}
                                        price={result?.pricePerNight}
                                        title={result?.title}/>
                                    </a>
                                </Link>))
                        }
                        </div>
                    : <div className='w-full h-screen flex flex-col justify-center items-center'>
                        <div className='text-9xl text-grey'><FaSearchLocation /></div>
                        <div className='font-bold text-xl mt-8'>No matching places</div>
                        <div className='text-grey-light mt-4'>Please, try again</div>
                    </div>
                }
            </div>
    )
}

export default SearchResults

