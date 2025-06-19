import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Instagram, Facebook } from "lucide-react"
import ManeUpdate from "@/components/ManeUpdate"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-lhra-blue/90 z-10" />

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/horse-lesson.jpeg"
            alt="Lionheart Riding Academy Indoor Arena"
            fill
            className="object-cover"
            priority
          />  
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <h1 className="font-papyrus text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg tracking-wider whitespace-nowrap">
              RIDE WITH THE PRIDE
            </h1>
            <div className="h-1 bg-white w-1/3 mx-auto mb-2"></div>
          </div>

          <p className="font-florentia text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            At LionHeart Riding Academy, we strive to create a safe, fun environment for horse enthusiasts of all ages to reach their personal horsemanship goals. Along the way, our riders learn life lessons about responsibility, independence, persistence, generosity, and acceptance.
          </p>

          {/* CTA Buttons */}
          {/* Removed 'Begin Your Journey' button */}

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <Link
              href="https://instagram.com/lionheartridingacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-lhra-yellow hover:text-lhra-blue text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/20"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Follow us on Instagram</span>
            </Link>
            <Link
              href="https://facebook.com/LionHeartRidingAcademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-lhra-yellow hover:text-lhra-blue text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/20"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Follow us on Facebook</span>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Services/Camps Section */}
      <section className="py-20 bg-lhra-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-papyrus text-4xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Riding Lessons */}
            <Link href="/lessons/classes" className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
              <Image src="/images/horse-lesson.jpeg" alt="Riding Lessons" width={300} height={180} className="rounded-lg mb-4 object-cover w-full h-40" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Riding Lessons</h3>
              <p className="font-florentia text-black">We teach Saddleseat riding on American Saddlebred horses and Hackney ponies.</p>
            </Link>
            {/* Service Card 2: Camps */}
            <Link href="/activities/camps" className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
              <Image src="/images/competition.jpeg" alt="Camps" width={300} height={180} className="rounded-lg mb-4 object-cover w-full h-40" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Camps</h3>
              <p className="font-florentia text-black">We offer riding camps for all riding levels where riders learn about horse care, horse show prep, and more.</p>
            </Link>
            {/* Service Card 3: Horse Shows */}
            <Link href="/activities/horse-shows" className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
              <Image src="/images/drill-team.jpeg" alt="Horse Shows" width={300} height={180} className="rounded-lg mb-4 object-cover w-full h-40" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">Horse Shows</h3>
              <p className="font-florentia text-black">We have an Academy focused show program available for riders of all levels.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* The Mane Update Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex-shrink-0 flex justify-center">
              <Image src="/images/logo.png" alt="LionHeart Logo" width={220} height={220} />
            </div>
            <div className="w-full max-w-xl">
              <ManeUpdate />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
