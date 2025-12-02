'use client'

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const horses = [
  { name: "The Painted Potato, aka Misty", img: "/images/misty.webp", desc: "Misty is a lovable, stubbon pony in her late 20s that often teaches young riders' first lessons!", details: "Misty is often the first pony ridden by Littles at LionHeart. She was born long, long ago in a galaxy far, far away- we think she is in her late twenties. She has been a lesson pony at LionHeart for several years and taught many lessons. She's primarily motivated by food; in fact, she doesn't seem to be motivated by much else at all. She's a little ornery and more than a little stubborn, but we just can't help but love her. Misty's breed is a mystery to everyone- probably mostly Shetland pony but there's definitely something else in there somewhere- and she has shown under the name 'The Painted Potato' to a number of blue ribbons in Academy classes (seriously, she actually has won classes!)." },
  { name: "Legerdemain, aka Jake", img: "/images/Jake.jpg", desc: "Jake is a 24 year old American Saddlebred/Arabian cross who has been with LionHeart for over a decade giving countless lessons to beginner riders!", details: "Jake is often first up for the big kids. He is 24 years old, which is pretty old, actually, but he's still trucking along great. He's been a lesson horse at LionHeart for 17 years and has literally taught thousands of lessons and probably been ridden by every student who has come through the door in those 17 years. Jake's a bit of a loner- he usually prefers to keep to himself, though he has recently found the love of his life. He has a great work ethic and seems to enjoy showing. He is a registered National Show Horse (a breed created by crossing Saddlebred and Arabian) under the show name 'Legerdemain' (French for 'slight of hand,' meaning 'trickster,' which is funny because Jake is about as honest as they come). He has won dozens and dozens of blue ribbons in Academy classes." },
  { name: "Mr. Johnny Cash, aka Cash", img: "/images/Website Pics/Website Pics/Meet the Horses/Cash.jpg", desc: "Cash is a sweet but anxious 20 year old American Saddlebred who loves company and has become a LionHeart favorite in the show ring!", details: "Cash is about 20 years old and has been at LionHeart for about 3 years. He's very sweet and very loving but a very anxious guy about certain things- he doesn't like enclosed small spaces and he doesn't like to be alone. Under saddle, he does not particularly like to stand still but prefers to keep moving even if it's just at a walk. However, by the time most of our students ride Cash, they are ready to ride a horse that has some go forward that they don't have to push all the time. He has a good work ethic and loves Gwen; is also pretty fond of treats and good grass. Cash is supposedly registered as an American Saddlebred. We show him as 'Mr Johnny Cash,' and he has already won numerous blue ribbons for LionHeart Academy riders."},
  { name: "Jinacio, aka Gwen", img: "/images/Gwen.jpg", desc: "Gwen is a 20 year old Paint/Arabian cross, owned by Sharon Gaughan, and while having not been shown yet, is a favorite steed of choice in LionHeart's Drill Team!", details: "Gwen is 20 years old and has been a lesson horse at LionHeart for 3 years. She is owned by Sharon Gaughan, who generously shares her with us. Gwen is very dedicated to her 'mom,' and usually looks at Kate like, 'I guess you'll do...' Gwen is very fond of Cash (though maybe not quite as fond as he is of her) and treats. Gwen also has a bigger engine and prefers to trot rather than walk. She is a favorite mount for Drill Team as she is very agile and can adjust speed quickly as needed. She also doesn't mind being in close quarters with other horses. Gwen is a registered Half Arabian/ Paint cross under the name 'Jinacio.' She hasn't shown yet under the LionHeart banner though Kate is really hoping that will happen soon."},
  { name: "Hello Kitty, aka Kitty", img: "/images/Kitty.jpg", desc: "Kitty is a 9 year old Hackney pony and has done well with LionHeart riders in the show ring!", details: "Kitty is our Hackney Pony- we love to represent the hackney breed at LionHeart! She is 9 years old and is a typical pony- a little ornery and constantly looking for trouble. She loves Kate and tries whenever possible to go to her. Kitty is also a picky pony when it comes to food- she really only likes carrots, though she'll eat a peppermint or two if that's all that's available. Kitty requires a lot of focus from her rider, so she's ridden by the intermediate riders. She can trot very fast if you ask her to, and she can canter- very rare for a Hackney to be able to canter! She's registered with the Hackney Horse and Pony Association as 'Kit's Fascination,' though we show her in Academy as 'Hello Kitty.' She has won several Academy classes and generally gets good ribbons for us in Academy as well as in Performance (suit) classes."  },
  { name: "Perfect Pink, aka Bella", img: "/placeholder.jpg", desc: "Bella is an 11 year old American Saddlebred and the newest member of the LionHeart family!", details: "Bella is the newest member of the LionHeart team, having just joined us in July of 2025. She's 11 years old, so she has plenty of time to rack up some good years with us! She's an honest lady and does whatever you ask of her- kids love riding her because she responds to the smallest movements of your body. She really likes her 'boyfriend' Jake and would really like to just eat all day long. She has a wonderful smooth canter that everyone loves. She's a registered Saddlebred under the name 'Perfect Pink,' which we do use when we show her because it's so cute! She's only done a couple shows with us, but again, has plenty of years to gather some wins." },
  { name: "Desert Highway, aka Austin", img: "/images/Austin.jpg", desc: "Austin is a 7 year old American Saddlebred who is currently retired from showing, but is a wonderful lesson horse who is loved by many LionHeart riders!", details: "Austin is 7 years old and has been at LionHeart for three years. Some of the older riders say that if Austin were human, he would be a surfer dude- he's got curly blond hair and adorable eyes that just make your heart melt every time- but he's inherently lazy and is constantly looking for a way to get out of work. (If you're not convinced yet, his birthday is 4/20.) Austin is always a challenge under saddle and is definitely a horse for our intermediate to advanced riders- though I could see a day when he might become a beginner horse- he'd probably be pretty agreeable to doing very little! He is very fun in the stall though- he's into everything, wants to follow you around, will put his head over your shoulder and give you a hug. He LOVES attention. He's registered as 'Desert Highway' with the Saddlebred registry. He gets very nervous showing so he's currently on hiatus while we hopefully get him more comfortable at shows." },
  { name: "I'm Tantalyzing, aka Stella", img: "/images/Stella.jpg", desc: "Stella is an 8 year old American Saddlebred who is absolutely Tantalyzing under saddle and has done great for LionHeart in the show ring!", details: "Stella has been at LionHeart since 2024 and is 8 years old. She is a total cuddlebug and loves pets and hugs and loves licking the salty sweat off your arms in the summertime. She will also follow you around the stall like a puppy and she loves attention from the little kids and never bites little fingers. She's beautiful under saddle though she requires a delicate touch so she's definitely only ridden by our most advanced riders. She is another registered Saddlebred, show name 'I'm Tantalizing,' which is very appropriate for her. She's already brought home numerous wins in just a few shows for us so far, and we have high hopes for a long and successful future for her." },
  { name: "Sak's on Fifth, aka Diva", img: "/images/Website Pics/Website Pics/Meet the Horses/Diva.jpg", desc: "Diva is a 14 year old American Saddlebred, owned by Betts Coup, who started her show career in Performance classes and is now at LionHeart as our latest Academy superstar!", details: "Diva truly lives up to her name. She 100% thinks she is the most awesome thing out there, and she's not too far off! Diva joined LHRA in February of 2025 and is 14 years old. She belongs to Betts Coup, Kate's sister, who showed her in Park classes for many years, winning many classes and getting top ribbons at National and World Championships. Diva was thought to be a real challenge at her former barn- they wouldn't even let a kid ride her at all- but after a couple of years out in a field, Diva was ready to come back into a warm cozy stall and live the good life. She has mellowed significantly and has become a reliable Academy Superstar within just a few months. Diva is registered as 'Saks on Fifth'."},
  { name: "Ridgewood's Lookin' for Blue, aka Molly", img: "/images/Website Pics/Website Pics/Meet the Horses/Molly.jpg", desc: "Molly is an 8 year old American Saddlebred owned by Charlotte Struckhoff and leased by Hailey Niles. She has been a great showhorse for both of these riders and loves to compete!", details: "Molly is 8 years old and has been at LionHeart for 4 years. She is a five-gaited showhorse; so she can walk, trot, canter, slow gait, and rack! She is only ridden by Kate, Charlotte, and Hailey, but she loves attention and snacks from anyone. She can be very opinionated (and a little spoiled), but she is also friendly and interested in what is going on around her. Molly has mellowed quite a bit since she got to LionHeart, but she still loves to show. She is very levelheaded and rarely spooks or shies away from other horses. She has both learned a lot and taught her riders a lot in the years that she has been at LionHeart." },
]

