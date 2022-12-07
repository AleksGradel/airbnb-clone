import { FaBars, FaUserCircle } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import React, { forwardRef, useRef } from 'react'
import Link from 'next/link'
import { useAuth } from '../../../context/AuthContext'
import { useRouter } from 'next/router'
import Separator from '../../fragments/Separator'
import Dropdown from '../../fragments/Dropdown'

const UserLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props
    return (
        <Link href={href}>
            <p
                className='p-2 text-sm hover:bg-grey-super-light'
                ref={ref}
                {...rest}
            >
                {children}
            </p>
        </Link>
    )
})

UserLink.displayName = 'UserLink'

const User = () => {
    const inputRef = useRef(null)
    const { user, logout } = useAuth()
    const router = useRouter()

    return (
        <Dropdown
            dropdownWidth='56'
            marginTop='mt-2'
            button={
                <div className='flex justify-between items-center p-1 gap-3 rounded-full border border-grey-light h-10 hover:shadow-md cursor-pointer'>
                    <FaBars className='ml-2' />
                    <FaUserCircle className='text-grey text-3xl' />
                </div>
            }
            items={
                <div className='mt-2 w-56 py-1 flex flex-col'>
                    {!user && (
                        <Menu.Item>
                            <UserLink href='/signin' ref={inputRef}>
                                Sign up
                            </UserLink>
                        </Menu.Item>
                    )}
                    {!user && (
                        <Menu.Item>
                            <UserLink href='/login' ref={inputRef}>
                                Log in
                            </UserLink>
                        </Menu.Item>
                    )}
                    {!user && <Separator />}
                    <Menu.Item>
                        <UserLink href='/' ref={inputRef}>
                            Host your home
                        </UserLink>
                    </Menu.Item>
                    <Menu.Item>
                        <UserLink href='/' ref={inputRef}>
                            Host an experience
                        </UserLink>
                    </Menu.Item>
                    <Menu.Item>
                        <UserLink href='/' ref={inputRef}>
                            Help
                        </UserLink>
                    </Menu.Item>
                    {user && (
                        <Menu.Item>
                            <div
                                className='p-2 text-sm hover:bg-grey-super-light cursor-pointer'
                                onClick={() => {
                                    logout()
                                    router.push('/login')
                                }}
                                ref={inputRef}
                            >
                                Log out
                            </div>
                        </Menu.Item>
                    )}
                </div>
            }
        />
    )
}

export default User
