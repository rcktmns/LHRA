import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function SafetyPage() {
  const safetyRules = [
    "No running in or around the barn.",
    "No screaming or yelling anywhere on the LionHeart property, including in the barn, chicken coop, hay loft, and on the playground.",
    "No chasing or otherwise bothering chickens or cats. We strive to create a peaceful home for all of our animals.",
    "Children under 13 are not to be in stalls with horses without supervision from LionHeart staff.",

"Visits to the chicken coop, the hay loft, and the donkey must be supervised by LionHeart staff.",
"LionHeart staffers are to be obeyed at all times as if it is Kate giving the instruction.",
"Keep in mind that all horses, so matter how kind, can nibble and bite. Please be careful if “playing with” a horse. No feeding fingers to the horses!"
]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">Safety Guidelines</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Safety is our top priority at LHRA. These guidelines ensure a secure and enjoyable experience for all
            riders, horses, and staff.
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

   
      {/* Safety Equipment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-heading text-3xl font-bold text-lhra-blue mb-4">Required Safety Equipment</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-lhra-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🪖</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Riding Helmet</h3>
              <p className="font-lexend text-gray-600 text-sm">ASTM/SEI approved helmet required for all riders</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-red/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👢</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-red mb-2">Proper Footwear</h3>
              <p className="font-lexend text-gray-600 text-sm">Boots with heel, no sneakers or sandals</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-yellow/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👖</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Long Pants</h3>
              <p className="font-lexend text-gray-600 text-sm">Full-length pants to protect legs</p>
            </div>
            <div className="text-center">
              <div className="bg-lhra-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧤</span>
              </div>
              <h3 className="font-lexend text-lg font-semibold text-lhra-blue mb-2">Gloves (Optional)</h3>
              <p className="font-lexend text-gray-600 text-sm">Recommended for better grip on reins</p>
            </div>
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
    </div>
  )
}
