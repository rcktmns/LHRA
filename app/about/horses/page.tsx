'use client'

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"

const horses = [
  { name: "Diva", img: "/placeholder.jpg", desc: "Diva's bio coming soon." },
  { name: "Molly", img: "/images/IMG_1933.webp", desc: "Molly is another of our five-gaited horses. Charlotte Struckhoff (long-time student & current Monday instructor) owns her. She was trained here at LionHeart by Kate & Charlotte! Like Mose, she is shown in performance classes because she is super fancy. If you see her in the barn bring snacks to share; she will want a bite." },
  { name: "Austin", img: "/images/austin.webp", desc: "Austin is our certified weirdo. He's always got a weird look in his eye and is trying to have food in his mouth. Austin is one of our most advanced horses, but once a rider figures out all his quirks he is wonderful. Slowly but surely he is making his way to Academy superstar ranks, but isn't going to leave behind his Country Pleasure beginnings. Austin is the biggest cuddle bug of all, so don't be afraid to come give him a hug if you see him in the barn." },
  { name: "Stella", img: "/placeholder.jpg", desc: "Stella's bio coming soon." },
  { name: "Jake", img: "/images/jake.webp", desc: "Jake is our most perfect, most handsome old guy. He is wonderful for beginners, but when he gets outside he becomes an advanced horse. So he has something to offer for everyone! Jake is mostly American Saddlebred, but actually is 1/4th Arabian (if you know what to look for you can see it in his nose). Don't let his good looks fool you, though, because he will steal some hay if you're not looking." },
  { name: "Ralf", img: "/images/ralf.webp", desc: "Ralf is a very silly guy. He likes to nibble on shoulders, stick his tongue out, & eat hay. Ralf is a fun challenge for everyone that rides him. He's blind in his left eye, starts his lessons as slow as a snail, & can get revved up without any warning; so he has a lot to offer those that are up for it! Fun fact about Ralf: he has a few favorite songs (one of them being *Applause* by Lady Gaga) that get him HYPED." },
  { name: "Tyler", img: "/placeholder.jpg", desc: "Tyler's bio coming soon." },
  { name: "Cash", img: "/images/cash.webp", desc: "Cash is our newest addition to the LionHeart family! We got him from another barn in Mid-Missouri: High Spirits. Cash is our 3rd five-gaited horse, but unlike Mosette & Molly, he is best suited for Academy. He has a little bit for everybody since he listens so well, making him perfect for beginners to advanced riders. Cash is also great for riders first learning to slow-gait & rack." },
  { name: "Gwen", img: "/images/gwen.webp", desc: "Gwen is an anomaly here at LionHeart. She is not an American Saddlebred, instead she is part Arabian, part Paint, & she used to be ridden Dressage instead of Saddleseat. Her head carriage & the way she moves is very different compared to what riders here are used to, so she is a fun project for intermediate riders seeking something outside of the norm." },
  { name: "Kitty", img: "/placeholder.jpg", desc: "Kitty's bio coming soon." },
  { name: "Fitz", img: "/images/fitz.webp", desc: "Fitz is the best with baby beginners. He is really sweet & loves being given treats- he will take really nicely from a little kid's hand. Fitz is our WT Academy superstar; he's a great tiny step up from someone who previously showed Jake." },
  { name: "Frida", img: "/images/frida.webp", desc: "Frida is a nice challenge for intermediate riders. She is very particular about a lot of things, including who she does & doesn't like. Once riders figure out all her quirks she can be wonderful, but until then she teaches people a lot." },
  { name: "Misty", img: "/images/misty.webp", desc: "Misty is great for beginners, especially those who might be scared of a big horse, since she is so small. Most of the time she is unbothered, making her the perfect candidate for little kids to learn how to catch a horse, groom, etc. Misty isn't without her quirks, though. Her favorite thing is food, but she doesn't quite know what is and isn't food, so she ends up going after whatever is closest. Fun fact about Misty: despite her short stature and lack of iconic saddleseat motion, she has won some classes!" },
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
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-papyrus text-5xl font-bold text-white text-center mb-12">Meet the Horses</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
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
