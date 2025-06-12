import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Phone, AlertCircle, Info } from "lucide-react"

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 text-lhra-yellow" />
          <h1 className="elegant-heading text-5xl font-bold mb-6">Cancellation Policy</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            We understand that schedules change. Our cancellation policy is designed to be fair to both students and
            instructors while maintaining the quality of our program.
          </p>
        </div>
      </section>

      {/* Main Policy Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Official Policy Overview */}
            <Card className="elegant-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-lhra-blue/10 p-2 rounded-full text-lhra-blue">
                    <Info className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-lexend text-xl text-lhra-blue">Official Policy Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-lexend text-gray-700 mb-4">
                  Cancellations require 24-hour notice to be eligible for a make-up lesson. Less than 24 hours notice may forfeit your lesson.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 font-lexend">
                  <li><span className="text-lhra-yellow mr-2">•</span>All cancellations must be recorded in the <a href="http://www.lionheartridingacademy.com/calendars" className="text-lhra-blue underline">Schedule Changes Google Doc</a></li>
                  <li><span className="text-lhra-yellow mr-2">•</span>Email if cancelling within 24 hours</li>
                  <li><span className="text-lhra-yellow mr-2">•</span>Students must attend ¾ of scheduled lessons to keep their spot</li>
                </ul>
              </CardContent>
            </Card>

            {/* Instructor Contact Info */}
            <Card className="elegant-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-lhra-red/10 p-2 rounded-full text-lhra-red">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-lexend text-xl text-lhra-red">Instructor Contact Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-lexend text-gray-700 text-sm">
                  <li><span className="text-lhra-yellow mr-2">•</span><strong>LHRA Phone:</strong> 573-823-2173</li>
                  <li><span className="text-lhra-yellow mr-2">•</span><strong>Kate’s Phone:</strong> 573-821-5747</li>
                  <li><span className="text-lhra-yellow mr-2">•</span><strong>Charlotte (Mon):</strong> 573-356-3712</li>
                  <li><span className="text-lhra-yellow mr-2">•</span><strong>Email:</strong> lionheartridingacademy@gmail.com</li>
                  <li><span className="text-lhra-yellow mr-2">•</span><strong>Facebook:</strong> <a href="https://www.facebook.com/LionHeartRidingAcademy" className="text-lhra-blue underline">facebook.com/LionHeartRidingAcademy</a></li>
                  <li><span className="text-lhra-yellow mr-2">•</span><strong>Instagram:</strong> <a href="https://www.instagram.com/lionheartridingacademy" className="text-lhra-blue underline">instagram.com/lionheartridingacademy</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ...existing Package Policies and Hero Footer remain unchanged... */}
    </div>
  )
}
