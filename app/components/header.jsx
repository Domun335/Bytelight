'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isActive, setActive] = useState(false)

  const handleClick = () => {
    setActive(!isActive)
  }

  return (
    <header className="header">
      <div className="header__popup">
        <Link href="/">
          <p>A custom notification goes here</p>
        </Link>
      </div>

      <div className="header__container">
        <Image src="/Logo.svg" alt="logo" width="127" height="21" />

        <div className="header__container--left">
          <nav>
            <ul className="header__navbar">
              <Link href="/">
                <li className="header__navbar--arrow">Products</li>
              </Link>
              <Link href="/">
                <li>Company</li>
              </Link>
              <Link href="/">
                <li>Industries</li>
              </Link>
            </ul>

            <ul className={isActive ? 'header__navbar--droped' : 'none'}>
              <Link href="/">
                <li>Products</li>
              </Link>
              <Link href="/">
                <li>Company</li>
              </Link>
              <Link href="/">
                <li>Industries</li>
              </Link>
            </ul>
          </nav>

          <button className="header__button">Contact sales</button>
          <button className="header__button--droped" onClick={handleClick}>
            <div
              className={
                isActive ? 'header__button--droped-white' : 'header__button--droped-black'
              }
            ></div>
            <div
              className={
                isActive ? 'header__button--droped-white' : 'header__button--droped-black'
              }
            ></div>
            <div
              className={
                isActive ? 'header__button--droped-white' : 'header__button--droped-black'
              }
            ></div>
          </button>
        </div>
      </div>
    </header>
  )
}
