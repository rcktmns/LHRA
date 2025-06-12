import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function StaffPage() {
  const staff = [
    {
      name: "lilbro",
      title: "Head Instructor & Academy Director",
      image: "/images/horse-lesson.jpeg",
      bio: "With over 20 years of experience in equestrian education, Sarah founded LHRA with a vision to create a premier riding academy. She holds certifications from the American Riding Instructors Association and has competed at the national level.",
      specialties: ["Dressage", "Show Jumping", "Instructor Training"],
    },
    {
      name: "lilbro",
      title: "Senior Riding Instructor",
      image: "/images/competition.jpeg",
      bio: "Michael brings 15 years of competitive experience to LHRA. He specializes in preparing riders for competition and has coached numerous students to regional and national championships.",
      specialties: ["Competition Preparation", "Hunter/Jumper", "Youth Programs"],
    },
    {
      name: "LILbro",
      title: "Drill Team Director",
      image: "/images/drill-team.jpeg",
      bio: "Emily leads our award-winning drill team with creativity and precision. Her background in dance and equestrian arts creates stunning performances that showcase the harmony between horse and rider.",
      specialties: ["Drill Team", "Performance Arts", "Team Building"],
    },
    {
      name: "lilbro",
      title: "Barn Manager & Horse Care Specialist",
      image: "/images/horse-lesson.jpeg",
      bio: "David ensures the health and well-being of all our horses. With a degree in Equine Science and years of hands-on experience, he maintains the highest standards of horse care and facility management.",
      specialties: ["Horse Care", "Facility Management", "Safety Protocols"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="elegant-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="elegant-heading text-5xl font-bold mb-6">Our Expert Staff</h1>
          <div className="h-1 bg-lhra-yellow w-32 mx-auto mb-8"></div>
          <p className="font-lexend text-xl max-w-3xl mx-auto">
            Meet the dedicated professionals who make LHRA a leader in equestrian education. Our certified instructors
            bring years of experience and passion to every lesson.
          </p>
        </div>
      </section>

      {/* Staff Profiles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="elegant-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <h3 className="font-lexend text-2xl font-bold text-lhra-blue mb-2">{member.name}</h3>
                    <p className="font-lexend text-lhra-red font-semibold mb-4">{member.title}</p>
                    <div className="h-0.5 w-12 bg-lhra-yellow mb-4"></div>
                    <p className="font-lexend text-gray-700 mb-6">{member.bio}</p>
                    <div>
                      <h4 className="font-lexend font-semibold text-lhra-blue mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-lhra-yellow/20 text-lhra-blue px-3 py-1 rounded-full text-sm font-lexend"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      </div>
  )
}
