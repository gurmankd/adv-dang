import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { Badge } from "@/components/badge";
import { practiceAreas, site } from "@/lib/site";

export default function HomePage() {
  const topAreas = practiceAreas.filter((p) =>
    ["criminal-law", "cheque-bounce", "family-law"].includes(p.slug)
  );

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <Container>
            <div className="py-14 md:py-20">
              <div className="flex flex-wrap gap-2">
                <Badge>District & Sessions Court, Rudrapur</Badge>
                <Badge>High Court, Nainital</Badge>
                <Badge>Practicing since {site.practicingSince}</Badge>
              </div>

              <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                {site.name}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
                Criminal matters, cheque bounce cases (NI Act 138) and family disputes — with
                courtroom-focused guidance and representation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="primary">
                  Free Initial Consultation
                </ButtonLink>
                <ButtonLink href={`tel:${site.phones[0]}`} variant="secondary">
                  Call: {site.phones[0]}
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                    "Hello, I would like to consult regarding a legal matter."
                  )}`}
                  variant="secondary"
                >
                  WhatsApp
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {site.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="text-sm font-medium text-slate-900">{h}</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Professional, clear and court-aligned guidance.
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-medium text-slate-900">
                    Consultation Options
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {site.consultation.initial}. {site.consultation.inPersonRule}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Top practice areas */}
        <section className="py-14">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Practice Areas
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
              Focus areas that most clients seek online — with dedicated pages for clarity.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {topAreas.map((p) => (
                <div
                  key={p.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-lg font-semibold text-slate-900">
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{p.short}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <ButtonLink href={`/practice-areas/${p.slug}`} variant="secondary">
                      Learn More
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ButtonLink href="/practice-areas" variant="primary">
                View All Practice Areas
              </ButtonLink>
            </div>
          </Container>
        </section>

        {/* Location + quick contact */}
        <section className="border-t border-slate-200 bg-slate-50 py-14">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Office & Courts
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {site.chamber}. Available during {site.hours}. Regular appearances at:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {site.courts.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-medium text-slate-900">Contact</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div>
                    Phone:{" "}
                    <a className="underline" href={`tel:${site.phones[0]}`}>
                      {site.phones[0]}
                    </a>{" "}
                    /{" "}
                    <a className="underline" href={`tel:${site.phones[1]}`}>
                      {site.phones[1]}
                    </a>
                  </div>
                  <div>
                    Email:{" "}
                    <a className="underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                  <div>Languages: {site.languages.join(", ")}</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary">
                    Book Consultation
                  </ButtonLink>
                  <ButtonLink
                    href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                      "Hello, I would like to consult regarding a legal matter."
                    )}`}
                    variant="secondary"
                  >
                    WhatsApp
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
