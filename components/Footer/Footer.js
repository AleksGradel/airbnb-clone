import { useMediaQuery } from 'react-responsive'
import StickyFooter from './fragments/StickyFooter'
import DefaultFooter from './fragments/DefaultFooter'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
    const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            {isSmallDevice 
            ? (
                router.pathname !== '/place/[slug]' ? (
                    <StickyFooter />
                ) : null) 
            : (
                <DefaultFooter />
            )}
        </>
    )
}

export default Footer
