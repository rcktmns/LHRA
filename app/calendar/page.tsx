import Link from "next/link"
export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="elegant-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-4xl font-bold mb-6">Calendar</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Stay informed about upcoming lessons, shows, events, and special activities at Lionheart Riding Academy.
          </p>
        </div>
      </section>

      {/* Calendar Embed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 bg-lhra-blue/5 border-b border-gray-100">
              <h2 className="font-lexend text-2xl font-semibold text-lhra-blue">LionHeart Schedule</h2>
              <p className="text-gray-600 mt-1">View and plan for all upcoming academy activities</p>
            </div>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=lionheartridingacademy%40gmail.com&ctz=America%2FNew_York"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="LHRA Calendar"
              className="w-full"
            />
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="font-lexend text-2xl font-semibold text-lhra-blue mb-4">Calendar Information</h3>
            <div className="h-0.5 bg-lhra-yellow w-16 mb-6"></div>
            <div className="space-y-4 text-gray-700">
              <p className="mt-6">
                For any questions about our schedule or to inquire about specific events, please{" "}
                <Link href="/about/contact" className="text-lhra-red hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
