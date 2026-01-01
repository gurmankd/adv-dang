import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact Advocate Dharmendra Singh Dang (Rudrapur). Chamber No. 27, District & Sessions Court. Free initial consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Contact
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              {site.consultation.initial}. {site.consultation.inPersonRule}
            </p>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-medium text-slate-900">Office</div>
                <div className="mt-2 text-sm text-slate-700">{site.chamber}</div>
                <div className="mt-2 text-sm text-slate-700">Hours: {site.hours}</div>

                <div className="mt-5 text-sm font-medium text-slate-900">Phone</div>
                <div className="mt-2 text-sm text-slate-700">
                  <a className="underline" href={`tel:${site.phones[0]}`}>
                    {site.phones[0]}
                  </a>{" "}
                  /{" "}
                  <a className="underline" href={`tel:${site.phones[1]}`}>
                    {site.phones[1]}
                  </a>
                </div>

                <div className="mt-5 text-sm font-medium text-slate-900">Email</div>
                <div className="mt-2 text-sm text-slate-700">
                  <a className="underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink
                    href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                      "Hello, I would like to consult regarding a legal matter."
                    )}`}
                    variant="primary"
                  >
                    WhatsApp
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.phones[0]}`} variant="secondary">
                    Call Now
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-medium text-slate-900">Courts</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {site.courts.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-sm font-medium text-slate-900">Languages</div>
                <div className="mt-2 text-sm text-slate-700">
                  {site.languages.join(", ")}
                </div>

                <div className="mt-6 text-xs leading-relaxed text-slate-500">
                  Note: This website is for informational purposes only. For legal advice,
                  please consult in person/video as applicable.
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
