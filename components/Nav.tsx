"use client"
import Link from "next/link"
import React, { useState } from "react"
import Image from "next/image"
import tentIcon from "../public/assets/camping-tent.png"
import accountImg from "../public/assets/GoogleAvatar.png"

export default function Nav() {
  const [userMenuToggle, setUserMenuToggle] = useState(false)
  const handleUserMenu = () => {
    setUserMenuToggle((prev) => !prev)
  }
  return (
    <div className="bg-white py-3 px-6 flex justify-between items-center fixed top-0 w-full z-50">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src={tentIcon} width={45} height={45} alt="Camper Logo" />
          <span className="font-semibold ml-2 text-lg">FreeCampFinder</span>
        </div>
      </Link>
      <div className="flex space-x-3">
        <button className="border border-black py-1 px-3 rounded-md font-semibold text-md">
          Sign In
        </button>
        <div className="relative" onClick={handleUserMenu}>
          <button>
            <span className="sr-only">User Menu</span>
            <Image
              src={accountImg}
              alt="Google Profile Image"
              width={35}
              height={35}
              className="cursor-pointer"
            />
          </button>
          {userMenuToggle && (
            <ul className="absolute right-0 z-10 mt-2 p-3 w-48 bg-white rounded-md shadow-lg flex flex-col space-y-2 font-medium">
              <Link
                href="/createpost"
                className="border p-1 rounded-md text-center"
              >
                Submit a Campsite
              </Link>
              <Link
                href="/dashboard"
                className="border p-1 rounded-md text-center"
              >
                Dashboard
              </Link>
              <Link
                href="/account"
                className="border p-1 rounded-md text-center"
              >
                Account
              </Link>
              <Link href="/faq" className="border p-1 rounded-md text-center">
                FAQ
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
