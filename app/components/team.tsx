import Image from 'next/image';

// TODO: Replace with actual team member data (photos, names, roles)
const TEAM_MEMBERS = [
  {
    name: 'Carl',
    role: 'Founder',
    image: '/team/placeholder.svg',
  },
  // Add more team members here with their actual photos and info
];

export function TeamSection() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-content px-4">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          The Team
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Meet the people behind Ivy
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border bg-muted/30 transition-transform group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
