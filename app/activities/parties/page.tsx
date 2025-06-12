import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Cake, Star } from "lucide-react"

export default function PartiesPage() {
  const packages = [
    {
      title: "Basic Party Package",
      duration: "2 hours",
      guests: "Up to 8 children",
      price: "$350",
      icon: <Gift className="h-6 w-6" />,
      includes: [
        "Pony rides for all guests",
        "Meet and greet with horses",
        "Basic grooming demonstration",
        "Party area for cake and gifts",
        "Party host/instructor",
        "Safety equipment provided",
      ],
    },
    {
      title: "Deluxe Party Package",
      duration: "3 hours",
      guests: "Up to 12 children",
      price: "$525",
      icon: <Star className="h-6 w-6" />,
      includes: [
        "Everything in Basic Package",
        "Mini riding lessons",
        "Horse care activities",
        "Barn scavenger hunt",
        "Take-home horse crafts",
        "Extended party time",
        "Photo opportunities",
      ],
    },
    {
      title: "Premium Party Package",
      duration: "4 hours",
      guests: "Up to 16 children",
      price: "$750",
      icon: <Cake className="h-6 w-6" />,
      includes: [
        "Everything in Deluxe Package",
        "Themed decorations",
        "Professional photos",
        "Horse-themed games",
        "Special birthday horse visit",
        "Goodie bags for all guests",
        "Catered lunch option available",
      ],
    },
  ]

  const addOns = [
    { item: "Additional guests (per child)", price: "$25" },
    { item: "Professional photographer", price: "$150" },
    { item: "Themed decorations", price: "$75" },
    { item: "Goodie bags (per child)", price: "$15" },
    { item: "Catered lunch", price: "$12 per child" },
    { item: "Extended time (per hour)", price: "$100" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cake className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">Birthday Parties</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Create magical memories with a horse-themed birthday party at LHRA! Our party packages combine fun
            activities with safe horse interactions for an unforgettable celebration.
          </p>
        </div>
      </section>

      {/* Party Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Party Packages</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect package for your special celebration. All packages include safety equipment and
              professional supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="elegant-card relative">
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lhra-red text-white px-4 py-1 rounded-full text-sm font-lexend">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-lhra-blue/10 p-2 rounded-full text-lhra-blue">{pkg.icon}</div>
                    <div>
                      <CardTitle className="font-lexend text-xl text-lhra-blue">{pkg.title}</CardTitle>
                      <p className="font-lexend text-2xl font-bold text-lhra-red">{pkg.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-lexend text-gray-700 font-semibold">{pkg.duration}</p>
                    <p className="font-lexend text-gray-600">{pkg.guests}</p>
                  </div>
                  <div className="h-0.5 w-12 bg-lhra-yellow mb-4"></div>
                  <h4 className="font-lexend font-semibold text-lhra-blue mb-3">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="font-lexend text-gray-600 text-sm flex items-start">
                        <span className="text-lhra-yellow mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Party Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-8">
                Why Choose LHRA for Your Party?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Safe & Supervised</h4>
                    <p className="font-lexend text-gray-700">
                      Professional staff ensure all activities are safe and age-appropriate for your guests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Gentle Horses</h4>
                    <p className="font-lexend text-gray-700">
                      Our specially selected party horses love children and are perfect for first-time interactions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Weather-Proof Fun</h4>
                    <p className="font-lexend text-gray-700">
                      Indoor arena ensures your party can continue regardless of weather conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lhra-yellow w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Stress-Free Planning</h4>
                    <p className="font-lexend text-gray-700">
                      We handle all the details so you can relax and enjoy your child's special day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/drill-team.jpeg"
                alt="Happy birthday party at LHRA"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons & Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Customize Your Party</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="font-lexend text-xl text-lhra-blue">Available Add-Ons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {addOns.map((addon, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-lexend text-gray-700">{addon.item}</span>
                      <span className="font-lexend font-semibold text-lhra-red">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="font-lexend text-xl text-lhra-red">Booking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Advance Booking</h4>
                    <p className="font-lexend text-gray-600 text-sm">
                      Parties must be booked at least 2 weeks in advance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Deposit Required</h4>
                    <p className="font-lexend text-gray-600 text-sm">
                      50% deposit due at booking, balance due day of party
                    </p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Age Requirements</h4>
                    <p className="font-lexend text-gray-600 text-sm">Parties available for ages 3-16</p>
                  </div>
                  <div>
                    <h4 className="font-lexend font-semibold text-lhra-blue">Cancellation Policy</h4>
                    <p className="font-lexend text-gray-600 text-sm">48-hour notice required for full refund</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Party Activities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Party Activities</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-lhra-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐴</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Pony Rides</h3>
              <p className="font-lexend text-gray-600 text-sm">Safe, supervised rides on our gentle party ponies</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧽</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-red mb-2">Horse Grooming</h3>
              <p className="font-lexend text-gray-600 text-sm">Learn to brush and care for our friendly horses</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Horse Crafts</h3>
              <p className="font-lexend text-gray-600 text-sm">Create horse-themed crafts to take home</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Barn Games</h3>
              <p className="font-lexend text-gray-600 text-sm">Fun horse-themed games and activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Book Your Party Today</h2>
          <p className="font-lexend text-xl mb-8 max-w-2xl mx-auto">
            Give your child an unforgettable birthday celebration surrounded by horses and friends. Contact us to check
            availability and book your party.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
          >
            <Link href="/about/contact">Book Your Party</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
