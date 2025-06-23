import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PartyPopper, Calendar, Users, Sparkles } from "lucide-react"

export default function PartiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-4xl font-bold mb-4">Parties at LionHeart</h1>
          <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-2"></div>
          <p className="font-lexend text-base max-w-3xl mx-auto leading-relaxed">
            Join us for unforgettable celebrations! From seasonal barn gatherings to magical birthday parties, 
            LionHeart has been creating cherished memories for riders and their families.
          </p>
        </div>
      </section>

      {/* Seasonal Parties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Seasonal Celebrations</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our seasonal parties have become a beloved tradition at LionHeart. They bring together our barn family 
              to celebrate with horses, delicious food, and endless fun throughout the year.
            </p>
          </div>

          {/* Halloween Party */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-4">
                <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-3">Halloween Party</h3>
                <p className="font-lexend text-gray-700 text-lg leading-relaxed">
                Every year we throw a Halloween Party. The biggest event of the night is our costume contest - riders dress themselves and a horse of their choosing up, then everyone bids on who has the best costume and a winner is crowned!. Oftentimes we will have a Drill Team performance and a potluck. Other festivities change from year to year.
                </p>
                <p className="font-lexend text-gray-700 text-lg leading-relaxed">
                 
                 Check out{" "}
                  <a 
                    href="https://www.instagram.com/p/DBTfVHvRvYo/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lhra-blue hover:text-lhra-red transition-colors underline font-semibold"
                  >
                    past costumes here.
                  </a>{" "}
                </p>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative overflow-hidden shadow-lg group h-60 w-80 rounded-lg">
                    <Image 
                      src="/images/drill-team.jpeg" 
                      alt="Drill team performance at Halloween party" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                  </div>
                  <div className="relative overflow-hidden shadow-lg group h-60 w-80 rounded-lg">
                    <Image 
                      src="/images/competition.jpeg" 
                      alt="Halloween party competition" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white font-lexend font-semibold">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Winter Extravaganza */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 space-y-4">
                <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-3">Winter Extravaganza</h3>
                <p className="font-lexend text-gray-700 text-lg leading-relaxed">
                The biggest barn event of the year. Each of our Drill Teams put on a massive performance filled with costumes, lighting, props, etc. It is incredible to watch and best of all, it is open to the public - stay tuned for the annual announcement, we hope you'll make it.
                </p>
                
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative overflow-hidden shadow-lg group h-80 w-60 rounded-lg">
                    <Image 
                      src="/images/IMG_1933.webp" 
                      alt="Winter extravaganza drill team performance with dramatic lighting" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white font-lexend font-semibold">
                    </div>
                  </div>
                  <div className="relative overflow-hidden shadow-lg group h-60 w-80 rounded-lg">
                    <Image 
                      src="/images/IMG_1944.webp" 
                      alt="Winter party performance with costumed horses and riders" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white font-lexend font-semibold">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spring/Summer Party */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-4">
                <h3 className="font-lexend font-bold text-2xl text-lhra-red mb-3">Spring/Summer Parties</h3>
                <p className="font-lexend text-gray-700 text-lg leading-relaxed">
                We don't always have one of these, but sometimes we have a spring/summer party to celebrate the warming weather and enjoy some time around horses. Usually would be paired with a Drill Team performance.
                </p>
              
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative overflow-hidden shadow-lg group h-60 w-80 rounded-lg">
                    <Image 
                      src="/images/ rse-lesson.jpeg" 
                      alt="Spring/summer party activities" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white font-lexend font-semibold">
                    </div>
                  </div>
                  <div className="relative overflow-hidden shadow-lg group h-60 w-80 rounded-lg">
                    <Image 
                      src="/images/bo.webp" 
                      alt="Spring/summer party with horses" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white font-lexend font-semibold">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Parties Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Birthday Parties</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-2"></div>
            <p className="font-lexend text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Many of our riders enjoy having their birthday party at LionHeart! It is the perfect place to spend time with friends. We allow our riders to dress up / decorate some of the horses using pet-safe dyes/glitter, or simply with a costume. Pony rides may be given. Horse enthusiast or not, all are welcome at a LionHeart birthday party, and who knows, if you get invited you might even get hooked and become a horse enthusiast yourself!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-60 w-80 rounded-lg">
              <Image
                src="/images/ralf.webp"
                alt="Birthday celebration with decorated horse and happy children"
                width={600}
                height={400}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
            <div className="h-60 w-80 rounded-lg">
              <Image
                src="/images/skylar.webp"
                alt="Birthday party celebration at LionHeart"
                width={600}
                height={400}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 elegant-red-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-heading text-3xl font-bold mb-6">Interested in Lionheart Parties?</h2>
          <p className="font-lexend text-lg mb-8 max-w-2xl mx-auto">
          Check the events schedule to attend a LionHeart party or contact us about hosting your party!          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-lhra-yellow text-lhra-blue hover:bg-lhra-yellow/90 font-lexend font-semibold px-8 py-6 text-lg elegant-button transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <a 
                href="http://docs.google.com/document/d/1DaFIJ-Ym4LcIrr8A9rfzr0jkgAaFF5f1/edit?fbclid=PAZXh0bgNhZW0CMTEAAaeOR8lhwHqvKfCe3IqIiFUKLgVu48aVkipAmkj3iuqPpHrwLC9G0i5775GvaQ_aem_72lwpl9HL3lG7joJ-P8ozQ&tab=t.0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Events Schedule
              </a>
            </Button>
            
          </div>
        </div>
      </section>
    </div>  
  )
}
