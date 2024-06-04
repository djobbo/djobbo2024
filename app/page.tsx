import { Resume } from "@/components/resume"
import { ArrowRight } from "lucide-react"
import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-xl p-16">
      <Link href="/resume" className="text-brand-accent">
        View Resume
      </Link>
      <Link
        href="/resume"
        className="after:bg-resume-shadow group relative block h-[42rem] overflow-hidden rounded-none p-4 transition-all after:absolute after:inset-x-0 after:bottom-0 after:h-16 hover:rounded-lg"
      >
        <div className="transition-transform group-hover:rotate-[0.5deg]">
          <div className="relative mx-auto max-w-screen-lg rounded-lg border border-brand-gray-lighter bg-brand-white p-8 shadow-xl before:absolute before:inset-0 before:-z-10 before:-rotate-1 before:rounded-lg before:border-2 before:border-dashed before:border-brand-gray-light before:bg-brand-gray-lighter before:transition-transform before:group-hover:-rotate-2">
            <Resume singleColumn />
          </div>
        </div>
        <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-b from-transparent to-brand-white transition-all group-hover:flex">
          <p className="flex items-center gap-1 rounded-md px-4 py-2 text-lg font-bold transition-all hover:gap-2 hover:border hover:border-brand-gray-lighter hover:text-brand-accent">
            View Resume
            <ArrowRight className="size-4" strokeWidth={4} />
          </p>
        </div>
      </Link>
    </main>
  )
}
