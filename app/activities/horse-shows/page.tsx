import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HorseShowsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Intro Section */}
      <section className="py-16 bg-lhra-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-papyrus text-4xl font-bold text-white mb-4">Horse Shows</h1>
          <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
          <div className="max-w-3xl mx-auto">
  <p className="font-lexend text-xl text-white mb-8">
    Many of our students at LionHeart compete in horse shows. They are completely optional, but we encourage our riders to try showing.
  </p>
</div>

        </div>
      </section>

      {/* Academy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-4xl font-bold text-lhra-blue mb-4">Academy</h2>
            <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
          </div>
          <p className="font-lexend text-lg text-black text-center mb-12">All of our riders begin showing in Academy classes. These classes showcase riders on lesson horses and are judged on the rider's performance–not the horse.</p>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="font-lexend font-bold text-xl text-lhra-red mb-4">The benefits of showing in Academy:</h3>
              <ul className="font-lexend text-black list-disc list-inside space-y-3 mb-6">
                <li>It is relatively cheap. While the purchase of clothes is necessary, they are way less expensive than the clothes needed for Performance classes. Also, the purchase of a fancy show horse is not needed.</li>
                <li>They are a great way to find out if you and/or your child are ready for the commitment of owning a show horse.</li>
                <li>They teach riders perseverance, dedication, and hard work. It takes time and effort to get show-ready, and riders learn to appreciate the journey. And, as they train and compete with fellow riders, they build friendships and learn about sportsmanship and teamwork.</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative overflow-hidden h-80 w-full max-w-xl rounded-lg">
                <Image src="/images/Website Pics/Website Pics/Horse Shows Page/CharlottePerformance.jpg" alt="Academy Class" width={520} height={350} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY/SET/RIDE Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* READY */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex justify-center">
              <div className="relative overflow-hidden h-80 w-full max-w-xl rounded-lg">
                <Image src="/images/Website Pics/Website Pics/Horse Shows Page/READY.jpg" alt="Ready" width={500} height={300} className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-2">READY.</h3>
              <p className="font-lexend text-black">A rider's hair will be put into a low bun. This will require bobby pins, hair nets, hair spray, and hair ties.</p>
            </div>
          </div>
          {/* SET */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1 flex justify-center">
              <div className="relative overflow-hidden h-80 w-full max-w-xl rounded-lg">
                <Image src="/images/Website Pics/Website Pics/Horse Shows Page/SET.jpg" alt="Set" width={500} height={300} className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-2">SET.</h3>
              <p className="font-lexend text-black">A rider will wear makeup when showing. It should be bold enough that judges can see it in the ring. Any makeup will work.</p>
            </div>
          </div>
          {/* RIDE */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex justify-center">
              <div className="relative overflow-hidden h-80 w-full max-w-xl rounded-lg">
                <Image src="/images/Website Pics/Website Pics/Horse Shows Page/RIDE.jpg" alt="Ride" width={500} height={300} className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-2">RIDE.</h3>
              <p className="font-lexend text-black">We have a show closet where riders/guardians may purchase used show clothes. A rider will need a black helmet or helmet cover; a tie; a long-sleeve, button-up shirt; a vest; show jods; show boots; & show gloves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Nationals Section */}
      <section className="py-16 bg-lhra-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-papyrus text-3xl font-bold text-white mb-6">ACADEMY NATIONALS</h2>
          <p className="font-lexend text-white text-base mb-8">For many of our riders, the culmination of their show season is Academy Nationals in Murfreesboro, Tennessee. This show takes place in late October / early November, usually beginning the day before Halloween. It is a large show in a large arena with a lot of competition - a one of a kind experience.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="relative overflow-hidden h-64 w-78 rounded-lg">
              <Image src="/images/Website Pics/Website Pics/Horse Shows Page/JacketAcademyNationals.jpg" alt="Academy Nationals 1" width={450} height={300} className="w-full h-full object-contain" />
            </div>
            <div className="relative overflow-hidden h-64 w-78 rounded-lg">
              <Image src="/images/Website Pics/Website Pics/Horse Shows Page/TeamAcademyNationals.jpg" alt="Academy Nationals 2" width={450} height={300} className="w-full h-full object-contain" />
            </div>
            <div className="relative overflow-hidden h-64 w-78 rounded-lg">
              <Image src="/images/Website Pics/Website Pics/Horse Shows Page/WaveAcademyNationals.jpg" alt="Academy Nationals 3" width={450} height={300} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Classes Section */}
      <section className="py-16 bg-lhra-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-papyrus text-3xl font-bold text-white mb-6">PERFORMANCE CLASSES</h2>
          <p className="font-lexend text-white text-base mb-8">Some of our riders have gone on to compete in higher level classes, called performance classes. These classes have fancier horses and higher competition. A purchase of a suit will be required, and possibly the purchase or lease of a show horse if the rider/guardian so chooses. We will inform riders/guardians when we believe they are ready for performance classes.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="relative overflow-hidden h-64 w-78 rounded-lg">
              <Image src="/images/Website Pics/Website Pics/Horse Shows Page/KatePerformance.jpg" alt="Performance Classes 1" width={450} height={300} className="w-full h-full object-contain" />
            </div>
            <div className="relative overflow-hidden h-64 w-78 rounded-lg">
              <Image src="/images/Website Pics/Website Pics/Horse Shows Page/IzzyPerformance.jpg" alt="Performance Classes 2" width={450} height={300} className="w-full h-full object-contain" />
            </div>
            <div className="relative overflow-hidden h-64 w-78 rounded-lg">
              <Image src="/images/Website Pics/Website Pics/Horse Shows Page/CharlottePerformance.jpg" alt="Performance Classes 3" width={450} height={300} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="elegant-heading text-3xl font-bold mb-4">Interested in Showing?</h2>
<p className="font-lexend text-lg mb-6">Come support Team LionHeart at a show or talk to us about starting your show career!</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    asChild
    size="lg"
    className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
  >
    <Link href="https://docs.google.com/document/d/1DaFIJ-Ym4LcIrr8A9rfzr0jkgAaFF5f1/edit?fbclid=PAZXh0bgNhZW0CMTEAAaeOR8lhwHqvKfCe3IqIiFUKLgVu48aVkipAmkj3iuqPpHrwLC9G0i5775GvaQ_aem_72lwpl9HL3lG7joJ-P8ozQ&tab=t.0" target="_blank" rel="noopener noreferrer">
      View Show Schedule
    </Link>
  </Button>
  <Button
    asChild
    variant="outline"
    size="lg"
    className="text-white border-white font-lexend font-semibold px-8 py-6 text-lg"
  >
    <Link href="/contact">Get More Info</Link>
  </Button>
</div>

        </div>
      </section>
    </div>
  )
}
