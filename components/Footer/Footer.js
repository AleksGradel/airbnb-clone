import { useMediaQuery } from 'react-responsive'
import StickyFooter from './fragments/StickyFooter'
import DefaultFooter from './fragments/DefaultFooter'

const Footer = () => {
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)'})

  return (
    <div>
      { isSmallDevice
        ? <StickyFooter />
        : <DefaultFooter />
      }
    </div>
  )
}

export default Footer
