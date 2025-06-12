import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Calendar, Star } from "lucide-react"

export default function CampsPage() {
  const camps = [
    {
      title: "Summer Day Camps",
      duration: "5 days (Monday-Friday)",
      ages: "Ages 6-16",
      time: "9:00 AM - 3:00 PM",
      icon: <Sun className="h-6 w-6" />,
      description: "Full-day camps combining riding lessons, horse care, and fun activities",
      activities: [
        "Daily riding lessons",
        "Horse care and grooming",
        "Barn games and activities",
        "Arts and crafts",
        "Educational presentations",
        "Swimming (weather permitting)",
      ],
    },
    {
      title: "Half-Day Camps",
      duration: "5 days (Monday-Friday)",
      ages: "Ages 4-12",
      time: "9:00 AM - 12:00 PM",
      icon: <Calendar className="h-6 w-6" />,
      description: "Perfect introduction to horses for younger children",
      activities: [
        "Beginner riding lessons",
        "Meet and greet with horses",
        "Basic horse care",
        "Pony games",
        "Story time with horses",
        "Take-home crafts",
      ],
    },
    {
      title: "Advanced Rider Camps",
      duration: "5 days (Monday-Friday)",
      ages: "Ages 10-18",
      time: "9:00 AM - 4:00 PM",
      icon: <Star className="h-6 w-6" />,
      description: "Intensive training for experienced riders",
      activities: [
        "Advanced riding techniques",
        "Jumping instruction",
        "Dressage basics",
        "Competition preparation",
        "Horse training principles",
        "Stable management",
      ],
    },
  ]

  const weeklyThemes = [
    {
      week: "Week 1: Wild West Adventure",
      dates: "June 5-9",
      description: "Explore the world of cowboys and cowgirls with western riding and ranch activities",
    },
    {
      week: "Week 2: Medieval Knights",
      dates: "June 12-16",
      description: "Journey back to medieval times with games, crafts, and knightly riding skills",
    },
    {
      week: "Week 3: Horse Heroes",
      dates: "June 19-23",
      description: "Learn about famous horses in history and develop your own heroic riding skills",
    },
    {
      week: "Week 4: Around the World",
      dates: "June 26-30",
      description: "Discover different riding styles and horse cultures from around the globe",
    },
    {
      week: "Week 5: Future Equestrians",
      dates: "July 3-7",
      description: "Focus on advanced skills and preparing for the next level of riding",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sun className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">Summer Camps</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Create unforgettable summer memories at LHRA camps! Our programs combine riding instruction, horse care
            education, and fun activities in a safe, supervised environment.
          </p>
        </div>
      </section>

      {/* Camp Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Camp Programs</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our variety of camp programs designed for different ages and experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {camps.map((camp, index) => (
              <Card key={index} className="elegant-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-lhra-blue/10 p-2 rounded-full text-lhra-blue">{camp.icon}</div>
                    <div>
                      <CardTitle className="font-lexend text-xl text-lhra-blue">{camp.title}</CardTitle>
                      <p className="font-lexend text-sm text-lhra-red">{camp.ages}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-lexend text-gray-700 font-semibold">{camp.duration}</p>
                    <p className="font-lexend text-gray-600">{camp.time}</p>
                  </div>
                  <p className="font-lexend text-gray-700 mb-4">{camp.description}</p>
                  <div className="h-0.5 w-12 bg-lhra-yellow mb-4"></div>
                  <h4 className="font-lexend font-semibold text-lhra-blue mb-2">Activities Include:</h4>
                  <ul className="space-y-1">
                    {camp.activities.map((activity, idx) => (
                      <li key={idx} className="font-lexend text-gray-600 text-sm flex items-start">
                        <span className="text-lhra-yellow mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Themes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">2024 Summer Schedule</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-xl text-gray-700 max-w-3xl mx-auto">
              Each week features a unique theme with special activities and adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyThemes.map((theme, index) => (
              <Card key={index} className="elegant-card">
                <CardHeader>
                  <CardTitle className="font-lexend text-lg text-lhra-blue">{theme.week}</CardTitle>
                  <p className="font-lexend text-sm text-lhra-red">{theme.dates}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-lexend text-gray-700">{theme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-8">What Makes Our Camps Special</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Small Group Sizes</h4>
                    <p className="font-lexend text-gray-700">
                      Maximum 8 campers per group ensures personalized attention and safety.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Certified Instructors</h4>
                    <p className="font-lexend text-gray-700">
                      All camp staff are certified riding instructors with youth education experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Gentle School Horses</h4>
                    <p className="font-lexend text-gray-700">
                      Our horses are specially selected for their calm temperament and love of children.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Indoor/Outdoor Activities</h4>
                    <p className="font-lexend text-gray-700">
                      Weather-proof programming with both arena and outdoor activities available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/drill-team.jpeg"
                alt="Happy campers at LHRA"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Registration Information</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="font-lexend text-xl text-lhra-blue">Pricing & Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Full Day Camp</h4>
                    <p className="font-lexend text-gray-600">$350 per week</p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Half Day Camp</h4>
                    <p className="font-lexend text-gray-600">$225 per week</p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Advanced Rider Camp</h4>
                    <p className="font-lexend text-gray-600">$425 per week</p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Multi-Week Discount</h4>
                    <p className="font-lexend text-gray-600">10% off for 3+ weeks</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="font-lexend text-xl text-lhra-red">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Riding helmet (required)
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Long pants and boots with heel
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Lunch and water bottle
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Sunscreen and hat
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Change of clothes
                  </li>
                  <li className="font-lexend text-gray-700 flex items-start">
                    <span className="text-lhra-yellow mr-2">•</span>
                    Swimsuit (for water activities)
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
          <h2 className="elegant-heading text-3xl font-bold mb-6">Register for Summer Camp</h2>
          <p className="font-lexend text-xl mb-8 max-w-2xl mx-auto">
            Spaces fill up quickly! Contact us today to secure your child's spot in our popular summer camp program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="/about/contact">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
            >
              <Link href="/calendar">View Camp Dates</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
