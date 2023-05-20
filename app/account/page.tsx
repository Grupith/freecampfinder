"use client"
import React from "react"
import { useAuth } from "../UserContext"
import withAuth from "../withAuth"

function Account() {
  const { user } = useAuth()

  return (
    <div className="pt-16 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-center mt-4 text-2xl font-semibold">My Account</h1>
      <div className="m-5">
        <p>DisplayName: {user && user.displayName}</p>
        <p>Email: {user && user.email}</p>
      </div>
    </div>
  )
}

export default withAuth(Account)
