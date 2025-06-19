import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function SafetyPage() {
  const safetyRules = [
    "No screaming or yelling on the property.",
    "No chasing or otherwise bothering barn animals.",
    "Visits to the paddocks must be supervised by LionHeart staff.",
    "No running around horses or in the barn.",
    "Helmets are required for riders under the age of 18 and strongly encouraged for all ages.",
    "Always interact with horses in a calm, quiet manner so as not to spook them."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">Safety Guidelines</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Safety is our number one priority at LionHeart. These guidelines ensure a safe environment for riders, horses, and staff.
          </p>
        </div>
      </section>

      {/* Safety Rules */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-8">Essential Safety Rules</h2>
              <div className="space-y-4">
                {safetyRules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-lhra-yellow mt-0.5 flex-shrink-0" />
                    <p className="font-lexend text-gray-700">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/horse-lesson.jpeg"
                alt="Safe riding practices at LHRA"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Severe Weather Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Severe Weather</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-lg mb-6 text-gray-700">
              In severe weather, cancellations will be posted on LionHeart's Facebook & Instagram and emailed. We try to give 2 hours' notice, but Missouri weather can be unpredictable. Cancelled lessons can be made up.
            </p>
            <ul className="font-lexend text-gray-700 text-left max-w-xl mx-auto list-disc list-inside">
              <li><strong>Tornado Warning:</strong> Automatic cancellation.</li>
              <li><strong>Severe Storms:</strong> Possible cancellation due to horse behavior or safety concerns.</li>
              <li><strong>Excessive Heat:</strong> Lessons may be rescheduled; no lessons at 100°F or above.</li>
              <li><strong>Excessive Cold:</strong> No lessons if temps are 10°F or below.</li>
              <li><strong>Ice/Snow:</strong> Lessons rescheduled if travel is unsafe or roads closed.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Questions About Safety?</h2>
          <p className="font-lexend text-xl mb-8 max-w-2xl mx-auto">
            Our staff is always available to discuss safety concerns and answer any questions you may have.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button"
          >
            <Link href="/about/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Liability Release Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-6">Liability Release Form</h2>
          <p className="font-lexend text-lg mb-8 text-gray-700">All riders must complete and submit a signed liability release form before participating in any activities at LionHeart Riding Academy.</p>
          <a href="http://www.lionheartridingacademy.com/wp-content/uploads/2012/07/LHRAFFRelease.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-lhra-blue text-white font-lexend font-semibold px-8 py-4 rounded-lg shadow hover:bg-lhra-yellow hover:text-lhra-blue transition-colors">Download Liability Release Form</a>
        </div>
      </section>
    </div>
  )
}
