import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="Lionheart Riding Academy Logo"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
          </div>
          <h1 className="elegant-heading text-5xl font-bold mb-6">About Lionheart Riding Academy</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Where tradition meets excellence in equestrian education. Discover our story, meet our team, and learn about
            our commitment to developing confident, skilled riders.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="elegant-heading text-4xl font-bold text-lhra-blue mb-6">About LionHeart</h2>
              <div className="h-1 bg-lhra-yellow w-16 mb-6"></div>
              <p className="font-lexend text-gray-700 mb-6">
                LionHeart Riding Academy began in June 2007 with one instructor, one lesson horse, and two students. Today, we are proud to have a dedicated team, a growing herd of well-trained horses, and a vibrant community of riders.
              </p>
              <p className="font-lexend text-gray-700 mb-6">
                We believe that learning to ride is about more than just controlling a horse—it's about building confidence, responsibility, and life skills. Our riders learn the value of safety, hard work, sportsmanship, persistence, teamwork, and most of all, FUN!
              </p>
              <p className="font-lexend text-gray-700 mb-6">
                Conveniently located just south of Columbia, we offer a six-stall barn, an indoor riding arena, and several outdoor riding spaces. Lessons continue rain or shine, and we only cancel for extreme weather to ensure consistent progress for our students.
              </p>
              <p className="font-lexend text-gray-700 mb-8">
                At LionHeart, we teach Saddle Seat style riding and welcome riders ages 4 and up. Our programs include lessons, camps, horse shows, and youth groups, all designed to foster a love of horses and horsemanship in a safe, supportive environment.
              </p>
              <div className="bg-lhra-yellow/10 p-4 rounded-lg mb-8">
                <p className="font-lexend text-lhra-blue font-semibold">
                  For more information or to schedule a free visit and consultation, please call Kate at 573-823-2173. We look forward to welcoming you to the LionHeart family!
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-lhra-blue hover:bg-lhra-blue/90 font-lexend elegant-button">
                  <Link href="/about/staff">Meet Our Staff</Link>
                </Button>
                <Button asChild className="bg-lhra-red hover:bg-lhra-red/90 font-lexend elegant-button">
                  <Link href="/about/horses">Meet Our Horses</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/horse-lesson.jpeg"
                alt="LHRA Indoor Arena"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-4xl font-bold text-lhra-blue mb-4">What We Offer</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/images/horse-lesson.jpeg" alt="Riding Lessons" fill className="object-cover" />
              </div>
              <h3 className="font-lexend text-xl font-semibold text-lhra-blue mb-3">Riding Lessons</h3>
              <p className="font-lexend text-gray-600">
                Comprehensive instruction for all skill levels, from beginner to advanced competitive training.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/images/competition.jpeg" alt="Horse Shows" fill className="object-cover" />
              </div>
              <h3 className="font-lexend text-xl font-semibold text-lhra-red mb-3">Horse Shows</h3>
              <p className="font-lexend text-gray-600">
                Regular competitions providing opportunities for riders to showcase their skills and progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/images/drill-team.jpeg" alt="Drill Team" fill className="object-cover" />
              </div>
              <h3 className="font-lexend text-xl font-semibold text-lhra-blue mb-3">Drill Team</h3>
              <p className="font-lexend text-gray-600">
                Award-winning performance team combining precision riding with artistic choreography.
              </p>
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
