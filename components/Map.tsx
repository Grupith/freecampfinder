"use client"
import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

type MapProps = {
  apiKey?: string
  center: {
    lat: number
    lng: number
  }
}

const containerStyle = {
  width: "400px",
  height: "400px",
}

function Map({ apiKey, center }: MapProps) {
  const googleMapsApiKey = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
