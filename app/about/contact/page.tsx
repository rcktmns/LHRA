"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-4xl font-bold mb-6">Contact Us</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Ready to start your equestrian journey? Get in touch with us to schedule a visit, ask questions, or learn
            more about our programs.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="elegant-heading text-2xl font-bold text-lhra-blue mb-6">Get In Touch</h2>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="bg-lhra-red/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-lhra-red" />
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold text-lhra-red mb-1 text-xs">Phone</h3>
                    <p className="font-lexend text-gray-600 text-xs">(573) 823-2173</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="bg-lhra-yellow/20 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-lhra-blue" />
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold text-lhra-blue mb-1 text-xs">Email</h3>
                    <p className="font-lexend text-gray-600 text-xs">lionheartridingacademy@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Image
                  src="/images/horse-lesson.jpeg"
                  alt="LHRA Facility"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Contact Form using Formsubmit */}
            <div>
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="font-lexend text-2xl text-lhra-blue">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formsubmit.co/lionheartridingacademy@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Hidden inputs for Formsubmit */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_autoresponse" value="Thank you for contacting LionHeart Riding Academy!" />
                    <input type="text" name="_honey" className="hidden" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-lexend text-lhra-blue">Name *</Label>
                        <Input id="name" name="name" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-lexend text-lhra-blue">Phone</Label>
                        <Input id="phone" name="phone" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-lexend text-lhra-blue">Email *</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-lexend text-lhra-blue">Subject</Label>
                      <Input id="subject" name="subject" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-lexend text-lhra-blue">Message *</Label>
                      <Textarea id="message" name="message" required rows={5} className="mt-1" />
                    </div>

                    <Button type="submit" className="w-full bg-lhra-red hover:bg-lhra-red/90 font-lexend font-semibold py-3 elegant-button">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
