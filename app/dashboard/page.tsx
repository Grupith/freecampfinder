"use client"
import React from "react"
import { useAuth } from "../UserContext"

export default function Dashboard() {
  const { user } = useAuth()
  return (
    <div className="pt-16">
      <h1>Dashboard Page</h1>
      <p>DisplayName: {user && user.displayName}</p>
      <p>Email: {user && user.email}</p>
    </div>
  )
}
