import Image from "next/image"
import Link from "next/link"
import ManeUpdate from "@/components/ManeUpdate"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-16">
          <div className="mb-6 inline-block">
        
            <Image
              src="/images/logo.png"
              alt="Lionheart Riding Academy Logo"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
          
            <h1 className="font-papyrus text-l sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-wider">
              RIDE WITH THE PRIDE
            </h1>
            <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
          </div>

          <p className="font-lexend text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            At LionHeart Riding Academy, we strive to create a safe, fun environment for horse enthusiasts of all ages to reach their personal horsemanship goals. Along the way, our riders learn life lessons about responsibility, independence, persistence, generosity, and acceptance.
          </p>

          {/* CTA Buttons */}
          {/* Removed 'Begin Your Journey' button */}

          {/* Social Media Links */}
          <div className="flex justify-center space-x-10">
            <a href="https://instagram.com/LionHeartRidingAcademy/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-lhra-yellow transition-colors duration-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-11 w-11" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com/LionHeartRidingAcademy/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-lhra-yellow transition-colors duration-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-11 w-11" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-17 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Services/Camps Section */}
      <section className="py-16 bg-lhra-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-papyrus text-3xl font-bold text-white text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Riding Lessons */}
            <Link href="/lessons/classes" className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-4 transition-all duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
              <Image src="/images/horse-lesson.jpeg" alt="Riding Lessons" width={300} height={180} className="rounded-lg mb-4 object-cover w-full h-40" />
              <h3 className="font-papyrus text-xl font-bold text-lhra-blue mb-3">Riding Lessons</h3>
              <p className="font-lexend text-black text-sm">We teach Saddleseat riding on American Saddlebred horses and Hackney ponies.</p>
            </Link>
            {/* Service Card 2: Camps */}
            <Link href="/activities/camps" className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-4 transition-all duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
              <Image src="/images/competition.jpeg" alt="Camps" width={300} height={180} className="rounded-lg mb-4 object-cover w-full h-40" />
              <h3 className="font-papyrus text-xl font-bold text-lhra-blue mb-3">Camps</h3>
              <p className="font-lexend text-black text-sm">We offer riding camps for all riding levels where riders learn about horse care, horse show prep, and more.</p>
            </Link>
            {/* Service Card 3: Horse Shows */}
            <Link href="/activities/horse-shows" className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-4 transition-all duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
              <Image src="/images/drill-team.jpeg" alt="Horse Shows" width={300} height={180} className="rounded-lg mb-4 object-cover w-full h-40" />
              <h3 className="font-papyrus text-xl font-bold text-lhra-blue mb-3">Horse Shows</h3>
              <p className="font-lexend text-black text-sm">We have an Academy focused show program available for riders of all levels.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Courage. Strength. Confidence. Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Yellow Icon */}
         
          
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex-shrink-0 flex justify-center">
              <Image src="/images/lion.png.png" alt="LionHeart Logo" width={280} height={280} />
            </div>
            <div className="w-full max-w-xl">
              <ManeUpdate />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-papyrus text-2xl font-bold text-lhra-blue mb-4">Horsin' Around: Our Newsletter</h2>
          <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
          <p className="font-lexend text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and stories from LionHeart Riding Academy
          </p>
          <Link href="/newsletter" className="inline-block bg-lhra-blue text-white font-lexend font-semibold px-6 py-3 rounded-lg shadow hover:bg-lhra-yellow hover:text-lhra-blue transition-colors text-sm">
            View Newsletter Archive
          </Link>
        </div>
      </section>

      {/* Our Lesson Program Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
       
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-papyrus text-xl font-bold text-lhra-blue mb-6">Lesson Details</h3>
              <div className="space-y-4 font-lexend text-sm">
                <p>We teach Saddleseat riding on American Saddlebred horses and Hackney ponies. Our lesson program is designed to build confidence and skill in riders of all ages and experience levels.</p>
                <Link href="/lessons/classes" className="inline-block bg-lhra-blue text-white font-lexend  px-8 py-4 rounded-lg shadow hover:bg-lhra-yellow hover:text-lhra-blue transition-colors">
                  Learn More
            </Link>
               </div>
            </div>
            <div className="flex flex-col space-y-1">
  <Image
    src="/images/horse-lesson.jpeg"
    alt="Riding Lesson"
    width={500}
    height={300}
    className="w-full object-cover rounded-lg"
  />

 
</div>


          </div>
        </div>
      </section>
    </div>
  )
}
