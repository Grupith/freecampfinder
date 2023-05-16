import Nav from "@/components/Nav"
import "./globals.css"
import { Inter } from "next/font/google"
import { UserProvider } from "./UserContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FreeCampFinder",
  description: "Discover Free Campsites Today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </head>
      <body>
        <UserProvider>
          <Nav />
          <div className={inter.className}>{children}</div>
        </UserProvider>
      </body>
    </html>
  )
}
