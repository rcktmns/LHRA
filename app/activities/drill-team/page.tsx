import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Music, Star, Calendar } from "lucide-react"

export default function DrillTeamPage() {
  const requirements = [
    "Minimum 2 years riding experience",
    "Ability to walk, trot, and canter independently",
    "Good balance and seat",
    "Commitment to regular practice schedule",
    "Team-oriented attitude",
    "Ages 8 and up",
  ]

  const benefits = [
    {
      title: "Advanced Riding Skills",
      description: "Develop precision, timing, and advanced horsemanship through choreographed routines",
      icon: <Star className="h-6 w-6" />,
    },
    {
      title: "Teamwork & Leadership",
      description: "Learn to work as part of a team while developing individual leadership qualities",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Performance Experience",
      description: "Gain confidence performing in front of audiences at shows and community events",
      icon: <Music className="h-6 w-6" />,
    },
    {
      title: "Lifelong Friendships",
      description: "Build lasting bonds with fellow team members who share your passion for horses",
      icon: <Users className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">LHRA Drill Team</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Join our award-winning drill team and experience the artistry of precision riding. Our team combines
            horsemanship, choreography, and teamwork to create stunning performances.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/drill-team.jpeg" alt="LHRA Drill Team Performance" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h2 className="text-white font-lexend text-3xl font-bold mb-2">Precision & Artistry</h2>
              <p className="text-white/90 font-lexend text-lg">
                Our drill team showcases the beauty of synchronized riding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-8">About Our Drill Team</h2>
              <p className="font-lexend text-gray-700 mb-6">
                The LHRA Drill Team is a competitive performance group that combines the precision of military drill
                with the artistry of dance and the skill of horsemanship. Our team performs choreographed routines set
                to music, showcasing the harmony between horse and rider.
              </p>
              <p className="font-lexend text-gray-700 mb-6">
                Founded in 2015, our drill team has won numerous awards at regional competitions and has become a
                beloved feature at local parades and community events. The team practices year-round and performs
                throughout the region.
              </p>
              <p className="font-lexend text-gray-700 mb-8">
                Under the direction of Emily Chen, our team focuses on developing both individual riding skills and
                group coordination. Members learn valuable lessons in teamwork, dedication, and performance while having
                fun with their equine partners.
              </p>
              <Button asChild className="bg-lhra-red hover:bg-lhra-red/90 font-lexend elegant-button">
                <Link href="#tryouts">Learn About Tryouts</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/drill-team.jpeg"
                alt="Drill team in formation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Benefits of Drill Team</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-xl text-gray-700 max-w-3xl mx-auto">
              Drill team membership offers unique opportunities for growth, both as a rider and as an individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="elegant-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-lhra-blue/10 p-2 rounded-full text-lhra-blue">{benefit.icon}</div>
                    <CardTitle className="font-lexend text-xl text-lhra-blue">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-lexend text-gray-700">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Tryouts */}
      <section id="tryouts" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="font-lexend text-2xl text-lhra-blue">Team Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lexend text-gray-700 mb-6">
                  To ensure the safety and success of our drill team, we have specific requirements for membership:
                </p>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="font-lexend text-gray-700 flex items-start">
                      <span className="text-lhra-yellow mr-2">•</span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="font-lexend text-2xl text-lhra-red">Tryout Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lexend text-gray-700 mb-6">
                  Tryouts are held annually in the spring. The process includes:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">1. Application</h4>
                    <p className="font-lexend text-gray-600 text-sm">Submit completed application and riding history</p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">2. Riding Evaluation</h4>
                    <p className="font-lexend text-gray-600 text-sm">
                      Demonstrate riding skills at walk, trot, and canter
                    </p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">3. Interview</h4>
                    <p className="font-lexend text-gray-600 text-sm">
                      Discussion about commitment and team expectations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">4. Notification</h4>
                    <p className="font-lexend text-gray-600 text-sm">Results announced within one week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practice Schedule */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Practice & Performance Schedule</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="elegant-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-lhra-blue" />
                  <CardTitle className="font-lexend text-xl text-lhra-blue">Regular Practices</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Weekday Practice</h4>
                    <p className="font-lexend text-gray-600">Thursdays 6:00-8:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Weekend Practice</h4>
                    <p className="font-lexend text-gray-600">Saturdays 10:00 AM-12:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Competition Season</h4>
                    <p className="font-lexend text-gray-600">Additional practices as needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-lhra-red" />
                  <CardTitle className="font-lexend text-xl text-lhra-red">Performance Opportunities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Regional drill team competitions
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Local parades and festivals
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    LHRA horse shows and events
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Community demonstrations
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Annual showcase performance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Join the LHRA Drill Team</h2>
          <p className="font-lexend text-xl mb-8 max-w-2xl mx-auto">
            Ready to take your riding to the next level? Contact us to learn more about drill team opportunities and
            upcoming tryouts.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
          >
            <Link href="/about/contact">Contact Us About Drill Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
