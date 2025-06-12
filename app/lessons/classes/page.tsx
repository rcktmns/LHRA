import React from "react";

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-lhra-blue">Riding Lessons at LionHeart</h1>

        <p className="mb-6 text-lg leading-relaxed text-gray-800">
          Here at LionHeart, we teach a form of English horse-back riding called{" "}
          <strong>Saddleseat</strong>, using <strong>American Saddlebred horses</strong> and{" "}
          <strong>Hackney ponies</strong>. These horses tend to be smart, well-mannered, and great teachers for riders at any experience level.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Age Range —</h2>
        <p className="mb-6 text-base leading-relaxed text-gray-800">
          We do not teach anyone under the age of 4. For riders between ages 4-6, an instructor might sit behind the rider in what is called a <strong>double saddle</strong>. This helps young riders learn through feeling instead of just words! There is no bad time to start learning to ride horses, so no pressure to start your child as early as possible — and if you’re an adult, don’t be afraid to start now.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Duration and Frequency —</h2>
        <p className="mb-4 text-base leading-relaxed text-gray-800">
          Lessons are usually 30 minutes long, though sometimes they may extend longer. Riders are encouraged to come early to learn how to groom and tack their horse, and stay after lessons to untack and care for their horse. Spending extra time on the ground builds a partnership between rider and horse, and helps build confidence, especially for riders initially afraid of horses.
        </p>
        <p className="mb-6 text-base leading-relaxed text-gray-800">
          We recommend riding at least once a week, preferably the same time and day, to build muscle memory. Riders who only come occasionally tend to progress slower. If a rider wants to show, they <strong>must</strong> ride at least twice a week for three months or more before showing.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Price —</h2>
        <p className="mb-6 text-base leading-relaxed text-gray-800">
          Lessons are sold in monthly packages, paid on the 1st of each month. You pay for all lesson days in that month (e.g., if your lesson is Saturdays and there are 5 Saturdays, you pay for 5 lessons). This includes holidays, which are eligible for make-ups. If you miss a lesson, make-ups can be done anytime within the same calendar month with proper cancellation notice. Unused lessons do not rollover. Individual lessons cost $50; monthly package lessons are $40 each. <strong>All lesson packages are non-refundable.</strong>
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Private vs Group —</h2>
        <p className="mb-6 text-base leading-relaxed text-gray-800">
          Private and group lessons cost the same and have the same duration. Instructors decide if/when to add another student to a lesson. Group lessons offer a unique learning experience we want riders to enjoy when ready.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Severe Weather —</h2>
        <p className="mb-4 text-base leading-relaxed text-gray-800">
          In severe weather, cancellations will be posted on LionHeart’s Facebook & Instagram and emailed. We try to give 2 hours’ notice, but Missouri weather can be unpredictable. Cancelled lessons can be made up.
        </p>
        <ul className="list-disc list-inside mb-6 text-base leading-relaxed text-gray-800">
          <li>
            <strong>Tornado Warning:</strong> Automatic cancellation.
          </li>
          <li>
            <strong>Severe Storms:</strong> Possible cancellation due to horse behavior or safety concerns.
          </li>
          <li>
            <strong>Excessive Heat:</strong> Lessons may be rescheduled; no lessons at 100°F or above.
          </li>
          <li>
            <strong>Excessive Cold:</strong> No lessons if temps are 10°F or below.
          </li>
          <li>
            <strong>Ice/Snow:</strong> Lessons rescheduled if travel is unsafe or roads closed.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Expectations of Riders —</h2>
        <p className="mb-6 text-base leading-relaxed text-gray-800">
          Arrive a few minutes early, preferably in riding attire (to avoid losing lesson time changing). Come with a willing attitude and good sportsmanship. Disruptive or disobedient riders may be asked to dismount and leave. Please respect staff working hard in the barn. If helping, follow staff instructions and care for equipment properly.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Expectations of Parents/Family/Friends —</h2>
        <p className="mb-6 text-base leading-relaxed text-gray-800">
          Allow instructors to coach riders without distractions. Don’t interrupt lessons, as this can be a safety issue or hinder learning. Riding includes challenges — let riders work through these with their instructor. As riders bond with horses and grow, they gain confidence.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12 text-lhra-blue">Equipment Usage and Storage —</h2>
        <p className="mb-6 text-base leading-relaxed text-gray-800">
          We provide all grooming equipment and tack; please return items to their place. If unsure, just ask. We keep the barn tidy and equipment in good condition for everyone’s safety and staff efficiency. Personal items are your responsibility. We keep one personal saddle and stirrups per rider; please maintain them clean and conditioned. Other personal items go to lost & found and may be redistributed after two weeks. Only staff may keep helmets at the barn.
        </p>
      </section>
    </main>
  );
}
