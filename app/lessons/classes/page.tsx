import React from "react";
import Image from "next/image";

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Blue Hero Section */}
      <section className="bg-lhra-blue py-16 px-4 text-center">
        <h1 className="font-papyrus text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Courage. Strength. Confidence.</h1>
        <p className="font-florentia text-lg sm:text-xl text-white max-w-2xl mx-auto">
          At LionHeart, we teach Saddle Seat style riding on American Saddlebred horses and Hackney ponies. Saddle Seat is one form of English riding. American Saddlebreds are a beautiful, versatile breed of horse who tend to be smart, good-tempered, and excellent teachers.
        </p>
      </section>

      {/* Lesson Program Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Left */}
          <div className="flex-1">
            <h2 className="font-papyrus text-3xl font-bold text-center text-lhra-blue mb-8">Our Lesson Program</h2>
            <div className="mb-6">
              <h3 className="font-florentia font-bold text-xl text-lhra-red mb-2">Age Range</h3>
              <p className="font-florentia text-black mb-4">We teach riders ages 4 and up - it is never too late to begin your equestrian journey. Young riders may start in a double saddle, which allows the instructor to sit behind the child on the horse and allow them to learn through feeling.</p>
            </div>
            <div className="mb-6">
              <h3 className="font-florentia font-bold text-xl text-lhra-red mb-2">Duration and Frequency</h3>
              <p className="font-florentia text-black mb-4">Our lessons are 30 minutes long. It is required that riders ride at least once a week in order to build muscle memory. We also encourage riders to come early and stay later after their lesson so they learn how to tack up and groom their horse. Working with a horse on the ground helps create a bond that makes riding so special.</p>
            </div>
            <div className="mb-6">
              <h3 className="font-florentia font-bold text-xl text-lhra-red mb-2">Private vs Group Lessons</h3>
              <p className="font-florentia text-black mb-4">Private and group lessons are the same price and duration. Our instructors reserve the right to decide if/when to add another student to a lesson, so that all students are assured a learning experience.</p>
            </div>
            <div className="mb-6">
              <h3 className="font-florentia font-bold text-xl text-lhra-red mb-2">Lesson Pricing</h3>
              <ul className="font-florentia text-black mb-2 list-disc list-inside">
                <li>Individual lessons are $50</li>
                <li>Package lessons are $40 per lesson</li>
              </ul>
              <p className="font-florentia text-black mb-4">Packages are paid for on the 1st of each month. Lesson makeups can be done anytime within that month, but do not rollover into the next month's package.</p>
            </div>
            <div className="mb-6">
              <h3 className="font-florentia font-bold text-xl text-lhra-red mb-2">Safety Guidelines</h3>
              <p className="font-florentia text-black mb-4">Safety is our top priority at LionHeart (followed closely by fun!). Review our guidelines before visiting.</p>
            </div>
            <div className="mb-6">
              <h3 className="font-florentia font-bold text-xl text-lhra-red mb-2">Riding Attire</h3>
              <p className="font-florentia text-black mb-4">Riders will need proper attire in order to ride long-term, as this keeps their rides safe and comfortable.</p>
            </div>
          </div>
          {/* Picture Right */}
          <div className="flex-1 flex justify-center">
            <Image src="/images/horse-lesson.jpeg" alt="Riding Lesson" width={400} height={400} className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
