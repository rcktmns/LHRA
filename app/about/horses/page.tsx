'use client'

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"

const horses = [
  { name: "Sak's on Fifth, aka Diva", img: "/placeholder.jpg", desc: "Diva's bio coming soon." },
  { name: "Ridgewood's Lookin' for Blue, aka Molly", img: "/images/IMG_1933.webp", desc: "Molly's bio coming soon." },
  { name: "Desert Highway, aka Austin", img: "/images/austin.webp", desc: "Austin's bio coming soon." },
  { name: "I'm Tantalyzing, aka Stella", img: "/placeholder.jpg", desc: "Stella's bio coming soon." },
  { name: "Legerdemain, aka Jake", img: "/images/jake.webp", desc: "Jake's bio coming soon." },
  { name: "A Lucky Town, aka Ralf", img: "/images/ralf.webp", desc: "Ralf's boi coming soon." },
  { name: "Mid's Nash Hart, aka Tyler", img: "/placeholder.jpg", desc: "Tyler's bio coming soon." },
  { name: "Mr. Johnny Cash, akak Cash", img: "/images/cash.webp", desc: "Cash's bio coming soon." },
  { name: "Gwen", img: "/images/gwen.webp", desc: "Gwen's bio coming soon." },
  { name: "Hello Kitty, aka Kitty", img: "/placeholder.jpg", desc: "Kitty's bio coming soon." },
  { name: "Another Hot Summer Night, aka Fitz", img: "/images/fitz.webp", desc: "Fitz's bio coming soon." },
  { name: "The Persistence of Memory, aka Frida", img: "/images/frida.webp", desc: "Frida's bio coming soon." },
  { name: "The Painted Potato, aka Misty", img: "/images/misty.webp", desc: "Misty's bio coming soon." },
]

const memoryImages = [
  { img: "/placeholder.jpg", caption: "In Loving Memory 1" },
  { img: "/placeholder.jpg", caption: "In Loving Memory 2" },
]

const kittyImages = [
  "/images/smith1.webp",
  "/images/smith2.webp",
  "/images/smith3.webp",
]

export default function HorsesPage() {
  const [showKitty, setShowKitty] = useState(false)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [kittyImgIndex, setKittyImgIndex] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="elegant-gradient text-white py-20">
        <div className=" mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h1 className="font-papyrus text-4xl font-bold text-white text-center mb-4">Meet the Horses</h1>
        <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>

          <p className="font-lexend text-xl max-w-3xl mx-auto">
            We have an incredible roster of horses and ponies at LionHeart Riding Academy that all have something unique to offer our riders.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1 flex justify-center">
            <Image src="/images/IMG_1944.webp" alt="Mosette" width={400} height={350} className="rounded-xl shadow-lg object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-2">Meet Mosette!</h2>
            <p className="font-florentia text-lg text-gray-700 mb-2">Mosette is a five-gaited horse, originally Kate's show horse until she retired from showing and became a lesson horse. Now she is retired from riding completely, but is always excited to meet new people and get some scratches.</p>
            <p className="font-florentia text-lhra-red font-semibold">Birthday: April 27, 2004</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {horses.map((horse) => (
              <Card key={horse.name} className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <Image src={horse.img} alt={horse.name} width={300} height={220} className="rounded-lg mb-4 object-cover" />
                <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">{horse.name}</h3>
                <p className="font-lexend text-gray-700 text-center text-base">{horse.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-6">In Loving Memory</h2>
          <div className="flex flex-col items-center">
            <div className="relative w-[300px] h-[220px] mx-auto mb-4">
              <Image src={memoryImages[carouselIdx].img} alt={memoryImages[carouselIdx].caption} fill className="rounded-lg object-cover" />
            </div>
            <p className="font-florentia text-gray-700 mb-4">{memoryImages[carouselIdx].caption}</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setCarouselIdx((carouselIdx - 1 + memoryImages.length) % memoryImages.length)} className="px-4 py-2 bg-lhra-blue text-white rounded">Prev</button>
              <button onClick={() => setCarouselIdx((carouselIdx + 1) % memoryImages.length)} className="px-4 py-2 bg-lhra-blue text-white rounded">Next</button>
            </div>
          </div>
        </div>
      </section>

     

      {showKitty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button onClick={() => setShowKitty(false)} className="absolute top-2 right-4 text-2xl">×</button>
            <h3 className="font-florentia text-2xl font-bold text-lhra-blue mb-2">Meet Smith Kitty!</h3>
            <p className="font-florentia text-gray-700 mb-4">Smith (or, Smitty) is our very friendly barn cat. He loves laying in the middle of the arena or climbing into the hay loft. If you see him, feel free to pet him and give him some treats.</p>
            <Image
              src={kittyImages[kittyImgIndex]}
              alt="Smith Kitty"
              width={220}
              height={180}
              className="rounded-lg object-cover mx-auto cursor-pointer"
              onClick={() => setKittyImgIndex((kittyImgIndex + 1) % kittyImages.length)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
