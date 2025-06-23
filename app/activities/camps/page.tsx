import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CampsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-papyrus text-4xl font-bold mb-4">Camps</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-2"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            We offer a variety of camps for all riding levels! Learn about horse care, show prep, and more.
          </p>
        </div>
      </section>

      {/* Day Camps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start items-center gap-12">
          <div className="flex-1">
            <h2 className="font-lexend font-bold text-2xl text-lhra-red mb-4">Day Camps</h2>
            <p className="font-lexend text-black mb-4 text-lg">
              During spring break we offer themed day camps. Each day will focus on a different aspect of horse care, riding, or the horse industry. Sometimes we visit a vet clinic, other times we learn about training horses… It's different each year, so don't miss out! Our day camps are for curious riders of all levels.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/horse-lesson.jpeg"
              alt="Day Camps"
              width={420}
              height={500}
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Show Prep Camps Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-start items-center gap-12">
          <div className="flex-1">
            <h2 className="font-lexend font-bold text-2xl text-lhra-red mb-4">Show Prep Camps</h2>
            <p className="font-lexend text-black mb-4 text-lg">
              We have multiple different show prep camps that pair with different shows throughout the year. Riders will spend the week learning how to prep for a show – clipping, packing, etc – and then help set up and work the show at the end of the week. This is an intense camp geared towards intermediate to advanced riders.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/competition.jpeg"
              alt="Show Prep Camps"
              width={420}
              height={500}
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Cub Camp Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start items-center gap-12">
          <div className="flex-1">
            <h2 className="font-lexend font-bold text-2xl text-lhra-red mb-4">Cub Camp</h2>
            <p className="font-lexend text-black mb-4 text-lg">
              This camp is for our younger or less experienced riders. They will learn lots about parts of the horse, tack, colors, markings, grooming, etc. It is very fun and highly educational!
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/drill-team.jpeg"
              alt="Cub Camp"
              width={420}
              height={500}
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-2">Interested in Camps?</h2>
          <p className="font-lexend text-lg sm:text-xl mb-8 max-w-xl mx-auto">
            Find the perfect camp for you and join today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="https://docs.google.com/document/d/1DaFIJ-Ym4LcIrr8A9rfzr0jkgAaFF5f1/edit?fbclid=PAZXh0bgNhZW0CMTEAAaeOR8lhwHqvKfCe3IqIiFUKLgVu48aVkipAmkj3iuqPpHrwLC9G0i5775GvaQ_aem_72lwpl9HL3lG7joJ-P8ozQ&tab=t.0" target="_blank" rel="noopener noreferrer">View Camp Schedule</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="/about/contact">Get More Info</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
