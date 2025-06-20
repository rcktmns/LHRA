import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Music, Star, Trophy, Heart, Target, Calendar, Sparkles } from "lucide-react"

export default function DrillTeamPage() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-lhra-yellow" />,
      title: "Teamwork & Friendship",
      description: "Build lasting friendships while working together as a team. Learn to trust and support your teammates both on and off the horse.",
      highlight: "Strong bonds"
    },
    {
      icon: <Music className="h-8 w-8 text-lhra-yellow" />,
      title: "Creative Expression",
      description: "Express yourself through choreographed routines set to music. Develop your artistic side while riding.",
      highlight: "Artistic riding"
    },
    {
      icon: <Star className="h-8 w-8 text-lhra-yellow" />,
      title: "Performance Skills",
      description: "Gain confidence performing in front of audiences. Learn stage presence and presentation skills.",
      highlight: "Stage confidence"
    },
    {
      icon: <Trophy className="h-8 w-8 text-lhra-yellow" />,
      title: "Competition Experience",
      description: "Compete against other teams at horse shows. Experience the thrill of competition and sportsmanship.",
      highlight: "Show experience"
    },
    {
      icon: <Heart className="h-8 w-8 text-lhra-yellow" />,
      title: "Horse Bonding",
      description: "Develop deeper connections with your horse through synchronized movement and teamwork.",
      highlight: "Deeper connection"
    },
    {
      icon: <Target className="h-8 w-8 text-lhra-yellow" />,
      title: "Goal Setting",
      description: "Set and achieve performance goals. Learn discipline and dedication through practice and preparation.",
      highlight: "Personal growth"
    }
  ];

  const teamInfo = [
    {
      name: "Dandylions",
      description: "Our youngest team, perfect for beginners and developing riders.",
      icon: <Sparkles className="h-6 w-6 text-lhra-blue" />
    },
    {
      name: "Queens of the Jungle",
      description: "Intermediate team for riders with some drill team experience.",
      icon: <Star className="h-6 w-6 text-lhra-blue" />
    },
    {
      name: "The Crimson Pride",
      description: "Advanced team for experienced riders ready for complex routines.",
      icon: <Trophy className="h-6 w-6 text-lhra-blue" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Star Icon */}
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-lhra-yellow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 className="font-papyrus text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Drill Team</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-lg sm:text-xl max-w-3xl mx-auto">
            Ever wanted to know what a dance routine would look like on horses? That's drill team!
          </p>
        </div>
      </section>

      {/* About the Drill Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-6">About Our Drill Team</h2>
            <div className="space-y-4 font-lexend text-lg text-gray-700">
              <p>
                The Drill Team program at LionHeart has evolved from one team of four riders to three different teams with 4-6 riders. A rider interested in Drill Team could join any of the three teams, which all suitably have lion puns in their names: Dandylions, Queens of the Jungle, and The Crimson Pride.
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
            <Image src="/images/drill-team.jpeg" alt="Drill Team" width={500} height={350} className="w-full object-cover" />
            <Image src="/images/competition.jpeg" alt="Drill Team Performance" width={500} height={350} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Benefits of Drill Team</h2>
            <div className="h-2 bg-lhra-yellow w-1/3 mx-auto mb-6"></div>
            <p className="font-lexend text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the amazing benefits and skills you'll develop as part of our drill team program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-lhra-yellow/20 hover:border-lhra-yellow">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="font-papyrus text-xl text-lhra-blue">{benefit.title}</CardTitle>
                  <div className="bg-lhra-yellow/10 px-3 py-1 rounded-full inline-block">
                    <span className="font-lexend font-semibold text-lhra-blue text-sm">{benefit.highlight}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-lexend text-gray-700 text-center">{benefit.description}</p>
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
            Join one of our teams and experience the excitement of synchronized riding performances!
          </p>
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
