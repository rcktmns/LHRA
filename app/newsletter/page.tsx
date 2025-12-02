import Link from "next/link"

export default function NewsletterPage() {
  const newsletters = [
     {
      month: "October 2025",
      url: "/newsletters/HA-Oct25.pdf",
      subtitle: "How to earn an extra lesson, Halloween Party announcement, & horse trivia."
    },
    {
      month: "June 2025",
      url: "/newsletters/horsin-around-june25.pdf",
      subtitle: "Show season update, lesson reminders, & a tribute to Scarlet Sky."
    },
    {
      month: "May 2025",
      url: "/newsletters/HA-may25.pdf",
      subtitle: "Camp announcements, summer schedule, & a tribute to Karen Coup."
    },
    {
      month: "December 2024",
      url: "/newsletters/Horsin' Around - Dec 24.pdf",
      subtitle: "Christmas Spectacular announcement, moving update, & our cancellation policy."
    },
    {
      month: "November 2024",
      url: "/newsletters/horsin-around-nov24.pdf",
      subtitle: "Academy Nationals update, & moving announcement."
    },
    {
      month: "October 2024",
      url: "/newsletters/horsin-around-oct24.pdf",
      subtitle: "Academy Nationals Team announcement, & Halloween Party date."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue Header Section */}
      <section className="bg-lhra-blue py-16 px-4 text-center">
        <h1 className="font-papyrus text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Horsin' Around</h1>
        <div className="h-2 bg-lhra-yellow w-1/3 mx-auto mb-6"></div>
        <p className="font-lexend text-lg sm:text-xl text-white max-w-2xl mx-auto">
          Our monthly newsletter featuring the latest news, events, and stories from LionHeart Riding Academy
        </p>
      </section>

      {/* Newsletter Archive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-papyrus text-3xl font-bold text-lhra-blue mb-4">Newsletter Archive</h2>
            <div className="h-1 bg-lhra-yellow w-24 mx-auto mb-6"></div>
            <p className="font-lexend text-lg text-gray-600">
              Click on any month below to read our newsletter
            </p>
          </div>

          <div className="space-y-4">
            {newsletters.map((newsletter, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-lhra-yellow">
                <Link 
                  href={newsletter.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-lhra-blue rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-papyrus text-xl font-bold text-lhra-blue group-hover:text-lhra-red transition-colors">
                        {newsletter.month}
                      </h3>
                      <p className="font-lexend text-md text-gray-600">{newsletter.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-lhra-yellow group-hover:text-lhra-red transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-lexend text-lg text-gray-600 mb-6">
              Want to receive our newsletter directly in your inbox?
            </p>
            <Link 
              href="/about/contact" 
              className="inline-block bg-lhra-blue text-white font-lexend font-semibold px-8 py-4 rounded-lg shadow hover:bg-lhra-yellow hover:text-lhra-blue transition-colors"
            >
              Contact Us to Subscribe
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
