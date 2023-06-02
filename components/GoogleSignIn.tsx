"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import googleSignIn from "../public/assets/btn_google_light_normal_ios.png"
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import app from "../app/Firebase"
import { useAuth } from "@/app/UserContext"
import { useRouter } from "next/navigation"
import { db } from "../app/Firebase"
import { collection, doc, setDoc, getDoc } from "firebase/firestore"

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
      const result = await signInWithRedirect(auth, provider)
      onSuccess()
    } catch (error) {
      if (typeof onFailure === "function") {
        onFailure(error)
      }
    }
  }

  useEffect(() => {
    if (user) {
      const usersCollection = collection(db, "users")
      const userDocRef = doc(usersCollection, user.uid)

      const addUserDocument = async () => {
        const docSnapshot = await getDoc(userDocRef)

        // check if user exists in users collection
        if (docSnapshot.exists()) {
          console.log("User document already exists for UID:", user.uid)
          router.push("/dashboard")
          return
        }
        // Create User Data
        const newUser = {
          name: user.displayName,
          email: user.email,
        }

        try {
          await setDoc(doc(usersCollection, user.uid), newUser)
          router.push("/dashboard")
          console.log("User Document added with ID:", user.uid)
        } catch (error) {
          console.log("[ERROR] adding user document", error)
        }
      }

      addUserDocument()
    }
  }, [user, router])

  return (
    <>
      {!user && (
        <div onClick={handleSignIn}>
          <Image
            src={googleSignIn}
            alt="sign in with google"
            className="cursor-pointer"
            width={40}
            height={40}
          />
        </div>
      )}
    </>
  )
}

export default GoogleSignIn
