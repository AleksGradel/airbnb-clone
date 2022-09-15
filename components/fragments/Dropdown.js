import { Menu, Transition  } from '@headlessui/react'
import { Fragment } from 'react'

const Dropdown = ({ button, items, dropdownWidth, marginTop }) => {
  return (
    <div>
      <Menu as='div' className='relative inline-block w-full'>
            <Menu.Button className='w-full'>
                {button}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'>
                <Menu.Items 
                    className={`absolute right-0 ${dropdownWidth} ${marginTop} origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <div className='p-2 border border-grey-light rounded-md'>
                        {items}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    </div>
  )
}

export default Dropdown
