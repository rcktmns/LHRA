import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Info } from "lucide-react";

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-4xl font-bold mb-4">
            Cancellation Policy
          </h1>
          <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-2"></div>
          <p className="font-lexend text-base sm:text-lg max-w-3xl mx-auto">
            We understand schedules change. Review our policy to understand when and how to cancel/reschedule your lesson.
          </p>
        </div>
      </section>

      {/* Main Policy Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Official Policy Overview Card */}
            <Card className="elegant-card p-4">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="bg-lhra-blue/10 p-1.5 rounded-full text-lhra-blue">
                    <Info className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-lexend text-lg sm:text-base text-lhra-blue">
                    Official Policy Overview
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-lexend text-base text-gray-800 mb-3">
                  Cancellations must be given 24-hour notice to be eligible for a make-up lesson.
                </p>
                <ul className="space-y-2 text-base text-gray-800 font-lexend font-medium">
                  
                  <li>
                    <span className="text-lhra-yellow text-base mr-2">•</span>
                    All cancellations and make-up requests must be recorded in the{" "}
                    <a
                      href="https://docs.google.com/document/d/1-24KY-W0Lxnm1QY_NV3Qg6DDe8LAiEXAIQw6i07soZo/edit?usp=sharing"
                      className="text-lhra-blue underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Changes Google Doc
                    </a>
                  </li>
                  <li>
                    <span className="text-lhra-yellow text-base mr-2">•</span>
                    Riders must attend at least ¾ of their lesson to keep their reserved lesson spot
                  </li>
                  <li>
                    <span className="text-lhra-yellow text-base mr-2">•</span>
                    Any lesson cancelled by LionHeart is eligible for make-ups
                  </li>
                </ul>
                <p className="font-lexend text-lhra-red font-semibold mt-3 text-base">
                  Note: Make-up lessons must be completed within the month scheduled. They do not rollover into the next month.
                </p>
              </CardContent>
            </Card>

            {/* Instructor Contact Info Card */}
            <Card className="elegant-card p-4">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="bg-lhra-red/10 p-1.5 rounded-full text-lhra-red">
                    <Phone className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-lexend text-lg sm:text-base text-lhra-red">
                    Instructor Contact Info
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-base text-gray-800 font-lexend">
                  <li>
                    <span className="font-bold">LHRA Phone:</span> 573-823-2173
                  </li>
                  
                  <li>
                    <span className="font-bold">Email:</span> lionheartridingacademy@gmail.com
                  </li>
                  <li>
                    <span className="font-bold">Facebook:</span>{" "}
                    <a
                      href="https://facebook.com/LionHeartRidingAcademy"
                      className="text-lhra-blue underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook.com/LionHeartRidingAcademy
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Instagram:</span>{" "}
                    <a
                      href="https://instagram.com/lionheartridingacademy"
                      className="text-lhra-blue underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      instagram.com/lionheartridingacademy
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
