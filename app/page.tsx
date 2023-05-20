import Image from "next/image"
import campsiteImg from "../public/assets/Campsite-transparent.png"

export default function Home() {
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
        <Image
          src={campsiteImg}
          alt="3D image of campsite"
          priority={true}
          width={275}
          height={275}
          className="rounded-3xl m-auto"
        />
      </section>
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
