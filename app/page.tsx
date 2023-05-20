"use client"
import Map from "@/components/Map"
import { useEffect, useState } from "react"

export default function Home() {
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  })
  // Ask the user for location permission on the browser
  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setMapCenter({ lat: latitude, lng: longitude })
            console.log(mapCenter)
          },
          (error) => {
            console.error("Error retrieving user location:", error)
          }
        )
      } else {
        console.warn("Geolocation is not supported by this browser.")
      }
    }

    fetchUserLocation()
  }, [])
  return (
    <main className="text-center pt-16 min-h-screen font-sans bg-gray-100">
      <section>
        <div className="pt-10">
          <h1 className="text-3xl font-bold mx-10">
            Discover <span></span>Free Campsites Near You!
          </h1>
          <p className="mt-4 text-sm font-medium mx-14">
            Search, Review and Share your Favorite Campsites with Fellow Outdoor
            Enthusiasts! Sign-in with Google to Submit a Campsite.
          </p>
        </div>
      </section>
      <div className="flex justify-center my-10 w-fit m-auto">
        <Map center={mapCenter} />
      </div>
      <form className="flex flex-col mx-10">
        <input
          type="text"
          placeholder="Enter location..."
          className="text-xl py-3 px-5 rounded-lg border w-80 m-auto cursor-pointer"
        />
        <button
          type="submit"
          className="border rounded-md w-fit m-auto px-10 py-1 mt-4 bg-white font-medium text-md hover:border-black"
        >
          Search
        </button>
      </form>
    </main>
  )
}
