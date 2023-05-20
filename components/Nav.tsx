"use client"
import Link from "next/link"
import React, { useState } from "react"
import Image from "next/image"
import tentIcon from "../public/assets/camping-tent.png"
import defaultProfileImg from "../public/assets/GoogleAvatar.png"
import GoogleSignIn from "./GoogleSignIn"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/UserContext"

export default function Nav() {
  const auth = getAuth()
  const router = useRouter()
  const { user } = useAuth()
  const [userMenuToggle, setUserMenuToggle] = useState(false)
  const handleUserMenu = () => {
    setUserMenuToggle((prev) => !prev)
  }
  const handleSignOut = () => {
    try {
      signOut(auth)
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }
  const onSuccess = () => {
    console.log("Sign in success")
  }

  const onFailure = (error: any) => {
    console.log("Sign in error", error)
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
        <GoogleSignIn onSuccess={onSuccess} onFailure={onFailure} />
        <div className="relative flex" onClick={handleUserMenu}>
          <button className="cursor-pointer">
            <span className="sr-only">User Menu</span>
            {user ? (
              <Image
                src={user.photoURL}
                alt="Google Profile Image"
                width={38}
                height={38}
                className="rounded-3xl"
              />
            ) : (
              <Image
                src={defaultProfileImg}
                alt="Google Profile Image"
                width={35}
                height={35}
                className=""
              />
            )}
          </button>
          {userMenuToggle && (
            <ul className="absolute right-0 z-10 mt-14 p-3 w-48 bg-white rounded-md shadow-lg flex flex-col space-y-2 font-medium">
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
              <p
                className="border p-1 rounded-md text-center cursor-pointer"
                onClick={handleSignOut}
              >
                Logout
              </p>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
