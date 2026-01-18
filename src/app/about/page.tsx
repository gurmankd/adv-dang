import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "About Advocate Dharmendra Singh Dang — practicing since 2009 in Rudrapur and Nainital High Court.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">About</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              Advocate Dharmendra Singh Dang has been actively practicing since {site.practicingSince},
              appearing before the District & Sessions Court, Rudrapur and the High Court at Nainital.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Bar Enrollment: {site.barEnrollment}</Badge>
              <Badge>Chamber No. 27, Rudrapur Court</Badge>
              <Badge>Languages: {site.languages.join(", ")}</Badge>
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">Education</h2>
                <div className="mt-3 text-sm text-slate-700">
                  <div className="font-medium">{site.education.college}</div>
                  <div className="mt-1">
                    {site.education.degrees.join(", ")} • Graduation {site.education.graduationYear}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">Bar Association Role</h2>
                <div className="mt-3 text-sm text-slate-700">
                  <div className="font-medium">{site.leadership.role}</div>
                  <div className="mt-1">
                    Tenure: {site.leadership.tenure} • {site.leadership.note}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:col-span-2">
                <h2 className="text-lg font-semibold text-slate-900">Consultation</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {site.consultation.initial}. {site.consultation.inPersonRule}
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
