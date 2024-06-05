import { Resume } from "@/components/resume"
import { UwuInitializer } from "@/store/uwuStore"

type ResumePageProps = Readonly<{
  searchParams?: unknown
}>

export default function ResumePage({ searchParams }: ResumePageProps) {
  console.log({ searchParams })
  return (
    <UwuInitializer searchParams={searchParams}>
      <main className="mx-auto w-full max-w-screen-xl p-16">
        <Resume />
      </main>
    </UwuInitializer>
  )
}
