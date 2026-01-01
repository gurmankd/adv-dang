import Link from "next/link";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-slate-700">
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Go to Home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
