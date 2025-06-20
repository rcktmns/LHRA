import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, DollarSign, Shield, Shirt, Calendar, Star, Target } from "lucide-react";

export default function LessonsPage() {
  const lessonCards = [
    {
      icon: <Clock className="h-8 w-8 text-lhra-yellow" />,
      title: "Duration & Frequency",
      content: "Our lessons are 30 minutes long. Riders must ride at least once a week to build muscle memory. We encourage arriving early and staying late to learn tacking and grooming.",
      highlight: "30 min lessons"
    },
    {
      icon: <Users className="h-8 w-8 text-lhra-yellow" />,
      title: "Private vs Group",
      content: "Private and group lessons are the same price and duration. Instructors decide when to add students to ensure optimal learning experiences.",
      highlight: "Same price"
    },
    {
      icon: <Target className="h-8 w-8 text-lhra-yellow" />,
      title: "Age Range",
      content: "We teach riders ages 4 and up - it's never too late to begin your equestrian journey. Young riders may start in a double saddle for safety.",
      highlight: "Ages 4+"
    }
  ];

  const pricingCards = [
    {
      type: "Individual",
      price: "$50",
      description: "Pay per lesson",
      features: ["Flexible scheduling", "No commitment", "Perfect for beginners"],
      popular: false
    },
    {
      type: "Package",
      price: "$40",
      description: "per lesson",
      features: ["Paid monthly", "Better value", "Makeups within month"],
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
      <section className="bg-lhra-blue py-16 px-4 text-center">
        <h1 className="font-papyrus text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Courage. Strength. Confidence.</h1>
        <p className="font-lexend text-lg sm:text-xl text-white max-w-2xl mx-auto">
          At LionHeart, we teach Saddle Seat style riding on American Saddlebred horses and Hackney ponies. Saddle Seat is one form of English riding. American Saddlebreds are a beautiful, versatile breed of horse who tend to be smart, good-tempered, and excellent teachers.
        </p>
      </section>

      {/* Lesson Program Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-4xl font-bold text-lhra-blue mb-4">Our Lesson Program</h2>
            <div className="h-2 bg-lhra-yellow w-1/3 mx-auto mb-6"></div>
            <p className="font-lexend text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the perfect riding experience tailored to your needs and goals
            </p>
          </div>

          {/* Lesson Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {lessonCards.map((card, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-lhra-yellow/20 hover:border-lhra-yellow">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {card.icon}
                  </div>
                  <CardTitle className="font-papyrus text-xl text-lhra-blue">{card.title}</CardTitle>
                  <div className="bg-lhra-yellow/10 px-3 py-1 rounded-full inline-block">
                    <span className="font-lexend font-semibold text-lhra-blue text-sm">{card.highlight}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-lexend text-gray-700 text-center">{card.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Lesson Pricing</h3>
              <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingCards.map((plan, index) => (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-lhra-yellow border-2' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-lhra-yellow text-lhra-blue px-4 py-1 rounded-full text-sm font-lexend font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="font-papyrus text-2xl text-lhra-blue">{plan.type}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-papyrus text-4xl font-bold text-lhra-red">{plan.price}</span>
                      <span className="font-lexend text-gray-600">{plan.description}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="font-lexend text-gray-700 flex items-center justify-center gap-2">
                          <Star className="h-4 w-4 text-lhra-yellow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90' : 'bg-lhra-blue text-white hover:bg-lhra-blue/90'}`}
                    >
                      Choose {plan.type}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="font-lexend text-gray-600">
                <strong>Note:</strong> Packages are paid monthly on the 1st. Makeups must be completed within the same month.
              </p>
            </div>
          </div>

          {/* Image and Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/images/horse-lesson.jpeg" alt="Riding Lesson" width={600} height={400} className="rounded-lg shadow-lg object-cover w-full" />
            </div>
            <div className="space-y-6">
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue">Why Choose LionHeart?</h3>
              <div className="space-y-4 font-lexend text-gray-700">
                <p>Our experienced instructors create a safe, supportive environment where riders of all levels can develop their skills and build confidence.</p>
                <p>We emphasize not just riding technique, but also horse care, grooming, and the special bond that develops between rider and horse.</p>
                <p>With our flexible scheduling and comprehensive lesson packages, we make it easy to start your equestrian journey.</p>
              </div>
            </div>
          </div>
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
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-lexend font-semibold px-8 py-6 text-lg">
              <Link href="/lessons/safety">Safety Guidelines</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
