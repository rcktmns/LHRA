import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HorseShowsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-papyrus text-5xl font-bold text-lhra-blue mb-6">Horse Shows</h1>
          <p className="font-florentia text-lg text-black mb-8">Many of our students at LionHeart compete in horse shows. They are completely optional, but we encourage our riders to try showing.</p>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-papyrus text-4xl font-bold text-center text-lhra-blue mb-6">Academy</h2>
          <p className="font-florentia text-black text-center mb-8">All of our riders begin showing in Academy classes. These classes showcase riders on lesson horses and are judged on the rider's performance–not the horse.</p>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="font-florentia font-bold text-2xl text-lhra-red mb-2">The benefits of showing in Academy:</h3>
              <ul className="font-florentia text-black list-disc list-inside space-y-2 mb-4">
                <li>It is relatively cheap. While the purchase of clothes is necessary, they are way less expensive than the clothes needed for Performance classes. Also, the purchase of a fancy show horse is not needed.</li>
                <li>They are a great way to find out if you and/or your child are ready for the commitment of owning a show horse.</li>
                <li>They teach riders perseverance, dedication, and hard work. It takes time and effort to get show-ready, and riders learn to appreciate the journey. And, as they train and compete with fellow riders, they build friendships and learn about sportsmanship and teamwork.</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/images/competition.jpeg" alt="Academy Class" width={350} height={250} className="rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* READY/SET/RIDE Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* READY */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex justify-center">
              <Image src="/images/horse-lesson.jpeg" alt="Ready" width={300} height={220} className="rounded-lg shadow-md object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-florentia font-bold text-2xl text-lhra-red mb-2">READY.</h3>
              <p className="font-florentia text-black">A rider's hair will be put into a low bun. This will require bobby pins, hair nets, hair spray, and hair ties.</p>
            </div>
          </div>
          {/* SET */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1 flex justify-center">
              <Image src="/images/competition.jpeg" alt="Set" width={300} height={220} className="rounded-lg shadow-md object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-florentia font-bold text-2xl text-lhra-red mb-2">SET.</h3>
              <p className="font-florentia text-black">A rider will wear makeup when showing. It should be bold enough that judges can see it in the ring. Any makeup will work.</p>
            </div>
          </div>
          {/* RIDE */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex justify-center">
              <Image src="/images/drill-team.jpeg" alt="Ride" width={300} height={220} className="rounded-lg shadow-md object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-florentia font-bold text-2xl text-lhra-red mb-2">RIDE.</h3>
              <p className="font-florentia text-black">We have a show closet where riders/guardians may purchase used show clothes. A rider will need a black helmet or helmet cover; a tie; a long-sleeve, button-up shirt; a vest; show jods; show boots; & show gloves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Nationals Section */}
      <section className="py-16 bg-lhra-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-papyrus text-3xl font-bold text-white mb-6">ACADEMY NATIONALS</h2>
          <p className="font-florentia text-white mb-8">For many of our riders, the culmination of their show season is Academy Nationals in Murfreesboro, Tennessee. This show takes place in late October / early November, usually beginning the day before Halloween. It is a large show in a large arena with a lot of competition - a one of a kind experience.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Image src="/images/competition.jpeg" alt="Academy Nationals 1" width={200} height={140} className="rounded-lg shadow-md object-cover" />
            <Image src="/images/horse-lesson.jpeg" alt="Academy Nationals 2" width={200} height={140} className="rounded-lg shadow-md object-cover" />
            <Image src="/images/drill-team.jpeg" alt="Academy Nationals 3" width={200} height={140} className="rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </section>

      {/* Performance Classes Section */}
      <section className="py-16 bg-lhra-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-papyrus text-3xl font-bold text-white mb-6">PERFORMANCE CLASSES</h2>
          <p className="font-florentia text-white mb-8">Some of our riders have gone on to compete in higher level classes, called performance classes. These classes have fancier horses and higher competition. A purchase of a suit will be required, and possibly the purchase or lease of a show horse if the rider/guardian so chooses. We will inform riders/guardians when we believe they are ready for performance classes.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Interested in showing?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="https://docs.google.com/document/d/1DaFIJ-Ym4LcIrr8A9rfzr0jkgAaFF5f1/edit?fbclid=PAZXh0bgNhZW0CMTEAAaeOR8lhwHqvKfCe3IqIiFUKLgVu48aVkipAmkj3iuqPpHrwLC9G0i5775GvaQ_aem_72lwpl9HL3lG7joJ-P8ozQ&tab=t.0" target="_blank" rel="noopener noreferrer">View Show Schedule</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
