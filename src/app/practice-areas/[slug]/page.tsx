import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { practiceAreas, site } from "@/lib/site";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = practiceAreas.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: `${site.url}/practice-areas/${p.slug}` },
  };
}

function FAQSchema({ title, faqs }: { title: string; faqs: { q: string; a: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PracticeAreaSlugPage({ params }: { params: { slug: string } }) {
  const p = practiceAreas.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <>
      <Navbar />
      <main>
        <FAQSchema title={p.title} faqs={p.faqs} />

        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{p.title}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              {p.seoDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary">
                Book Consultation
              </ButtonLink>
              <ButtonLink href={`tel:${site.phones[0]}`} variant="secondary">
                Call Now
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                  `Hello, I would like to consult regarding ${p.title}.`
                )}`}
                variant="secondary"
              >
                WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              {site.consultation.initial}. {site.consultation.inPersonRule}
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <SectionList title="Who this is for" items={p.whoItsFor} />
              <SectionList title="How we can help" items={p.howWeHelp} />
              <SectionList title="What to bring" items={p.whatToBring} />
              <SectionList title="Next steps" items={p.nextSteps} />
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                {p.faqs.map((f) => (
                  <div key={f.q} className="rounded-xl border border-slate-200 p-4">
                    <div className="text-sm font-medium text-slate-900">{f.q}</div>
                    <div className="mt-2 text-sm text-slate-700">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
