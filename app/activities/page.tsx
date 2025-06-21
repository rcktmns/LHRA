import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Trophy, PartyPopper } from "lucide-react"
import { HorseIcon, HorseJumpIcon, HorseTrophyIcon } from "@/components/HorseIcon"

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-lhra-blue">
        <div className="absolute inset-0 bg-[url('/images/horse-pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <HorseIcon className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-4 sm:mb-6 text-lhra-yellow" />
          <h1 className="font-papyrus text-4xl font-bold text-white mb-3 sm:mb-4">Activities & Events</h1>
          <div className="h-1 bg-lhra-yellow w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="font-lexend text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
            From summer camps to horse shows and special events, discover all the exciting activities at LionHeart Riding Academy.
          </p>
        </div>
      </section>

      {/* Camps Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <HorseJumpIcon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-lhra-blue" />
            <h2 className="font-papyrus text-2xl sm:text-3xl md:text-4xl font-bold text-lhra-blue mb-3 sm:mb-4">Summer Camps</h2>
            <div className="h-1 bg-lhra-yellow w-20 sm:w-24 mx-auto mb-4 sm:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4 sm:space-y-6">
              <p className="font-lexend text-gray-700 text-base sm:text-lg">
                We offer various camps at LionHeart, teaching kids about different aspects of horses and horse care, including: parts of the horse, horse colorings/markings, how to groom horses, and more.
              </p>
              <p className="font-lexend text-gray-700 text-base sm:text-lg">
                We have strenuous camps for advanced riders like our Show Prep camps, and calmer camps for younger kids like Cub Camp. Most camps run over several days during summer, but we also offer day camps for new riders or friends/siblings of current riders.
              </p>
            </div>
            <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-xl border-2 border-lhra-yellow">
              <Image
                src="/images/camp-activities.jpg"
                alt="Camp Activities"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <h3 className="font-papyrus text-xl sm:text-2xl font-bold text-lhra-blue mb-4 sm:mb-6">Upcoming Camps</h3>
            
            <Card className="border-2 border-lhra-yellow hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-papyrus text-lg sm:text-xl text-lhra-blue">Spring Break Camp</CardTitle>
                <p className="text-lhra-red font-semibold text-sm sm:text-base">March 25th-29th — $75/day or $350 for the week</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="font-lexend text-gray-700 text-sm sm:text-base">
                  Each day will have a theme with field trips to our vet clinic, show barns, American Saddlebred Museum, and historic Simmons Barn. Includes pattern work and daily activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-lhra-yellow hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-papyrus text-lg sm:text-xl text-lhra-blue">Here Comes the Boom! Show Prep Camp</CardTitle>
                <p className="text-lhra-red font-semibold text-sm sm:text-base">June 3rd-9th — $800 ($600 if not showing)</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="font-lexend text-gray-700 text-sm sm:text-base">
                  For intermediate to advanced riders. Includes show preparation, riding twice daily, and participation in the Fulton show. Camp hours: 8:30-3:30 M-Th.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-lhra-yellow hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-papyrus text-lg sm:text-xl text-lhra-blue">Mid-America Show Prep Camp</CardTitle>
                <p className="text-lhra-red font-semibold text-sm sm:text-base">June 17th-23rd — $900</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="font-lexend text-gray-700 text-sm sm:text-base">
                  For Nationals Riders only. Focused on intensive riding and show preparation. Limited to 4 riders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-lhra-yellow hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-papyrus text-lg sm:text-xl text-lhra-blue">Cub Camp</CardTitle>
                <p className="text-lhra-red font-semibold text-sm sm:text-base">July 8th-12th — $450</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="font-lexend text-gray-700 text-sm sm:text-base">
                  For younger or less experienced riders. Includes one lesson per day, educational activities, and crafts. Hours: 9-3.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <HorseTrophyIcon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-lhra-blue" />
            <h2 className="font-papyrus text-2xl sm:text-3xl md:text-4xl font-bold text-lhra-blue mb-3 sm:mb-4">Horse Shows</h2>
            <div className="h-1 bg-lhra-yellow w-20 sm:w-24 mx-auto mb-4 sm:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4 sm:space-y-6">
              <p className="font-lexend text-gray-700 text-base sm:text-lg">
                Horse shows are optional but provide an excellent experience for riders. Students start in Academy classes, which are based on rider performance rather than horse quality.
              </p>
              <p className="font-lexend text-gray-700 text-base sm:text-lg">
                Classes include equitation (rider's appearance) and horsemanship (horse handling), with different levels: leadline, WT (walk/trot), WTC (walk/trot/canter), and 5-gaited classes.
              </p>
            </div>
            <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-xl border-2 border-lhra-yellow">
              <Image
                src="/images/horse-show.jpg"
                alt="Horse Show"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-lhra-red text-white hover:bg-lhra-blue hover:text-lhra-yellow w-full sm:w-auto"
            >
              <Link href="/activities/shows">View Show Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Parties Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <PartyPopper className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-lhra-blue" />
            <h2 className="font-papyrus text-2xl sm:text-3xl md:text-4xl font-bold text-lhra-blue mb-3 sm:mb-4">Special Events & Parties</h2>
            <div className="h-1 bg-lhra-yellow w-20 sm:w-24 mx-auto mb-4 sm:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 border-lhra-yellow hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-papyrus text-lg sm:text-xl text-lhra-blue">Summer Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="font-lexend text-gray-700 text-sm sm:text-base">
                  A casual gathering to watch our Drill Team's summer performances. Friends and family welcome with shared food and activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-lhra-yellow hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-papyrus text-lg sm:text-xl text-lhra-blue">Halloween Party</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="font-lexend text-gray-700 text-sm sm:text-base">
                  Features our famous Costume Contest, Drill Team performances, and fun activities. Students can participate in themed horse costumes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-lhra-yellow hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-papyrus text-lg sm:text-xl text-lhra-blue">Holiday Extravaganza</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="font-lexend text-gray-700 text-sm sm:text-base">
                  A grand celebration with Drill Team performances, potluck dinner, and gift exchange. Open to families and the public.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
