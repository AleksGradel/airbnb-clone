import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '../../../public/logo.png'

const Logo = () => {
  return (
    <Link href='/'>
        <Image src={LogoImage} width={40} height={40} alt="Airbnb" />
    </Link>
  )
}

export default Logo
