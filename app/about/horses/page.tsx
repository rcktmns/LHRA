'use client'

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const horses = [
  { name: "The Painted Potato, aka Misty", img: "/images/misty.webp", desc: "Misty is a lovable, stubbon pony in her late 20s that often teaches young riders' first lessons!", details: "Misty is often the first pony ridden by Littles at LionHeart. She was born long, long ago in a galaxy far, far away- we think she is in her late twenties. She has been a lesson pony at LionHeart for several years and taught many lessons. She’s primarily motivated by food; in fact, she doesn’t seem to be motivated by much else at all. She’s a little ornery and more than a little stubborn, but we just can’t help but love her. Misty’s breed is a mystery to everyone- probably mostly Shetland pony but there’s definitely something else in there somewhere- and she has shown under the name “The Painted Potato” to a number of blue ribbons in Academy classes (seriously, she actually has won classes!)." },
  { name: "Legerdemain, aka Jake", img: "/images/Jake.jpg", desc: "Jake is a 24 year old American Saddlebred/Arabian cross who has been with LionHeart for over a decade giving countless lessons to beginner riders!", details: "Jake is often first up for the big kids. He is 24 years old, which is pretty old, actually, but he’s still trucking along great. He’s been a lesson horse at LionHeart for 17 years and has literally taught thousands of lessons and probably been ridden by every student who has come through the door in those 17 years. Jake’s a bit of a loner- he usually prefers to keep to himself, though he has recently found the love of his life. He has a great work ethic and seems to enjoy showing. He is a registered National Show Horse (a breed created by crossing Saddlebred and Arabian) under the show name “Legerdemain” (French for “slight of hand,” meaning “trickster,” which is funny because Jake is about as honest as they come). He has won dozens and dozens of blue ribbons in Academy classes." },
  { name: "Mr. Johnny Cash, aka Cash", img: "/images/Website Pics/Website Pics/Meet the Horses/Cash.jpg", desc: "Cash is a sweet but anxious 20 year old American Saddlebred who loves company and has become a LionHeart favorite in the show ring!", details: "Cash is about 20 years old and has been at LionHeart for about 3 years. He’s very sweet and very loving but a very anxious guy about certain things- he doesn’t like enclosed small spaces and he doesn’t like to be alone. Under saddle, he does not particularly like to stand still but prefers to keep moving even if it’s just at a walk. However, by the time most of our students ride Cash, they are ready to ride a horse that has some go forward that they don’t have to push all the time. He has a good work ethic and loves Gwen; is also pretty fond of treats and good grass. Cash is supposedly registered as an American Saddlebred. We show him as “Mr Johnny Cash,” and he has already won numerous blue ribbons for LionHeart Academy riders."},
  { name: "Jinacio, aka Gwen", img: "/images/Gwen.jpg", desc: "Gwen is a 20 year old Paint/Arabian cross, owned by Sharon Gaughan, and while having not been shown yet, is a favorite steed of choice in LionHeart's Drill Team!", details: "Gwen is 20 years old and has been a lesson horse at LionHeart for 3 years. She is owned by Sharon Gaughan, who generously shares her with us. Gwen is very dedicated to her “mom,” and usually looks at Kate like, “I guess you’ll do…” Gwen is very fond of Cash (though maybe not quite as fond as he is of her) and treats. Gwen also has a bigger engine and prefers to trot rather than walk. She is a favorite mount for Drill Team as she is very agile and can adjust speed quickly as needed. She also doesn’t mind being in close quarters with other horses. Gwen is a registered Half Arabian/ Paint cross under the name “Jinacio.” She hasn’t shown yet under the LionHeart banner though Kate is really hoping that will happen soon."},
  { name: "Hello Kitty, aka Kitty", img: "/images/Kitty.jpg", desc: "Kitty is a 9 year old Hackney pony and has done well with LionHeart riders in the show ring!", details: "Kitty is our Hackney Pony- we love to represent the hackney breed at LionHeart! She is 9 years old and is a typical pony- a little ornery and constantly looking for trouble. She loves Kate and tries whenever possible to go to her. Kitty is also a picky pony when it comes to food- she really only likes carrots, though she’ll eat a peppermint or two if that’s all that’s available. Kitty requires a lot of focus from her rider, so she’s ridden by the intermediate riders. She can trot very fast if you ask her to, and she can canter- very rare for a Hackney to be able to canter! She’s registered with the Hackney Horse and Pony Association as “Kit’s Fascination,” though we show her in Academy as “Hello Kitty.” She has won several Academy classes and generally gets good ribbons for us in Academy as well as in Performance (suit) classes."  },
  { name: "Perfect Pink, aka Bella", img: "/placeholder.jpg", desc: "Bella is an 11 year old American Saddlebred and the newest member of the LionHeart family!", details: "Bella is the newest member of the LionHeart team, having just joined us in July of 2025. She’s 11 years old, so she has plenty of time to rack up some good years with us! She’s an honest lady and does whatever you ask of her- kids love riding her because she responds to the smallest movements of your body. She really likes her “boyfriend” Jake and would really like to just eat all day long. She has a wonderful smooth canter that everyone loves. She’s a registered Saddlebred under the name “Perfect Pink,” which we do use when we show her because it’s so cute! She’s only done a couple shows with us, but again, has plenty of years to gather some wins." },
  { name: "The Persistence of Memory, aka Frida", img: "/images/Website Pics/Website Pics/Meet the Horses/Frida.jpg", desc: "Frida is a 20 year old American Saddlebred who has been with LionHeart for close to a decade, and who doesn't show often but is very versatile in her abilities!", details: "Frida has been at LionHeart for almost 10 years now. She’s definitely a matter of taste- some riders love her and others hate her, but she does have some cool abilities that our other horses don’t have. Frida has been trained in all three disciplines- saddle seat, hunt seat, and western- so she’s very versatile. She loves to be ridden western outside and will happily lope through the grass as long as you want. She can be a little ornery sometimes. She got very sick a couple of years ago and that changed her behavior significantly, which is when most of her “haters” came to dislike her. Fortunately, she recovered from her illness and is back to herself again. She’s a registered Saddlebred under the (truly horrible) name “Inflammatory Asset,” but we show her as “The Persistence of Memory.” She hasn’t shown very much as it really doesn’t seem to be something she enjoys." },
  { name: "Desert Highway, aka Austin", img: "/images/Austin.jpg", desc: "Austin is a 7 year old American Saddlebred who is currently retired from showing, but is a wonderful lesson horse who is loved by many LionHeart riders!", details: "Austin is 7 years old and has been at LionHeart for three years. Some of the older riders say that if Austin were human, he would be a surfer dude- he’s got curly blond hair and adorable eyes that just make your heart melt every time- but he’s inherently lazy and is constantly looking for a way to get out of work. (If you’re not convinced yet, his birthday is 4/20.) Austin is always a challenge under saddle and is definitely a horse for our intermediate to advanced riders- though I could see a day when he might become a beginner horse- he’d probably be pretty agreeable to doing very little! He is very fun in the stall though- he’s into everything, wants to follow you around, will put his head over your shoulder and give you a hug. He LOVES attention. He’s registered as “Desert Highway” with the Saddlebred registry. He gets very nervous showing so he’s currently on hiatus while we hopefully get him more comfortable at shows." },
  { name: "I'm Tantalyzing, aka Stella", img: "/images/Stella.jpg", desc: "Stella is an 8 year old American Saddlebred who is absolutely Tantalyzing under saddle and has done great for LionHeart in the show ring!", details: "Stella has been at LionHeart since 2024 and is 8 years old. She is a total cuddlebug and loves pets and hugs and loves licking the salty sweat off your arms in the summertime. She will also follow you around the stall like a puppy and she loves attention from the little kids and never bites little fingers. She’s beautiful under saddle though she requires a delicate touch so she’s definitely only ridden by our most advanced riders. She is another registered Saddlebred, show name “I’m Tantalizing,” which is very appropriate for her. She’s already brought home numerous wins in just a few shows for us so far, and we have high hopes for a long and successful future for her." },
  { name: "Sak's on Fifth, aka Diva", img: "/images/Website Pics/Website Pics/Meet the Horses/Diva.jpg", desc: "Diva is a 14 year old American Saddlebred, owned by Betts Coup, who started her show career in Performance classes and is now at LionHeart as our latest Academy superstar!", details: "Diva truly lives up to her name. She 100% thinks she is the most awesome thing out there, and she’s not too far off! Diva joined LHRA in February of 2025 and is 14 years old. She belongs to Betts Coup, Kate’s sister, who showed her in Park classes for many years, winning many classes and getting top ribbons at National and World Championships. Diva was thought to be a real challenge at her former barn- they wouldn’t even let a kid ride her at all- but after a couple of years out in a field, Diva was ready to come back into a warm cozy stall and live the good life. She has mellowed significantly and has become a reliable Academy Superstar within just a few months. Diva is registered as “Saks on Fifth”."},
  { name: "Ridgewood's Lookin' for Blue, aka Molly", img: "/images/Website Pics/Website Pics/Meet the Horses/Molly.jpg", desc: "Molly's bio coming soon." },
  { name: "Jane", img: "/images/Jane.jpg", desc: "Jane's bio coming soon." },
  { name: "Another Hot Summer Night, aka Fitz", img: "/images/Fitz.jpg", desc: "Fitz's bio coming soon." },
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
  const [selectedHorse, setSelectedHorse] = useState(null)
  const [showKitty, setShowKitty] = useState(false)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [kittyImgIndex, setKittyImgIndex] = useState(0)
  
 'use client'

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const horses = [
  { name: "The Painted Potato, aka Misty", img: "/images/misty.webp", desc: "Misty is a lovable, stubbon pony in her late 20s that often teaches young riders' first lessons!", details: "Misty is often the first pony ridden by Littles at LionHeart. She was born long, long ago in a galaxy far, far away- we think she is in her late twenties. She has been a lesson pony at LionHeart for several years and taught many lessons. She’s primarily motivated by food; in fact, she doesn’t seem to be motivated by much else at all. She’s a little ornery and more than a little stubborn, but we just can’t help but love her. Misty’s breed is a mystery to everyone- probably mostly Shetland pony but there’s definitely something else in there somewhere- and she has shown under the name “The Painted Potato” to a number of blue ribbons in Academy classes (seriously, she actually has won classes!)." },
  { name: "Legerdemain, aka Jake", img: "/images/Jake.jpg", desc: "Jake is a 24 year old American Saddlebred/Arabian cross who has been with LionHeart for over a decade giving countless lessons to beginner riders!", details: "Jake is often first up for the big kids. He is 24 years old, which is pretty old, actually, but he’s still trucking along great. He’s been a lesson horse at LionHeart for 17 years and has literally taught thousands of lessons and probably been ridden by every student who has come through the door in those 17 years. Jake’s a bit of a loner- he usually prefers to keep to himself, though he has recently found the love of his life. He has a great work ethic and seems to enjoy showing. He is a registered National Show Horse (a breed created by crossing Saddlebred and Arabian) under the show name “Legerdemain” (French for “slight of hand,” meaning “trickster,” which is funny because Jake is about as honest as they come). He has won dozens and dozens of blue ribbons in Academy classes." },
  // ...rest of horses
]

const memoryImages = [
  { img: "/images/RalfILM.JPG", caption: "A Lucky Town - Ralf" },
  { img: "/images/SkyILM.JPG", caption: "Scarlet Sky" },
  { img: "/images/BoILM.JPG", caption: "Heartland's Double Trouble - Bo" },
  // ...rest of memoryImages
]

const kittyImages = [
  "/images/smitty1.jpeg",
  "/images/smitty2.jpeg",
]

export default function HorsesPage() {
  const [selectedHorse, setSelectedHorse] = useState(null)
  const [showKitty, setShowKitty] = useState(false)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [kittyImgIndex, setKittyImgIndex] = useState(0)
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-20">
        <div className="mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="font-papyrus text-4xl text-white mb-4">Meet the Horses</h1>
          <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            We have an incredible roster of horses and ponies at LionHeart Riding Academy that all have something unique to offer our riders.
          </p>
        </div>
      </section>

      {/* Horses Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {horses.map((horse) => (
              <Card
                key={horse.name}
                onClick={() => setSelectedHorse(horse)}
                className="cursor-pointer bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-4 flex flex-col items-center transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={horse.img}
                  alt={horse.name}
                  width={250}
                  height={183}
                  className="rounded-lg mb-4 object-contain"
                />
                <h3 className="font-papyrus text-2xl text-lhra-blue mb-1">{horse.name}</h3>
                <p className="font-lexend text-gray-700 text-center text-base">{horse.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> {/* <-- Added closing tag */}

      {/* Horse Popup */}
      <Dialog open={!!selectedHorse} onOpenChange={(open) => { if (!open) setSelectedHorse(null) }}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-papyrus text-2xl text-lhra-blue">
              {selectedHorse?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {selectedHorse?.img && (
              <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                  src={selectedHorse.img}
                  alt={selectedHorse.name}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            )}

            <div className="flex-1 text-left">
              <p className="font-lexend text-gray-700 mb-4">{selectedHorse?.desc}</p>
              {selectedHorse?.details && (
                <p className="font-lexend text-gray-400">{selectedHorse.details}</p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Memory Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-papyrus text-3xl text-lhra-blue mb-6">In Loving Memory</h2>
          <div className="flex flex-col items-center">
            <div className="relative w-[300px] h-[220px] mx-auto mb-4">
              {memoryImages[carouselIdx]?.img && (
                <Image
                  src={memoryImages[carouselIdx].img}
                  alt={memoryImages[carouselIdx].caption}
                  fill
                  className="rounded-lg object-contain"
                />
              )}
            </div>
            <p className="font-florentia text-gray-700 mb-4">{memoryImages[carouselIdx]?.caption}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setCarouselIdx((carouselIdx - 1 + memoryImages.length) % memoryImages.length)}
                className="px-4 py-2 bg-lhra-blue text-white rounded"
              >
                Prev
              </button>
              <button
                onClick={() => setCarouselIdx((carouselIdx + 1) % memoryImages.length)}
                className="px-4 py-2 bg-lhra-blue text-white rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kitty Popup */}
      {showKitty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button onClick={() => setShowKitty(false)} className="absolute top-2 right-4 text-2xl">×</button>
            <h3 className="font-florentia text-2xl text-lhra-blue mb-2">Meet Smith Kitty!</h3>
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
}
