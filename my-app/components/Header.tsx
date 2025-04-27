import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href={'/'}>BookWise</Link>
      <ul className='flex flex-row'>
        <li></li>
      </ul>
    </header>
  )
}

export default Header