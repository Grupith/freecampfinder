"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import googleSignIn from "../public/assets/btn_google_light_normal_ios.png"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from "../app/Firebase"
import { useAuth } from "@/app/UserContext"
import { useRouter } from "next/navigation"

interface GoogleSignInProps {
  onSuccess: () => void
  onFailure: (error: any) => void
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({
  onSuccess,
  onFailure,
}) => {
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const { user } = useAuth()
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      onSuccess()
    } catch (error) {
      if (typeof onFailure === "function") {
        onFailure(error)
      }
    }
  }

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user])

  return (
    <div onClick={handleSignIn}>
      <Image
        src={googleSignIn}
        alt="sign in with google"
        className="cursor-pointer"
        width={40}
        height={40}
      />
    </div>
  )
}

export default GoogleSignIn
