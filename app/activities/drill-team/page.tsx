import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DrillTeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-papyrus text-5xl font-bold mb-6">Drill Team</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-florentia text-xl max-w-3xl mx-auto">
            Ever wanted to know what a dance routine would look like on horses? That's drill team!
          </p>
        </div>
      </section>

      {/* About the Drill Team */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-florentia font-bold text-2xl text-lhra-red mb-2">About Our Drill Team</h2>
            <p className="font-florentia text-black mb-4">
              The Drill Team program at LionHeart has evolved from one team of four riders to three different teams with 4-6 riders. A rider interested in Drill Team could join any of the three teams, which all suitably have lion puns in their names: Dandylions, Queens of the Jungle, and The Crimson Pride.
            </p>
            <p className="font-florentia text-black mb-4">
              Our Drill Teams perform, on horseback, a choreographed routine set to music. We usually have multiple performances a year, but the biggest event for Drill Team is the Holiday Extravaganza Performance at the end of the year. This features set design, costumes, and lighting. It is a really fun production.
            </p>
            <p className="font-florentia text-black mb-4">
              Occasionally, we take our Drill Team skills to horse shows and compete against other teams. Sometimes it is an entire performance, other times we participate in the "One Pass Class," where teams get one straightaway to perform a quick routine. The latter can be really fun since our team has to get super creative to create a cool routine that only lasts one pass.
            </p>
            <p className="font-florentia text-black mb-4">
              Drill Team offers a unique opportunity for growth, both as a rider and an individual.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/drill-team.jpeg" alt="Drill Team" width={400} height={300} className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Interested in Drill Team?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="/about/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="https://docs.google.com/document/d/1DaFIJ-Ym4LcIrr8A9rfzr0jkgAaFF5f1/edit?fbclid=PAZXh0bgNhZW0CMTEAAaeOR8lhwHqvKfCe3IqIiFUKLgVu48aVkipAmkj3iuqPpHrwLC9G0i5775GvaQ_aem_72lwpl9HL3lG7joJ-P8ozQ&tab=t.0" target="_blank" rel="noopener noreferrer">View Performances</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
