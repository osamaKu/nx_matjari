import React, { FC } from 'react'
import { Link } from '@v2matjari/ui'

import './header.module.css'

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  return (
    <div className={'mtw-header-container flex flex-wrap text-gray-500 font-semibold capitalize'}>
      <div className="w-full">
        {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200">
          <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between xl:w-auto px-4 xl:static xl:block xl:justify-start">
              <a
                className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                logo Starter Menu
              </a>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                menu
              </button>
            </div>
            <div
              className={'xl:flex flex-grow items-center' + (menuOpen ? ' flex' : ' hidden')}
              id="example-navbar-info"
            >
              <ul className="flex flex-col xl:flex-row list-none xl:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                    href="#pablo"
                  >
                    Discover
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>owie</div>
        </nav> */}
        <nav className="relative flex flex-wrap items-center justify-between px-8 py-3 bg-gray-200 md:p-16">
          <div className={'flex space-x-12 items-center'}>
            <div>
              <Link href="/" className={'text-3xl text-gray-800 font-heading-sans font-bold'}>
                matjari
              </Link>
            </div>
            <div className={'hidden xl:block'}>
              <ul className={'flex space-x-8'}>
                <li>
                  <Link href="/" className={''}>
                    pricing
                  </Link>
                </li>
                <li>
                  <Link href="/">blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className={'space-x-8 hidden xl:flex'}>
              <li>
                <Link href="/">login</Link>
              </li>
              <li>
                <Link href="/">login</Link>
              </li>
            </ul>
            <button className={'block xl:hidden'}>toggle</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
