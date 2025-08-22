import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Music, Star, Trophy, Heart, Target, Calendar, Sparkles } from "lucide-react"

export default function DrillTeamPage() {
  const benefits = [
    {
      icon: <Music className="h-8 w-8 text-lhra-yellow" />,
      title: "Advanced Riding Skills",
      description:
        "Refine your riding through choreographed patterns, timing, and precision while mastering new techniques with your horse.",
      highlight: "Rider development",
    },
    {
      icon: <Star className="h-8 w-8 text-lhra-yellow" />,
      title: "Performance Experience",
      description:
        "Shine on stage during our themed shows and special events. Learn to ride with presence and confidence in front of a crowd.",
      highlight: "Stage confidence",
    },
    {
      icon: <Users className="h-8 w-8 text-lhra-yellow" />,
      title: "Teamwork & Leadership",
      description:
        "Collaborate with teammates, build trust, and take on leadership roles as you work together toward a common goal.",
      highlight: "Team spirit",
    },
    {
      icon: <Heart className="h-8 w-8 text-lhra-yellow" />,
      title: "Lifelong Friendships",
      description:
        "Form deep, lasting friendships with peers who share your passion for horses, performance, and fun.",
      highlight: "Bonded by riding",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="font-papyrus text-4xl font-bold mb-4">Drill Team</h1>
          <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
          <p className="font-lexend text-lg sm:text-xl max-w-3xl mx-auto">
            Drill Team offers unique opportunities for growth, both as a rider and as an individual.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-6">About Our Drill Team</h2>
            <div className="space-y-4 font-lexend text-lg text-gray-700">
              <p>
                The Drill Team program at LionHeart has evolved from one team of four riders to three different teams with 4–6 riders. A rider interested in Drill Team could join any of the three teams, which all suitably have lion puns in their names: Dandylions, Queens of the Jungle, and The Crimson Pride.
              </p>
              <p>
                Our Drill Teams perform, on horseback, a choreographed routine set to music. We usually have multiple performances a year, but the biggest event for Drill Team is the Holiday Extravaganza Performance at the end of the year. This features set design, costumes, and lighting. It is a really fun production.
              </p>
              <p>
                Occasionally, we take our Drill Team skills to horse shows and compete against other teams. Sometimes it is an entire performance, other times we participate in the "One Pass Class," where teams get one straightaway to perform a quick routine. The latter can be really fun since our team has to get super creative to create a cool routine that only lasts one pass.
              </p>
              <p>
                Drill Team offers a unique opportunity for growth, both as a rider and an individual.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-4">
            <div className="relative h-80 overflow-hidden group rounded-lg">
              <Image src="/images/drill-team.jpeg" alt="Drill Team" width={500} height={350} className="w-full h-full object-cover" />
            </div>
            <div className="relative h-80 overflow-hidden group rounded-lg">
              <Image src="/images/Website Pics/Website Pics/Drill Team Page/PiratesDrillTeam.jpg" alt="Drill Team Performance" width={500} height={350} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Benefits of Drill Team</h2>
            <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
            <p className="font-lexend text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the amazing benefits and skills you'll develop as part of our drill team program
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-lhra-yellow/20 hover:border-lhra-yellow">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="font-papyrus text-xl text-lhra-blue">{benefit.title}</CardTitle>
                  <div className="bg-lhra-yellow/10 px-3 py-1 rounded-full inline-block mt-2">
                    <span className="font-lexend font-semibold text-lhra-blue text-sm">{benefit.highlight}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-lexend text-gray-700 text-center text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Interested in Drill Team?</h2>
          <p className="font-lexend text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Come watch a performance or inquire about joining one of our teams!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="https://docs.google.com/document/d/1DaFIJ-Ym4LcIrr8A9rfzr0jkgAaFF5f1/edit?fbclid=PAZXh0bgNhZW0CMTEAAaeOR8lhwHqvKfCe3IqIiFUKLgVu48aVkipAmkj3iuqPpHrwLC9G0i5775GvaQ_aem_72lwpl9HL3lG7joJ-P8ozQ&tab=t.0" target="_blank" rel="noopener noreferrer">View Performances</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="/about/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
