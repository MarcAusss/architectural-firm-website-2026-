import Image from "next/image";
import { montserrat } from "../fonts";

export default function Team() {
  const members = [
    {
      name: "John Doe",
      location: "Manila, Philippines",
      image:
        "/images/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
    },
    {
      name: "Jane Doe",
      location: "Cebu, Philippines",
      image:
        "/images/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
    },
    {
      name: "Joe Doe",
      location: "Davao, Philippines",
      image:
        "/images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
    },
  ];

  return (
    <div className="px-6 md:px-0 py-16 md:py-20">
      
      {/* Header */}
      <div className="flex items-center gap-2 font-semibold">
        <i className="fa-solid fa-diamond"></i>
        <p className={montserrat.className}>Our Team</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
        <h1 className="text-2xl md:text-4xl">
          Meet Our Expert Therapist
        </h1>
        <p className={`${montserrat.className} text-sm text-gray-600`}>
          Get guidance from an experienced therapist who truly
          understands your needs.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {members.map((member, index) => (
          <div key={index} className="rounded-xl">
            <div className="relative h-72 md:h-115">
              <Image
                src={member.image}
                fill
                alt={member.name}
                className="object-cover rounded-xl"
              />
            </div>

            <div className="mt-4">
              <h1 className="text-xl md:text-2xl">
                {member.name}
              </h1>
              <p
                className={`${montserrat.className} text-sm text-gray-400`}
              >
                {member.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
