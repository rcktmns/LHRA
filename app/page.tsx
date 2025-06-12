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
            <h1 className="font-papyrus text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 drop-shadow-lg tracking-wider">
              RIDE WITH THE PRIDE
            </h1>
            <div className="h-1 bg-lhra-yellow w-1/3 mx-auto"></div>
          </div>

          <p className="font-lexend text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            At LionHeart, we teach Saddle Seat style riding on American Saddlebred horses. Experience the elegance of
            English riding with safety as our number one priority.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-lhra-red text-white border-2 border-lhra-yellow hover:bg-lhra-blue hover:text-lhra-yellow hover:scale-105 hover:shadow-[0_0_12px_#B8860B] font-lexend font-bold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/lessons" className="flex items-center gap-2">
                Begin Your Journey <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-papyrus text-4xl font-bold text-lhra-blue text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="font-lexend text-xl font-bold text-lhra-blue mb-2">Private Lessons</h3>
              <p className="text-gray-600">Personalized instruction tailored to your skill level and goals.</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="font-lexend text-xl font-bold text-lhra-blue mb-2">Group Camps</h3>
              <p className="text-gray-600">Join our summer camps for a fun, educational riding experience.</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="font-lexend text-xl font-bold text-lhra-blue mb-2">Horse Shows</h3>
              <p className="text-gray-600">Compete in local and regional shows with our expert guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mane Update Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-papyrus text-4xl font-bold text-lhra-blue mb-4">Courage. Strength. Confidence.</h2>
              <p className="font-lexend text-gray-700 leading-relaxed">
                Welcome to LionHeart Riding Academy! At LionHeart, we strive to create a safe, fun environment for horse enthusiasts of all ages to reach their personal horsemanship goals. We also work to create life experiences for our riders so that they learn not only about horses and riding, but so that they also learn independence, responsibility, persistence, generosity, and acceptance.
              </p>
            </div>
            <div>
              <ManeUpdate />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
