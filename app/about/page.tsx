import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-6 text-center">
         
          <h1 className="elegant-heading text-4xl font-bold mb-4">About Lionheart Riding Academy</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-lexend text-gray-700 mb-8 text-lg">
                LionHeart Riding Academy began in June, 2007 with one instructor, one lesson horse, and two students. Today, we are proud to have a dedicated team and a growing herd of horses. We believe that learning to ride isn't just about learning how to be able to control a horse, but will teach a rider many valuable lessons that can be utilized in all areas of life. Our riders learn to value safety, hard work, sportsmanship, persistence, teamwork - and most of all, FUN!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-lhra-blue hover:bg-lhra-blue/90 font-lexend text-base px-3 py-1 elegant-button">
                  <Link href="/about/staff">Meet Our Staff</Link>
                </Button>
                <Button asChild className="bg-lhra-red hover:bg-lhra-red/90 font-lexend text-base px-3 py-1 elegant-button">
                  <Link href="/about/horses">Meet Our Horses</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Website Pics/Website Pics/About Us Page/About Us.jpeg"
                alt="LHRA Indoor Arena"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-4xl font-bold mb-6">Visit Lionheart Riding Academy</h2>
          <p className="font-lexend text-xl mb-10 max-w-2xl mx-auto">
            We invite you to visit our facility, meet our horses, and discover why LHRA is the perfect place to begin or
            continue your equestrian journey.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-10 py-6 text-lg elegant-button"
          >
            <Link href="/about/contact">Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
