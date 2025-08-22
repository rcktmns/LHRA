import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, DollarSign, Shield, Shirt, Calendar, Star, Target } from "lucide-react";

export default function LessonsPage() {
  const lessonCards = [
    {
      icon: <Target className="h-8 w-8 text-lhra-yellow" />,
      title: "Age Range",
      content: "We teach riders ages 4 and up - it is never too late to begin your equestrian journey. Young riders may start in a double saddle, which allows the instructor to sit behind the child on the horse and allow them to learn through feeling.",
      highlight: "Ages 4+"
    },
    {
      icon: <Clock className="h-8 w-8 text-lhra-yellow" />,
      title: "Duration & Frequency",
      content: "Our lessons are 30 minutes long. It is required that riders ride at least once a week in order to build muscle memory. We also encourage riders to come early and stay later after their lesson so they learn how to tack up and groom their horse. Working with a horse on the ground helps create a bond that makes riding so special.",
      highlight: "30 min lessons"
    },
    {
      icon: <Users className="h-8 w-8 text-lhra-yellow" />,
      title: "Private vs Group",
      content: "Private and group lessons are the same price and duration. Our instructors reserve the right to decide if/when to add another student to a lesson, so that all students are assured a learning experience.",
      highlight: "Same price & duration"
    }
  ];

  const pricingCards = [
    {
      type: "Individual Lessons",
      price: "$50",
      description: "per lesson",
      popular: false
    },
    {
      type: "Package Lessons",
      price: "$40",
      description: "per lesson",
      popular: true
    }
  ];

  const infoCards = [
    {
      icon: <Shield className="h-6 w-6 text-lhra-red" />,
      title: "Safety Guidelines",
      description: "Safety is our top priority at LionHeart, followed closely by fun!",
      link: "/lessons/safety",
      linkText: "View Guidelines"
    },
    {
      icon: <Shirt className="h-6 w-6 text-lhra-red" />,
      title: "Riding Attire",
      description: "Proper attire is required for long-term riding to ensure safety and comfort.",
      link: "/lessons/attire",
      linkText: "View Attire"
    },
    {
      icon: <Calendar className="h-6 w-6 text-lhra-red" />,
      title: "Cancellation Policy",
      description: "Understand our policies for lesson cancellations and makeups.",
      link: "/lessons/cancellation",
      linkText: "View Policy"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Blue Hero Section */}
      <section className="bg-lhra-blue py-24 px-7 text-center">
        <h1 className="font-papyrus text-5xl   font-bold text-white mb-4 mx-auto">Courage. Strength. Confidence.</h1>
        <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>

        <p className="font-lexend text-lg sm:text-xl text-white max-w-2xl mx-auto">
          At LionHeart, we teach Saddle Seat style riding on American Saddlebred horses and Hackney ponies. Saddle Seat is one form of English riding. American Saddlebreds are a beautiful, versatile breed of horse who tend to be smart, good-tempered, and excellent teachers.
        </p>
      </section>

      {/* Lesson Program Overview */}
<section className="bg-white py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="font-papyrus text-4xl font-bold text-lhra-blue mb-4">Our Lesson Program</h2>
      <div className="h-1 bg-yellow-500 w-1/3 mx-auto mb-2"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Lesson Cards stacked vertically */}
      <div className="space-y-8">
        {/* Age Range */}
        <Card className="hover:shadow-lg transition-all duration-300 border-lhra-yellow/20 hover:border-lhra-yellow">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Target className="h-8 w-8 text-lhra-yellow" />
            </div>
            <CardTitle className="font-papyrus text-xl text-lhra-blue">Age Range</CardTitle>
            <div className="bg-lhra-yellow/10 px-3 py-1 rounded-full inline-block">
              <span className="font-lexend font-semibold text-lhra-blue text-sm">Ages 4+</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-lexend text-gray-700 text-center text-base">
              We teach riders ages 4 and up - it is never too late to begin your equestrian journey.
              Young riders may start in a double saddle, which allows the instructor to sit behind
              the child on the horse and allow them to learn through feeling.
            </p>
          </CardContent>
        </Card>

        {/* Duration & Frequency */}
        <Card className="hover:shadow-lg transition-all duration-300 border-lhra-yellow/20 hover:border-lhra-yellow">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Clock className="h-8 w-8 text-lhra-yellow" />
            </div>
            <CardTitle className="font-papyrus text-xl text-lhra-blue">Duration & Frequency</CardTitle>
            <div className="bg-lhra-yellow/10 px-3 py-1 rounded-full inline-block">
              <span className="font-lexend font-semibold text-lhra-blue text-sm">30 min lessons</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-lexend text-gray-700 text-center text-base">
              Our lessons are 30 minutes long. It is required that riders ride at least once a week
              in order to build muscle memory. We also encourage riders to come early and stay later
              after their lesson so they learn how to tack up and groom their horse. Working with a
              horse on the ground helps create a bond that makes riding so special.
            </p>
          </CardContent>
        </Card>

        {/* Private vs Group */}
        <Card className="hover:shadow-lg transition-all duration-300 border-lhra-yellow/20 hover:border-lhra-yellow">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-lhra-yellow" />
            </div>
            <CardTitle className="font-papyrus text-xl text-lhra-blue">Private vs Group</CardTitle>
            <div className="bg-lhra-yellow/10 px-3 py-1 rounded-full inline-block">
              <span className="font-lexend font-semibold text-lhra-blue text-sm">Same price & duration</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-lexend text-gray-700 text-center text-base">
            Private and group lessons are the same price and duration. Our instructors reserve the right to decide if/when to add another student to a lesson, so that all students are assured a learning experience
            </p>
          </CardContent>
        </Card>
        
      </div>

      {/* Right-side image or gallery */}
      <div className="flex flex-col gap-6 mt-12">
        <Image
          src="/images/Website Pics/Website Pics/Riding Lessons Page/JakeAddieLesson.jpg"
          alt="Child learning to ride in double saddle"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-contain w-full"
        />
         <Image
          src="/images/Website Pics/Website Pics/Riding Lessons Page/EstelleAustinLesson.jpg"
          alt="Child learning to ride in double saddle"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-contain w-full"
        />
        
        {/* Optional: Add more images below if desired */}
        {/* <Image src="/images/another-image.jpg" ... /> */}
      </div>
    </div>
  </div>
</section>

<section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-papyrus font-bold text-lhra-blue mb-8 text-center">
        Lesson Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pricingCards.map((plan, idx) => (
          <Card
            key={idx}
            className={`relative p-6${
              plan.popular ? "border-2 border-lhra-yellow" : "border border-gray-200"
            }`}
          >
            {/* Yellow "Recommended" badge for popular package */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-lhra-yellow text-lhra-blue px-4 py-1 rounded-full text-sm font-lexend font-semibold select-none">
                  Recommended
                </span>
              </div>
            )}

            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl font-papyrus text-lhra-blue">
                {plan.type}
              </CardTitle>
              <div className="flex justify-center items-baseline gap-2 mt-2">
                <span className="text-4xl font-bold text-lhra-red">{plan.price}</span>
                <span className="text-gray-600 font-lexend">{plan.description}</span>
              </div>
            </CardHeader>

            <CardContent className="mt-6 text-center">
              <ul className="space-y-3 mb-6">
                
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
      {/* Additional Information Cards */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Important Information</h3>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-lhra-red/20 hover:border-lhra-red">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {card.icon}
                  </div>
                  <CardTitle className="font-papyrus text-xl text-lhra-blue">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-lexend text-gray-700 mb-4">{card.description}</p>
                  <Button asChild variant="outline" className="border-lhra-red text-lhra-red hover:bg-lhra-red hover:text-white">
                    <Link href={card.link}>{card.linkText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-lhra-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-papyrus text-3xl font-bold text-white mb-6">Ready to Ride?</h3>
          <p className="font-lexend text-white mb-8 text-lg">
            Contact us today to schedule your first lesson and experience the magic of riding at LionHeart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg">
              <Link href="/about/contact">Contact Us</Link>
            </Button>
            
          </div>
        </div>
      </section>
    </main>
  );
}