const retirees = [
   { name: "The Persistence of Memory, aka Frida", img: "/images/Website Pics/Website Pics/Meet the Horses/Frida.jpg", desc: "Frida is a 20 year old American Saddlebred who has been with LionHeart for close to a decade, and retired from doing lessons in 2025.", details: "Frida has been at LionHeart for almost 10 years now. She had to retire from lessons as she became unsuitable for our program- but adult staff who love her still work her on occasion. She was definitely a matter of taste- some riders loved her and others hated her, but she does have some cool abilities that our other horses don't have. Frida has been trained in all three disciplines- saddle seat, hunt seat, and western- so she's very versatile. She loved to be ridden western outside and would happily lope through the grass as long as you want. She can be a little ornery sometimes. She got very sick a couple of years ago and that changed her behavior significantly, which is when most of her 'haters' came to dislike her. Fortunately, she recovered from her illness and is back to herself again. She's a registered Saddlebred under the (truly horrible) name 'Inflammatory Asset,' but we showed her as 'The Persistence of Memory.' She hasn't shown very much as it really doesn't seem to be something she enjoys." },
   { name: "Another Hot Summer Night, aka Fitz", img: "/images/Fitz.jpg", desc: "Fitz is a 25 year old American Saddlebred who has been with LionHeart for 14 years, and retired in 2025.", details: "Fitz has been at LionHeart for 14 years and at 25 years young, he’s definitely got seniority. He had to retire from lessons this year as his age has made his legs a little wobbly, but he taught hundreds of lessons over those 14 years. He started out our fancy, fired up show horse when we got him, and over the years gradually mellowed and realized that the little kids who just let him be chill were pretty awesome. He loves to be groomed and any kind of food, and he’s extremely sweet on the ground. He loves the outdoor life after living for many years in a stall, and is the alpha of his little herd. His registered name is “Another Hot Summer Night,” and as you can probably guess, he is a Saddlebred."},
 ]

