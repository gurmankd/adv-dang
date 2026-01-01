import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { practiceAreas, site } from "@/lib/site";
import type { Metadata } from "next";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = practiceAreas.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: {
      canonical: `${site.url}/practice-areas/${p.slug}`,
    },
  };
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const p = practiceAreas.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              {p.title}
            </h1>
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
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">How we can help</h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">Consultation</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {site.consultation.initial}. {site.consultation.inPersonRule}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary">
                    Contact Details
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
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
