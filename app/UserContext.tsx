"use client"
import { createContext, useContext, useEffect, useState } from "react"
import app from "../app/Firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

// define props for user context
interface UserContextProps {
  user: any
  loading: boolean
}
// Create your user context
const UserContext = createContext<UserContextProps>({
  user: null,
  loading: true,
})
// export your user context to be used as useAuth() hook
export const useAuth = () => useContext(UserContext)

// user provider wrapper
export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{ user, loading }}>
      {!loading && children}
    </UserContext.Provider>
  )
}
