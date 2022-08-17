import { urlFor } from '../../sanity'

const Avatar = ({ image, alt, width, height }) => {
  return (
    <div>
      <img
        className='w-14 h-14 rounded-full object-cover'
        src={urlFor(image).url()} 
        alt={alt}/>
    </div>
  )
}

export default Avatar
