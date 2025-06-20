import Image from "next/image"

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-5xl font-bold mb-6">Our Staff!</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Meet our incredible instructors and grooms here at LionHeart Riding Academy. These will be familiar faces in the barn and at horse shows to help riders through every aspect of their equestrian journey.
          </p>
        </div>
      </section>

      {/* Kate Coup Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1 flex justify-center">
            <Image src="/public/placeholder-user.jpg" alt="Kate Coup" width={350} height={400} className="rounded-xl shadow-lg object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-2">Kate Coup</h2>
            <h3 className="font-florentia font-bold text-xl text-lhra-red mb-4">Founder, Instructor, & Trainer</h3>
            <div className="h-0.5 w-12 bg-lhra-yellow mb-4"></div>
            <p className="font-florentia text-lg text-gray-700">
              {/* Replace this with Kate's own words */}
              Kate's bio goes here. She can share her story, her passion for horses, her vision for LionHeart, and anything else she'd like riders and families to know!
            </p>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Nora Humfeld */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Nora Humfeld" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Nora Humfeld</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Assistant Instructor & Groom</p>
              <div className="font-lexend text-lg text-gray-700 text-center mt-2">
               
              </div>
            </div>
            {/* Izzy Petsel */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Izzy Petsel" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Izzy Petsel</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Assistant Instructor & Groom</p>
              <div className="font-lexend text-lg text-gray-700 text-center mt-2">
                
              </div>
            </div>
            {/* Charlotte Struckhoff */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Charlotte Struckhoff" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Charlotte Struckhoff</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Assistant Instructor & Groom</p>
            </div>
            {/* Ahna Grant */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Ahna Grant" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Ahna Grant</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Groom</p>
            </div>
            {/* Hailey Niles */}
            {/* <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Hailey Niles" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Hailey Niles</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Groom</p>
            </div> */}
            {/* Ava Gamble */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Ava Gamble" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Ava Gamble</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Groom</p>
            </div>
            {/* Addie Stroessner */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Addie Stroessner" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Addie Stroessner</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Groom</p>
            </div>
            {/* Caroline Bruns */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 flex flex-col items-center">
              <Image src="/public/placeholder-user.jpg" alt="Caroline Bruns" width={220} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-1">Caroline Bruns</h3>
              <p className="font-florentia text-lhra-red font-semibold mb-2">Groom</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
