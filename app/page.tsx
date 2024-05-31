import { resumeData } from "@/data/resume"
import { Skills } from "@/components/resume/sections/Skills"
import { Header } from "@/components/resume/Header"
import { SectionTitle } from "@/components/resume/SectionTitle"
import { Languages } from "@/components/resume/sections/Languages"
import { Experiences } from "@/components/resume/sections/Experiences"
import { Certifications } from "@/components/resume/sections/Certifications"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-xl p-16">
      <Header />
      <div className="flex gap-16">
        <section className="flex-1">
          <SectionTitle>Experience</SectionTitle>
          <Experiences experiences={resumeData.experiences} />
          <Certifications certifications={resumeData.certifications} />
        </section>
        <section className="max-w-[18rem] flex-1">
          <SectionTitle>Skills & Tech Stack</SectionTitle>
          <Skills skills={resumeData.skills} />
          <SectionTitle>Languages</SectionTitle>
          <Languages languages={resumeData.languages} />
          <SectionTitle>Hobbys</SectionTitle>
        </section>
      </div>
    </main>
  )
}
