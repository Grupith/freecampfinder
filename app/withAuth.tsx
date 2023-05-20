"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./UserContext"

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper: React.FC = () => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!user) router.push("/")
    }, [user, router])

    if (!user) {
      return <div>Loading...</div>
    }

    return <WrappedComponent />
  }

  return Wrapper
}

export default withAuth
