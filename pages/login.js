import { FcGoogle } from 'react-icons/fc'

function login() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col w-3/5 border rounded-lg border-grey'>
        <div className='flex justify-center font-bold py-4 border-b border-grey-light'>
          Log in or sign up
        </div>
        <div className='mt-4 px-4 text-xl font-bold'>
          Welcome to Airbnb
        </div>
        <button 
          className='flex items-center justify-between border rounded-lg border-grey m-4 p-2'>
          <FcGoogle />
          <span className='font-bold'>
            Continue with Google
          </span>
          <span />
        </button>
      </div>
    </div>
  )
}

export default login