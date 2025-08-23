'use client'

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"

const horses = [
  { name: "Sak's on Fifth, aka Diva", img: "/images/Website Pics/Website Pics/Meet the Horses/Diva.jpg", desc: "Diva's bio coming soon." },
  { name: "Ridgewood's Lookin' for Blue, aka Molly", img: "/images/Website Pics/Website Pics/Meet the Horses/Molly.jpg", desc: "Molly's bio coming soon." },
  { name: "Desert Highway, aka Austin", img: "/images/Austin.jpg", desc: "Austin's bio coming soon." },
  { name: "I'm Tantalyzing, aka Stella", img: "/images/Stella.jpg", desc: "Stella's bio coming soon." },
  { name: "Jane", img: "/images/Jane.jpg", desc: "Jane's bio coming soon." },
  { name: "Legerdemain, aka Jake", img: "/images/Jake.jpg", desc: "Jake's bio coming soon." },
  { name: "Perfect Pink, aka Bella", img: "/placeholder.jpg", desc: "Bella's bio coming soon." },
  { name: "Mr. Johnny Cash, aka Cash", img: "/images/Website Pics/Website Pics/Meet the Horses/Cash.jpg", desc: "Cash's bio coming soon." },
  { name: "Jinacio, aka Gwen", img: "/images/Gwen.jpg", desc: "Gwen's bio coming soon." },
  { name: "Hello Kitty, aka Kitty", img: "/images/Kitty.jpg", desc: "Kitty's bio coming soon." },
  { name: "Another Hot Summer Night, aka Fitz", img: "/images/Fitz.jpg", desc: "Fitz's bio coming soon." },
  { name: "The Persistence of Memory, aka Frida", img: "/images/Website Pics/Website Pics/Meet the Horses/Frida.jpg", desc: "Frida's bio coming soon." },
  { name: "The Painted Potato, aka Misty", img: "/images/misty.webp", desc: "Misty's bio coming soon." },
]

const memoryImages = [
  { img: "/images/RalfILM.JPG", caption: "A Lucky Town - Ralf" },
  { img: "/images/SkyILM.JPG", caption: "Scarlet Sky" },
  { img: "/images/BoILM.JPG", caption: "Heartland's Double Trouble - Bo" },
  { img: "/images/MojoILM.jpg", caption: "CH Mojo" },
  { img: "/images/PeepersILM.jpg", caption: "Hot for Blue - Peepers" },
  { img: "/images/DoraILM.jpg", caption: "J'adore - Dora" },
  { img: "/images/ArchieILM.jpg", caption: "Truly High Class - Archie" },
  { img: "/images/MarissaILM.jpg", caption: "Magikal Marissa" },
  { img: "/images/AdamILM.JPG", caption: "Callaway's Adam" },
  { img: "/images/JackILM.JPG", caption: "CH Redann's Steppin' Out - Jack" },
  { img: "/images/RedILM.jpg", caption: "Prediction - Red" },
]

const kittyImages = [
  "/images/smitty1.jpeg",
  "/images/smitty2.jpeg",
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 mb-0">
          <div className="flex-1 flex justify-center">
            <Image src="/images/Website Pics/Website Pics/Meet the Horses/Mose.jpg" alt="Mosette" width={650} height={455} className="rounded-xl shadow-lg" />
          </div>
          <div className="flex-1">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-2">Meet Mosette!</h2>
            <p className="font-florentia text-lg text-gray-700 mb-2">Mosette's bio coming soon.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {horses.map((horse) => (
              <Card key={horse.name} className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-4 flex flex-col items-center transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <Image src={horse.img} alt={horse.name} width={250} height={183} className="rounded-lg mb-4 object-contain" />
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
              <Image src={memoryImages[carouselIdx].img} alt={memoryImages[carouselIdx].caption} fill className="rounded-lg object-contain" />
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
              className="rounded-lg object-contain mx-auto cursor-pointer"
              onClick={() => setKittyImgIndex((kittyImgIndex + 1) % kittyImages.length)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
