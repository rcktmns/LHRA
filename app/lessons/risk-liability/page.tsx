import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, FileText, Shield, ShieldCheck } from "lucide-react"

export default function RiskLiabilityPage() {
  return (
    <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <ShieldCheck className="h-16 w-16 mx-auto mb-6 text-lhra-blue" />
      <h2 className="elegant-heading text-4xl font-bold mb-4">Safety First</h2>
      <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
      <p className="font-lexend text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        At LionHeart Riding Academy, safety is our top priority—closely followed by fun! Before your first lesson,
        please complete our required liability waiver and review our basic safety expectations below.
      </p>

      <div className="flex justify-center items-center space-x-3 mb-8">
        <FileText className="h-5 w-5 text-lhra-red" />
        <Link
          href="http://www.lionheartridingacademy.com/wp-content/uploads/2012/07/LHRAFFRelease.pdf"
          target="_blank"
          className="font-lexend text-lhra-red underline hover:text-lhra-yellow"
        >
          Download the Liability Release Form
        </Link>
      </div>

      <ul className="text-left font-lexend text-gray-700 space-y-4 max-w-3xl mx-auto">
        <li className="flex items-start">
          <span className="text-lhra-yellow mr-2">•</span>
          Always walk—no running—when around horses or in the barn.
        </li>
        <li className="flex items-start">
          <span className="text-lhra-yellow mr-2">•</span>
          Helmets are required for all riders under 18 and strongly encouraged for all ages.
        </li>
        <li className="flex items-start">
          <span className="text-lhra-yellow mr-2">•</span>
          Closed-toe shoes with a small heel must be worn when riding.
        </li>
        <li className="flex items-start">
          <span className="text-lhra-yellow mr-2">•</span>
          Always approach horses calmly and speak to them when walking up.
        </li>
        <li className="flex items-start">
          <span className="text-lhra-yellow mr-2">•</span>
          Only mount or dismount when instructed by your teacher.
        </li>
        <li className="flex items-start">
          <span className="text-lhra-yellow mr-2">•</span>
          Respect staff directions at all times—for your safety and the horse's well-being.
        </li>
      </ul>
    </div>
  </section>
    )
}
