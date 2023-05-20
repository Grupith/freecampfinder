"use client"
import React from "react"
import withAuth from "../withAuth"

function Dashboard() {
  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      <h1 className="text-center text-xl font-medium py-4">Dashboard Page</h1>
    </div>
  )
}

export default withAuth(Dashboard)
