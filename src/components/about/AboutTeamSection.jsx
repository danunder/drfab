import dan from "../../assets/images/dan.jpeg";
import ryan from "../../assets/images/ryan.jpeg";
import colin from "../../assets/images/colin.jpeg";
import jeffrey from "../../assets/images/jeffrey.jpeg";

const TEAM = [
  {
    name: "Dan",
    role: "Operations & Fabrication",
    image: dan,
    bio: "Materials scientist and developer with years of 3D printing experience. Runs production, handles materials selection, builds tooling, and operates the vacform line. If it needs to be made, Dan figures out how.",
  },
  {
    name: "Ryan",
    role: "Design & Modelling",
    image: ryan,
    bio: "Senior 3D modeller with professional experience in toy design and packaging. Creates production-ready models from any starting point — a sketch, a scan, a photo, or just a conversation. If it needs to look right, Ryan makes it happen.",
  },
  {
    name: "Colin",
    role: "Friendly Robot Printer",
    image: colin,
    bio: "Colin is a Carbon Centauri 2 filament printer. He can make engineering grade parts with high precision and decorative things in 4 colours. He is very reliable, easy to work with, but he does poop on the job a lot.",
  },
  {
    name: "Jeffrey",
    role: "Unfriendly Robot Printer",
    image: jeffrey,
    bio: "Jeffrey is a Jupiter 2 resin printer. He gets his own office space because he is messy, stinky and honestly pretty toxic. He does however do exceptional, highly detailed work so we keep him around.",
  },
];

export default function AboutTeamSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#1F2A30]">
            ABOUT / THE TEAM
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-[#1F2A30] sm:text-5xl">
            Who&apos;s Behind drfab
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {TEAM.map((member) => (
            <div key={member.name} className="rounded-3xl bg-[#F7F8F9] p-8">
              <img
                src={member.image}
                alt={member.name}
                className="h-56 w-56 rounded-2xl object-cover"
              />

              <h3 className="mt-6 text-2xl font-extrabold text-[#1F2A30]">
                {member.name}
                <span className="ml-2 text-base font-semibold text-black/50">
                  — {member.role}
                </span>
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-black/60">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
