import { FaBars, FaUserCircle } from 'react-icons/fa'
import { Menu, Transition } from '@headlessui/react'
import { forwardRef, Fragment } from 'react'
import Link from 'next/link'

const UserLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
})

UserLink.displayName = 'UserLink'

const User = () => {
  return (
    <Menu>
        <Menu.Button className='flex justify-between items-center p-1 gap-3 rounded-full border border-grey-light h-10 hover:shadow-md cursor-pointer'>
            <FaBars className='ml-2'/>
            <FaUserCircle className='text-grey text-3xl'/>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-28 mr-8 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 flex flex-col gap-2">
              <Menu.Item>
                <UserLink href='/signin'>Sign in</UserLink>
              </Menu.Item>
              <Menu.Item>
                <UserLink href='/login'>Log in</UserLink>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default User
