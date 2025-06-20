import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PartyPopper } from "lucide-react"

export default function PartiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PartyPopper className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">Parties</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            We have some annual seasonal parties at LionHeart and have been a popular birthday party destination for riders!
          </p>
        </div>
      </section>

      {/* Seasonal Parties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Seasonal Parties</h2>
            <div className="h-2 bg-lhra-yellow w-1/3 mx-auto mb-6"></div>
            <p className="font-lexend text-lg text-black">Our seasonal parties have become a staple at LionHeart. They are a great way to get together as a barn family and celebrate with horses, food, and fun!</p>
          </div>

          {/* Halloween Party */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="flex-1">
              <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-4">Halloween Party</h3>
              <p className="font-lexend text-black mb-2">Every year we throw a Halloween Party. The biggest event of the night is our costume contest - riders dress themselves and a horse of their choosing up, then everyone bids on who has the best costume and a winner is crowned! Check out past costumes <a href="https://www.instagram.com/p/DBTfVHvRvYo/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="text-lhra-blue underline">here</a>. Oftentimes we will have a Drill Team <Link href="/activities/drill-team" className="text-lhra-blue underline">performance</Link> and a potluck. Other festivities change from year to year.</p>
            </div>
            <div className="flex-1 flex flex-col space-y-4">
              <Image src="/images/drill-team.jpeg" alt="Halloween 1" width={500} height={350} className="w-full object-cover" />
              <Image src="/images/competition.jpeg" alt="Halloween 2" width={500} height={350} className="w-full object-cover" />
            </div>
          </div>

          {/* Winter Extravaganza */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-16">
            <div className="flex-1">
              <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-4">Winter Extravaganza</h3>
              <p className="font-lexend text-black mb-2">The biggest barn event of the year. Each of our Drill Teams put on a massive performance filled with costumes, lighting, props, etc. It is incredible to watch and best of all, it is open to the public - stay tuned for the annual announcement, we hope you'll make it.</p>
            </div>
            <div className="flex-1 flex flex-col space-y-4">
              <Image src="/images/IMG_1933.webp" alt="Winter 1" width={500} height={350} className="w-full object-cover" />
              <Image src="/images/IMG_1944.webp" alt="Winter 2" width={500} height={350} className="w-full object-cover" />
            </div>
          </div>

          {/* Spring/Summer Party */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="flex-1">
              <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-4">Spring/Summer Party</h3>
              <p className="font-lexend text-black mb-2">We don't always have one of these, but sometimes we have a spring/summer party to celebrate the warming weather and enjoy some time around horses. Usually would be paired with a Drill Team performance.</p>
            </div>
            <div className="flex-1 flex flex-col space-y-4">
              <Image src="/images/horse-lesson.jpeg" alt="Spring 1" width={500} height={350} className="w-full object-cover" />
              <Image src="/images/bo.webp" alt="Spring 2" width={500} height={350} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Parties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Birthday Parties</h2>
            <div className="h-2 bg-lhra-yellow w-1/3 mx-auto mb-6"></div>
          </div>
          <p className="font-lexend text-lg text-black mb-12 text-center">Many of our riders enjoy having their birthday party at LionHeart! It is the perfect place to spend time with friends. We allow our riders to dress up / decorate some of the horses using pet-safe dyes/glitter, or simply with a costume. Pony rides may be given. Horse enthusiast or not, all are welcome at a LionHeart birthday party, and who knows, if you get invited you might even get hooked and become a horse enthusiast yourself!</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
            <Image src="/images/ralf.webp" alt="Birthday 1" width={500} height={350} className="object-cover" />
            <Image src="/images/skylar.webp" alt="Birthday 2" width={500} height={350} className="object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Interested in LionHeart Parties?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <a href="http://docs.google.com/document/d/1DaFIJ-Ym4LcIrr8A9rfzr0jkgAaFF5f1/edit?fbclid=PAZXh0bgNhZW0CMTEAAaeOR8lhwHqvKfCe3IqIiFUKLgVu48aVkipAmkj3iuqPpHrwLC9G0i5775GvaQ_aem_72lwpl9HL3lG7joJ-P8ozQ&tab=t.0" target="_blank" rel="noopener noreferrer">Events Schedule</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="/about/contact">Book a Party</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
