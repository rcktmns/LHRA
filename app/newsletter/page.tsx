import Link from "next/link"

export default function NewsletterPage() {
  const newsletters = [
    {
      month: "June 2025",
      url: "https://mail.google.com/mail/u/0?ui=2&ik=5dfacd2a68&attid=0.1&permmsgid=msg-f:1834479571296094285&th=197561735ad0884d&view=att&disp=inline&realattid=f_mbpgqr590&zw"
    },
    {
      month: "May 2025",
      url: "https://mail.google.com/mail/u/0?ui=2&ik=5dfacd2a68&attid=0.1&permmsgid=msg-f:1831307283215802525&th=196a1c457aa9e09d&view=att&disp=inline&realattid=f_mabflq9i0&zw"
    },
    {
      month: "December 2024",
      url: "https://mail.google.com/mail/u/0?ui=2&ik=5dfacd2a68&attid=0.2&permmsgid=msg-f:1818352589744988538&th=193c160bdc29617a&view=att&disp=inline&realattid=f_m4n3xajg0&zw"
    },
    {
      month: "November 2024",
      url: "https://mail.google.com/mail/u/0?ui=2&ik=5dfacd2a68&attid=0.1&permmsgid=msg-f:1815813587213403368&th=193310d6442ec4e8&view=att&disp=inline&realattid=f_m3j2bnqp0&zw"
    },
    {
      month: "October 2024",
      url: "https://mail.google.com/mail/u/0?ui=2&ik=5dfacd2a68&attid=0.1&permmsgid=msg-f:1813012976009191172&th=19291db228339f04&view=att&disp=inline&realattid=f_m2aw6ce40&zw"
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
                      <p className="font-lexend text-lg text-gray-600">Click to read newsletter</p>
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