const memoryImages = [
  { img: "/images/Website Pics/Website Pics/Meet the Horses/JaneILM.jpg", caption: "Sweet Baby Jane" },
  { img: "/images/Website Pics/Website Pics/Meet the Horses/Mose.jpg", caption: "Mosette" },
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
  "/images/Website Pics/Website Pics/Meet the Horses/BlueKitty.jpg",
  "/images/smitty2.jpeg",
  "/images/Website Pics/Website Pics/Meet the Horses/LampeKitty.jpg",
]

export default function HorsesPage() {
  const [selectedHorse, setSelectedHorse] = useState(null)
  const [selectedRetiree, setSelectedRetiree] = useState(null)
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

        {/* Horse Popup - Improved Layout with Smaller Images */}
        <Dialog open={!!selectedHorse} onOpenChange={() => setSelectedHorse(null)}>
          <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedHorse(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-gray-800 text-xl"
              >
                ×
              </button>
              
              <DialogHeader className="p-6 pb-4">
                <DialogTitle className="font-papyrus text-3xl text-lhra-blue pr-12">
                  {selectedHorse?.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="px-6 pb-6">
                {/* Desktop Layout - Side by Side */}
                <div className="hidden md:flex gap-6 items-start">
                  {selectedHorse?.img && (
                    <div className="flex-shrink-0">
                      <Image 
                        src={selectedHorse.img} 
                        alt={selectedHorse.name} 
                        width={350} 
                        height={260}
                        className="rounded-lg object-cover" 
                      />
                    </div>
                  )}
                  {selectedHorse?.details && (
                    <div className="flex-1 min-w-0">
                      <p className="font-lexend text-gray-700 text-base leading-relaxed">
                        {selectedHorse.details}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Mobile Layout - Stacked */}
                <div className="md:hidden flex flex-col gap-4">
                  {selectedHorse?.img && (
                    <div className="w-full flex justify-center">
                      <Image 
                        src={selectedHorse.img} 
                        alt={selectedHorse.name} 
                        width={150} 
                        height={110} 
                        className="rounded-lg object-cover" 
                      />
                    </div>
                  )}
                  {selectedHorse?.details && (
                    <div>
                      <p className="font-lexend text-gray-700 text-sm leading-relaxed">
                        {selectedHorse.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

    {/* Retirees & Rescues Section */}
<section className="py-4 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
    <h2 className="font-papyrus text-3xl text-lhra-blue mb-2">
      Retirees & Rescues
    </h2>
    <div className="h-[2px] bg-yellow-500 w-1/5 mx-auto mt-0 mb-0"></div>
  </div>
</section>
      
   <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {retirees.map((retiree) => (
              <Card
                key={retiree.name}
                onClick={() => setSelectedRetiree(retiree)}
                className="cursor-pointer bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-4 flex flex-col items-center transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={retiree.img}
                  alt={retiree.name}
                  width={250}
                  height={183}
                  className="rounded-lg mb-4 object-contain"
                />
                <h3 className="font-papyrus text-2xl text-lhra-blue mb-1">{retiree.name}</h3>
                <p className="font-lexend text-gray-700 text-center text-base">{retiree.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Retiree Popup */}
        <Dialog open={!!selectedRetiree} onOpenChange={() => setSelectedRetiree(null)}>
          <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedRetiree(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-gray-800 text-xl"
              >
                ×
              </button>
              
              <DialogHeader className="p-6 pb-4">
                <DialogTitle className="font-papyrus text-3xl text-lhra-blue pr-12">
                  {selectedRetiree?.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="px-6 pb-6">
                {/* Desktop Layout - Side by Side */}
                <div className="hidden md:flex gap-6 items-start">
                  {selectedRetiree?.img && (
                    <div className="flex-shrink-0">
                      <Image 
                        src={selectedRetiree.img} 
                        alt={selectedRetiree.name} 
                        width={350} 
                        height={260}
                        className="rounded-lg object-cover" 
                      />
                    </div>
                  )}
                  {selectedRetiree?.details && (
                    <div className="flex-1 min-w-0">
                      <p className="font-lexend text-gray-700 text-base leading-relaxed">
                        {selectedRetiree.details}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Mobile Layout - Stacked */}
                <div className="md:hidden flex flex-col gap-4">
                  {selectedRetiree?.img && (
                    <div className="w-full flex justify-center">
                      <Image 
                        src={selectedRetiree.img} 
                        alt={selectedRetiree.name} 
                        width={150} 
                        height={110} 
                        className="rounded-lg object-cover" 
                      />
                    </div>
                  )}
                  {selectedRetiree?.details && (
                    <div>
                      <p className="font-lexend text-gray-700 text-sm leading-relaxed">
                        {selectedRetiree.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

  

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
                className="px-4 py-2 bg-lhra-blue text-white rounded hover:bg-blue-700 transition-colors"
              >
                Prev
              </button>
              <button
                onClick={() => setCarouselIdx((carouselIdx + 1) % memoryImages.length)}
                className="px-4 py-2 bg-lhra-blue text-white rounded hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kitty Popup - Also improved with close button */}
      {showKitty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
            <button 
              onClick={() => setShowKitty(false)} 
              className="absolute top-4 right-4 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-800 text-xl"
            >
              ×
            </button>
            <h3 className="font-florentia text-2xl text-lhra-blue mb-2 pr-8">Meet Smith Kitty!</h3>
            <p className="font-florentia text-gray-700 mb-4 text-sm">
              Smith (or, Smitty) is our very friendly barn cat. He loves laying in the middle of the arena or climbing into the hay loft. If you see him, feel free to pet him and give him some treats.
            </p>
            <div className="text-center">
              <Image
                src={kittyImages[kittyImgIndex]}
                alt="Smith Kitty"
                width={220}
                height={180}
                className="rounded-lg object-contain mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setKittyImgIndex((kittyImgIndex + 1) % kittyImages.length)}
              />
              <p className="text-xs text-gray-500 mt-2">Click image to see more photos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
