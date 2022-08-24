import { urlFor } from '../../sanity'

const Avatar = ({ image, alt }) => {
  return (
    <div>
      { image &&
        <img
        className='w-14 h-14 rounded-full object-cover'
        src={urlFor(image).url()} 
        alt={alt}/>
      }
    </div>
  )
}

export default Avatar
