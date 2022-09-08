import { useState } from 'react'
import DangerAlert from '../components/fragments/DangerAlert'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [showAlert, setShowAlert] = useState(false)
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)'})

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async (e) => {
    e.preventDefault()

      try {
        await login(data.email, data.password)
        router.push('/')
      } catch (error) {
        setShowAlert(true)
        console.log(error)
      }
  }

  return (
    <div className={`${isSmallDevice ? '' : 'items-center justify-center'} min-h-screen flex flex-col w-full`}>
      { showAlert &&
        <div className={`${isSmallDevice ? 'w-full p-4' : 'w-1/2'}`}>
          <DangerAlert clickAction={() => setShowAlert(false)}/>
        </div>
      }
      <div className={`${isSmallDevice ? '' : 'bg-white rounded-xl border border-grey w-1/2'}`}>
        <div className='flex justify-center border-b border-grey-light px-8 py-4'>
          <span className='font-bold'>Log in</span>
        </div>
        <div className='px-8 pt-6 pb-8 mb-4'>
          <h1 className='font-bold text-lg pb-6'>Welcome to Airbnb clone</h1>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                E-mail
              </label>
              <input 
                className='appearance-none border border-grey rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id='email' 
                type='text'
                onChange={(e) => setData({...data, email: e.target.value})}
                value={data.email}
                placeholder='E-mail' />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Password
              </label>
              <input 
                className='appearance-none border border-grey rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' 
                id='password' 
                type='password'
                placeholder='******************'
                onChange={(e) => setData({...data, password: e.target.value})}
                value={data.password} />
            </div>
            <div className='flex items-center justify-between'>
              <button 
                className='w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline bg-pink text-white'>
                Log In
              </button>
            </div>
          </form>
        </div>
        { isSmallDevice
          ? <div className='px-8 mt-4 flex flex-col w-full justify-center items-center border-t border-grey-light'>
              <span className='mt-4'>I&#39;m here for the first time</span>
              <Link href='/signin'>
                <div className='flex justify-center w-full py-2 mt-4 border rounded-lg border-grey-dark font-bold cursor-pointer'>
                  Sign up
                </div>
              </Link>
            </div>
          : null
        }
      </div>
    </div>
  )
}

function login() {
  return (
    <div className='flex justify-center'>
      <Login />
    </div>
  )
}

export default login