import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Star } from "lucide-react"

export default function HorseShowsPage() {
  const showTypes = [
    {
      title: "Schooling Shows",
      description: "Low-key competitions perfect for beginners and nervous horses",
      frequency: "Monthly",
      icon: <Users className="h-6 w-6" />,
      features: ["Relaxed atmosphere", "Educational focus", "All levels welcome", "Affordable entry fees"],
    },
    {
      title: "Recognized Shows",
      description: "Official competitions sanctioned by equestrian organizations",
      frequency: "Quarterly",
      icon: <Trophy className="h-6 w-6" />,
      features: [
        "Official judging",
        "Points toward year-end awards",
        "Higher competition level",
        "Professional atmosphere",
      ],
    },
    {
      title: "Fun Shows",
      description: "Themed competitions with creative classes and prizes",
      frequency: "Seasonal",
      icon: <Star className="h-6 w-6" />,
      features: ["Costume classes", "Games on horseback", "Family-friendly", "Unique awards"],
    },
  ]

  const divisions = [
    "Lead Line (ages 3-6)",
    "Walk-Trot (beginner riders)",
    "Walk-Trot-Canter (intermediate)",
    "Hunter Under Saddle",
    "Equitation",
    "Jumping (various heights)",
    "Adult Amateur",
    "Open Division",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">Horse Shows</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Experience the thrill of competition at LHRA horse shows. From first-time competitors to seasoned riders,
            our shows provide opportunities for everyone to showcase their skills.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/competition.jpeg" alt="LHRA Horse Show Competition" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h2 className="text-white font-lexend text-3xl font-bold mb-2">Competitive Excellence</h2>
              <p className="text-white/90 font-lexend text-lg">Our riders compete with confidence and sportsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Show Types */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Types of Shows</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-xl text-gray-700 max-w-3xl mx-auto">
              We host various types of shows throughout the year to accommodate riders of all experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showTypes.map((show, index) => (
              <Card key={index} className="elegant-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-lhra-blue/10 p-2 rounded-full text-lhra-blue">{show.icon}</div>
                    <div>
                      <CardTitle className="font-lexend text-xl text-lhra-blue">{show.title}</CardTitle>
                      <p className="font-lexend text-sm text-lhra-red">{show.frequency}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-lexend text-gray-700 mb-4">{show.description}</p>
                  <div className="h-0.5 w-12 bg-lhra-yellow mb-4"></div>
                  <ul className="space-y-2">
                    {show.features.map((feature, idx) => (
                      <li key={idx} className="font-lexend text-gray-600 text-sm flex items-start">
                        <span className="text-lhra-yellow mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-8">Competition Divisions</h2>
              <p className="font-lexend text-gray-700 mb-8">
                Our shows feature divisions for every skill level, ensuring fair competition and opportunities for
                growth. Riders compete against others with similar experience and abilities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {divisions.map((division, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="font-lexend text-lhra-blue font-medium">{division}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/competition.jpeg"
                alt="Horse show divisions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Show Preparation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Show Preparation</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-xl text-gray-700 max-w-3xl mx-auto">
              We help our riders prepare for competition success through specialized training and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-lhra-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Training Sessions</h3>
              <p className="font-lexend text-gray-600 text-sm">
                Specialized lessons focused on show ring skills and presentation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👔</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-red mb-2">Attire Guidance</h3>
              <p className="font-lexend text-gray-600 text-sm">Help selecting appropriate show attire and equipment</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐴</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Horse Preparation</h3>
              <p className="font-lexend text-gray-600 text-sm">Professional grooming and turnout for competition day</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Mental Preparation</h3>
              <p className="font-lexend text-gray-600 text-sm">Building confidence and managing competition nerves</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Ready to Compete?</h2>
          <p className="font-lexend text-xl mb-8 max-w-2xl mx-auto">
            Join us at our next horse show and experience the excitement of competition in a supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="/calendar">View Show Schedule</Link>
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
