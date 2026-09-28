```tsx
"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowUpRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#24352b]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#24352b] text-[#f5f2eb]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full border-[40px] border-[#d8c9a8]" />
          <div className="absolute -bottom-48 -left-32 h-96 w-96 rounded-full border-[40px] border-[#d8c9a8]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-sm text-[#d8c9a8] mb-5">
              LionHeart Riding Academy
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight">
              Let&apos;s start
              <br />
              <span className="italic text-[#d8c9a8]">your journey.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-[#d8ded8] max-w-2xl leading-relaxed">
              Have a question about lessons, training, or our facility?
              We&apos;d love to hear from you and help you find the right
              program.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* Contact Information */}
            <div className="lg:col-span-2">

              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#8a7253] mb-3">
                Contact
              </p>

              <h2 className="font-serif text-4xl md:text-5xl text-[#24352b] mb-6">
                Come say hello.
              </h2>

              <p className="text-[#667067] leading-relaxed mb-10">
                Whether you&apos;re interested in riding lessons, horse
                training, or simply want to learn more about LionHeart,
                reach out and we&apos;ll be happy to help.
              </p>

              <div className="space-y-7">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4dfd2]">
                    <Phone className="h-5 w-5 text-[#24352b]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#8a7253] mb-1">
                      Phone
                    </p>
                    <p className="text-lg text-[#24352b]">
                      (573) 823-2173
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4dfd2]">
                    <Mail className="h-5 w-5 text-[#24352b]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#8a7253] mb-1">
                      Email
                    </p>
                    <p className="text-lg text-[#24352b] break-all">
                      lionheartridingacademy@gmail.com
                    </p>
                  </div>
                </div>

              </div>

              {/* Image */}
              <div className="mt-12 relative">
                <Image
                  src="/images/Website Pics/Website Pics/About Us Page/About Us.jpeg"
                  alt="LionHeart Riding Academy"
                  width={600}
                  height={400}
                  className="w-full h-[280px] object-cover rounded-2xl"
                />

                <div className="absolute bottom-4 left-4 bg-[#f5f2eb]/95 backdrop-blur-sm rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-[#24352b]">
                    LionHeart Riding Academy
                  </p>
                  <p className="text-xs text-[#667067] mt-0.5">
                    Where riders grow with their horses
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">

              <Card className="border-0 bg-white shadow-[0_20px_60px_rgba(36,53,43,0.08)] rounded-2xl overflow-hidden">

                <CardHeader className="px-7 pt-8 md:px-10 md:pt-10">
                  <CardTitle className="font-serif text-3xl text-[#24352b]">
                    Send us a message
                  </CardTitle>

                  <p className="text-[#7a817b] mt-2">
                    Fill out the form below and we&apos;ll get back to you.
                  </p>
                </CardHeader>

                <CardContent className="px-7 pb-8 md:px-10 md:pb-10">

                  <form
                    action="https://formsubmit.co/lionheartridingacademy@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >

                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for contacting LionHeart Riding Academy!"
                    />
                    <input
                      type="text"
                      name="_honey"
                      className="hidden"
                    />

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-[#34443a]"
                        >
                          Name *
                        </Label>

                        <Input
                          id="name"
                          name="name"
                          required
                          className="mt-2 h-12 border-[#ddd9cf] bg-[#faf9f6] rounded-lg focus-visible:ring-[#24352b]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-[#34443a]"
                        >
                          Phone
                        </Label>

                        <Input
                          id="phone"
                          name="phone"
                          className="mt-2 h-12 border-[#ddd9cf] bg-[#faf9f6] rounded-lg focus-visible:ring-[#24352b]"
                        />
                      </div>

                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-[#34443a]"
                      >
                        Email *
                      </Label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 h-12 border-[#ddd9cf] bg-[#faf9f6] rounded-lg focus-visible:ring-[#24352b]"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-sm font-medium text-[#34443a]"
                      >
                        What can we help with?
                      </Label>

                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Riding lessons, horse training, general question..."
                        className="mt-2 h-12 border-[#ddd9cf] bg-[#faf9f6] rounded-lg focus-visible:ring-[#24352b]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-[#34443a]"
                      >
                        Message *
                      </Label>

                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us a little about what you're looking for..."
                        className="mt-2 resize-none border-[#ddd9cf] bg-[#faf9f6] rounded-lg focus-visible:ring-[#24352b]"
                      />
                    </div>

                    {/* Button */}
                    <Button
                      type="submit"
                      className="group w-full h-13 bg-[#24352b] hover:bg-[#344b3d] text-white rounded-lg font-medium transition-all"
                    >
                      Send Message

                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>

                    <p className="text-center text-xs text-[#8a918b]">
                      We&apos;ll get back to you as soon as possible.
                    </p>

                  </form>

                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#e4dfd2] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#8a7253] mb-4">
            LionHeart Riding Academy
          </p>

          <h2 className="font-serif text-3xl md:text-4xl text-[#24352b]">
            Every great partnership starts with a conversation.
          </h2>

        </div>
      </section>

    </div>
  )
}
```
