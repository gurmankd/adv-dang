import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { practiceAreas } from "@/lib/site";

export const metadata = {
  title: "Practice Areas",
  description:
    "Practice areas of Advocate Dharmendra Singh Dang: criminal law, cheque bounce (NI Act 138), family law and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Practice Areas
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              Explore each practice area to understand typical matters handled and consultation options.
            </p>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="grid gap-5 md:grid-cols-2">
              {practiceAreas.map((p) => (
                <div key={p.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-lg font-semibold text-slate-900">{p.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{p.short}</p>
                  <div className="mt-5">
                    <ButtonLink href={`/practice-areas/${p.slug}`} variant="secondary">
                      View Details
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
