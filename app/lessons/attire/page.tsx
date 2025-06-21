import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"

export default function AttirePage() {
  const notAllowed = [
    "Cowboy boots (not enough ankle support)",
    "Tan legging-style riding pants",
    "Large or dangling jewelry",
    "Improper hairstyles that interfere with helmet fit",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-4xl font-bold mb-6">Riding Attire</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            All riders are expected to wear proper riding attire. (Exceptions are made for religious accommodations as long as safety is not compromised.)
          </p>
        </div>
      </section>

      {/* Attire Expectations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-8">What to Wear</h2>
              <div className="space-y-6 font-lexend text-lg text-gray-700">
                <p>
                  Riders just beginning lessons must wear <strong>closed-toed shoes</strong> and <strong>long pants</strong>. 
                  After the first month, riders are expected to purchase specific riding gear.
                </p>

                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    <strong>Helmet:</strong> Ovation Schooler Deluxe, Troxel Spirit, Liberty, or Legacy. If it's not black, a helmet cover will be needed for showing.
                  </li>
                  <li>
                    <strong>Paddock Boots:</strong> Ovation, Ariat, Mountain Horse, or TuffRider. Must come up to the ankle. Cowboy boots are not suitable long-term.
                  </li>
                  <li>
                    <strong>Kentucky Jodphurs / Bootcut Breeches:</strong> Brands like Alympic Equestrian, Irideon, Kerrits, SmartPak Piper, Ovation, or Freedman. 
                    These should fit snugly with a knee patch. <span className="text-lhra-red font-semibold">Note: These are not tan legging-style pants.</span>
                  </li>
                  <li>
                    <strong>Shirts:</strong> Any well-fitting shirt that does not fall below the hip.
                  </li>
                  <li>
                    <strong>Weather Preparedness:</strong> Dress appropriately for the weather. In cold weather, wear thick socks and zip-up layers so they can be removed if needed.
                  </li>
                  <li>
                    <strong>Hair:</strong> Long hair must be pulled back into a low ponytail or braid. High hairstyles prevent proper helmet fit.
                  </li>
                  <li>
                    <strong>Jewelry:</strong> Avoid large or dangling pieces, especially earrings, as they can be caught or pulled.
                  </li>
                </ul>

                <p>
                  LionHeart offers a hand-me-down closet where used boots and jods can be purchased and later swapped out for another pair free of charge. Please clearly label your personal equipment.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <Image src="/images/horse-lesson.jpeg" alt="Example Attire 1" width={600} height={400} className="w-full object-cover" />
              <Image src="/images/competition.jpeg" alt="Example Attire 2" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
