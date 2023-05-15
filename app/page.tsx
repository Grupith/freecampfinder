import Image from "next/image"
import campsiteImg from "../public/assets/Campsite-transparent.png"

export default function Home() {
  return (
    <main className="text-center pt-16 min-h-screen font-sans">
      <div className="pt-10">
        <h1 className="text-3xl font-bold">
          Discover Free Campsites Near You!
        </h1>
        <p className="mt-4 text-md font-medium mx-10">
          Search, Review and Share your Favorite Campsites with Fellow Outdoor
          Enthusiasts! Sign in with Google to Submit a Campsite.
        </p>
      </div>
      <Image
        src={campsiteImg}
        alt="3D image of campsite"
        width={275}
        height={275}
        className="rounded-3xl m-auto"
      />
      <form className="flex flex-col mx-10">
        <input
          type="text"
          placeholder="Enter location..."
          className="text-xl py-3 px-5 rounded-xl border w-80 m-auto"
        />
        <button
          type="submit"
          className="border rounded-lg w-fit m-auto px-10 py-1 mt-4 bg-blue-500 text-white font-semibold text-lg"
        >
          Search
        </button>
      </form>
    </main>
  )
}
