import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function HorsesPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-papyrus text-4xl font-bold text-lhra-blue text-center mb-12">Meet the Horses</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Our carefully selected horses are the heart of LHRA. Each one has been chosen for their temperament,
            training, and ability to connect with riders of all levels.
          </p>
        </div>
      </section>

      {/* Horse Profiles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mosette */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/IMG_1944.webp"
                alt="Mosette"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Mosette</h3>
              <p className="font-lexend text-gray-700">
                Meet Mosette! Show name: Mosette 😉<br />
                Mose is our old gal- she is currently retired. In her younger days Kate, who has owned her for almost 2 decades, showed her in performance classes (meaning it was judged on how good Mose looked). Recently, she has been shown in Academy five-gaited classes by some of our really advanced students. She's in the first stall since she loves greeting folks that come into the barn. If you see her give her some lovins (no treats though).<br />
                Picture: Nora Humfeld's senior pic w/ Mosette.
              </p>
            </div>

            {/* Molly */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/IMG_1933.webp"
                alt="Molly"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Molly</h3>
              <p className="font-lexend text-gray-700">
                Meet Molly! Show name: Ridgewood's Lookin' for Blue<br />
                Molly is another of our five-gaited horses. Charlotte Struckhoff (long-time student & current Monday instructor) owns her. She was trained here at LionHeart by Kate & Charlotte! Like Mose, she is shown in performance classes because she is super fancy. If you see her in the barn bring snacks to share; she will want a bite.<br />
                Picture: Charlotte Struckhoff's senior pic w/ Molly.
              </p>
            </div>

            {/* Skylar */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/skylar.webp"
                alt="Skylar"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Skylar</h3>
              <p className="font-lexend text-gray-700">
                Meet Skylar! Show name: Scarlet Sky<br />
                Sky has a lot of fans here at LionHeart. He is always booked for many horse shows throughout show season since he is wonderful in the show ring. Sky is great for intermediate to advanced riders. He is a super sweet boy, making sure that everyone who knows him loves him. If you see him in the barn give him a kiss or two: he deserves it for all his hard work. Sky has gotten reserve champion at Academy Nationals & stuns in Country Pleasure, too.<br />
                Picture: Addie Stroessner's '23 Nationals team pic w/ Skylar.
              </p>
            </div>

            {/* Ralf */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/ralf.webp"
                alt="Ralf"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Ralf</h3>
              <p className="font-lexend text-gray-700">
                Meet Ralf! Show name: A Lucky Town<br />
                Ralf is a very silly guy. He likes to nibble on shoulders, stick his tongue out, & eat hay. Ralf is a fun challenge for everyone that rides him. He's blind in his left eye, starts his lessons as slow as a snail, & can get revved up without any warning; so he has a lot to offer those that are up for it! Fun fact about Ralf: he has a few favorite songs (one of them being *Applause* by Lady Gaga) that get him HYPED.<br />
                Picture: Ava Gamble's '23 Nationals team pic w/ Ralf.
              </p>
            </div>

            {/* Jake */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/jake.webp"
                alt="Jake"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Jake</h3>
              <p className="font-lexend text-gray-700">
                Meet Jake! Show name: Legerdemain<br />
                Jake is our most perfect, most handsome old guy. He is wonderful for beginners, but when he gets outside he becomes an advanced horse. So he has something to offer for everyone! Jake is mostly American Saddlebred, but actually is 1/4th Arabian (if you know what to look for you can see it in his nose). Don't let his good looks fool you, though, because he will steal some hay if you're not looking.<br />
                Picture: Jake being groomed for a show.
              </p>
            </div>

            {/* Austin */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/austin.webp"
                alt="Austin"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Austin</h3>
              <p className="font-lexend text-gray-700">
                Meet Austin! Show name: Desert Highway<br />
                Austin is our certified weirdo. He's always got a weird look in his eye and is trying to have food in his mouth. Austin is one of our most advanced horses, but once a rider figures out all his quirks he is wonderful. Slowly but surely he is making his way to Academy superstar ranks, but isn't going to leave behind his Country Pleasure beginnings. Austin is the biggest cuddle bug of all, so don't be afraid to come give him a hug if you see him in the barn.<br />
                Picture: Clara Thoroughman's senior pic w/ Austin.
              </p>
            </div>

            {/* Bo */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/bo.webp"
                alt="Bo"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Bo</h3>
              <p className="font-lexend text-gray-700">
                Meet Bo! Show name: Heartland's Double Trouble<br />
                Bo is a sweetheart despite his no-good-sounding show name. His biggest fear is his shadow, so we don't think he's getting into any "double trouble" anytime soon. Bo is great for intermediate riders, but isn't a stranger to toting around some more determined beginners. He has been a favorite choice to take to Academy Nationals, leaving behind his Roadster roots. Bo is our only Hackney Pony, but he has a lot of love to give in his small package.<br />
                Picture: Caroline Forr's '23 Nationals team pic w/ Bo.
              </p>
            </div>

            {/* Misty */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/misty.webp"
                alt="Misty"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Misty</h3>
              <p className="font-lexend text-gray-700">
                Meet Misty! Show name: The Painted Potato<br />
                Misty is great for beginners, especially those who might be scared of a big horse, since she is so small. Most of the time she is unbothered, making her the perfect candidate for little kids to learn how to catch a horse, groom, etc. Misty isn't without her quirks, though. Her favorite thing is food, but she doesn't quite know what is and isn't food, so she ends up going after whatever is closest. Fun fact about Misty: despite her short stature and lack of iconic saddleseat motion, she has won some classes!<br />
                Picture: Lucy Scott w/ Misty.
              </p>
            </div>

            {/* Fitz */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/fitz.webp"
                alt="Fitz"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Fitz</h3>
              <p className="font-lexend text-gray-700">
                Meet Fitz! Show name: Another Hot Summer Night<br />
                Fitz is the best with baby beginners. He is really sweet & loves being given treats- he will take really nicely from a little kid's hand. Fitz is our WT Academy superstar; he's a great tiny step up from someone who previously showed Jake.<br />
                Picture: Fitz looking over the fence.
              </p>
            </div>

            {/* Frida */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/frida.webp"
                alt="Frida"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Frida</h3>
              <p className="font-lexend text-gray-700">
                Meet Frida! Show name: The Persistence of Memory<br />
                Frida is a nice challenge for intermediate riders. She is very particular about a lot of things, including who she does & doesn't like. Once riders figure out all her quirks she can be wonderful, but until then she teaches people a lot.<br />
                Picture: Izzy Petsel's senior pic w/ Frida.
              </p>
            </div>

            {/* Gwen */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/gwen.webp"
                alt="Gwen"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Gwen</h3>
              <p className="font-lexend text-gray-700">
                Meet Gwen! [No show name]<br />
                Gwen is an anomaly here at LionHeart. She is not an American Saddlebred, instead she is part Arabian, part Paint, & she used to be ridden Dressage instead of Saddleseat. Her head carriage & the way she moves is very different compared to what riders here are used to, so she is a fun project for intermediate riders seeking something outside of the norm.<br />
                Picture: Gwen outside.
              </p>
            </div>

            {/* Cash */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <Image
                src="/images/cash.webp"
                alt="Cash"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Cash</h3>
              <p className="font-lexend text-gray-700">
                Meet Cash! Show name: Mr. Johnny Cash<br />
                Cash is our newest addition to the LionHeart family! We got him from another barn in Mid-Missouri: High Spirits. Cash is our 3rd five-gaited horse, but unlike Mosette & Molly, he is best suited for Academy. He has a little bit for everybody since he listens so well, making him perfect for beginners to advanced riders. Cash is also great for riders first learning to slow-gait & rack.<br />
                Picture: Cash looking over the fence.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
