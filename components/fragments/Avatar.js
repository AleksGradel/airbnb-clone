import { urlFor } from '../../sanity'

const Avatar = ({ image, alt }) => {
    return (
        <>
            {image && (
                <img
                    className='w-14 h-14 rounded-full object-cover'
                    src={urlFor(image).url()}
                    alt={alt}
                />
            )}
        </>
    )
}

export default Avatar
