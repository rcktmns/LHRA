import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-5xl font-bold mb-6">Equestrian Education</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Learn the elegant art of Saddle Seat riding on American Saddlebred horses. We offer both private and group
            lessons for riders ages 4 and up, with safety as our number one priority.
          </p>
        </div>
      </section>

      {/* Lesson Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-4xl font-bold text-lhra-blue mb-4">Our Lesson Program</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-lexend text-2xl font-bold text-lhra-blue mb-6">Lesson Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-lexend text-lg font-semibold text-lhra-red mb-2">Age Range</h4>
                  <p className="font-lexend text-gray-700">
                    We teach riders ages 4 and up - most of our students are children, but we always welcome adults! For
                    our youngest students, ages 4-5 and sometimes 6, we use a double saddle, which allows the instructor
                    to sit behind the student on the horse and help him/her learn by feel more than through words.
                  </p>
                </div>
                <div>
                  <h4 className="font-lexend text-lg font-semibold text-lhra-red mb-2">Duration and Frequency</h4>
                  <p className="font-lexend text-gray-700">
                    Lessons are 30 minutes long. All LionHeart students ride at least once a week. The more frequently a
                    rider rides, the faster s/he will progress, so for those who are serious about showing or want to
                    learn more quickly, we suggest two or more lessons per week.
                  </p>
                </div>
                <div>
                  <h4 className="font-lexend text-lg font-semibold text-lhra-red mb-2">Private vs. Group Lessons</h4>
                  <p className="font-lexend text-gray-700">
                    We offer both private and group lessons, which are all the same duration and price. This way, our
                    instructors can choose the type of lesson that is best for our riders, with cost to the rider not an
                    issue. There are benefits to both private and group lessons, and as soon as a rider is ready, we
                    move riders into a group lesson setting at least some of the time.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/horse-lesson.jpeg"
                alt="Saddle Seat lesson at LionHeart"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-lexend text-2xl font-bold text-lhra-blue mb-6 text-center">Lesson Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-lexend text-xl font-semibold text-lhra-red mb-2">Individual Lessons</h4>
                  <p className="font-lexend text-3xl font-bold text-lhra-blue mb-2">$40</p>
                  <p className="font-lexend text-gray-600">per 30-minute lesson</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-lhra-yellow">
                  <h4 className="font-lexend text-xl font-semibold text-lhra-red mb-2">Package Lessons</h4>
                  <p className="font-lexend text-3xl font-bold text-lhra-blue mb-2">$30</p>
                  <p className="font-lexend text-gray-600">per lesson (pre-paid package)</p>
                  <p className="font-lexend text-sm text-lhra-red mt-2">Most popular option!</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="font-lexend text-gray-700">
                Most of our families purchase a package at the beginning of each month. We accept cash and checks; our
                apologies, but we do not accept credit cards at this time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-4xl font-bold text-lhra-blue mb-4">Essential Information</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/lessons/safety" className="group">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-lhra-yellow overflow-hidden h-full">
                <div className="h-2 bg-lhra-blue w-full group-hover:bg-lhra-yellow transition-colors"></div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="font-lexend text-2xl text-lhra-blue group-hover:text-lhra-red transition-colors">
                    Safety Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-lexend text-gray-600">
                    Our comprehensive safety protocols ensure a secure environment for riders of all levels.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/lessons/attire" className="group">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-lhra-yellow overflow-hidden h-full">
                <div className="h-2 bg-lhra-red w-full group-hover:bg-lhra-yellow transition-colors"></div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="font-lexend text-2xl text-lhra-red group-hover:text-lhra-blue transition-colors">
                    Riding Attire
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-lexend text-gray-600">
                    Proper attire guidelines to ensure comfort, safety, and tradition in your riding experience.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/lessons/cancellation" className="group">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-lhra-yellow overflow-hidden h-full">
                <div className="h-2 bg-lhra-blue w-full group-hover:bg-lhra-yellow transition-colors"></div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="font-lexend text-2xl text-lhra-blue group-hover:text-lhra-red transition-colors">
                    Cancellation Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-lexend text-gray-600">
                    Our policies for lesson cancellations, rescheduling, and weather-related adjustments.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-4xl font-bold mb-6">Ready to Begin?</h2>
          <p className="font-lexend text-xl mb-10 max-w-2xl mx-auto">
            Contact us today to schedule your first lesson or learn more about our programs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-10 py-6 text-lg elegant-button"
          >
            <Link href="/about/contact">Schedule a Lesson</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
