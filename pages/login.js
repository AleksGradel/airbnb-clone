import { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className='w-1/2'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleLogin}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            E-mail
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='E-mail' />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' />
          <p className='text-red-500 text-xs italic'>Please choose a password.</p>
        </div>
        <div className='flex items-center justify-between'>
          <button className='font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Sign In
          </button>
        </div>
      </form>
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