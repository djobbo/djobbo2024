import { resumeData } from "@/data/resume"

import { Header } from "./Header"
import { Certifications } from "./sections/Certifications"
import { Experiences } from "./sections/Experiences"
import { Languages } from "./sections/Languages"
import { Skills } from "./sections/Skills"
import { SectionTitle } from "./SectionTitle"

type ResumeProps = Readonly<{
  singleColumn?: boolean
}>

export const Resume = ({ singleColumn = false }: ResumeProps) => {
  return (
    <>
      <Header />
      <div className={singleColumn ? "" : "flex gap-16"}>
        <section className="flex-1">
          <SectionTitle>Experience</SectionTitle>
          <Experiences experiences={resumeData.experiences} />
          <Certifications certifications={resumeData.certifications} />
        </section>
        {singleColumn ? (
          <section className="grid grid-cols-2 gap-16">
            <div>
              <SectionTitle>Skills & Tech Stack</SectionTitle>
              <Skills skills={resumeData.skills} />
            </div>
            <div>
              <SectionTitle>Languages</SectionTitle>{" "}
              <Languages languages={resumeData.languages} />
              <SectionTitle>Hobbys</SectionTitle>
            </div>
          </section>
        ) : (
          <section className="max-w-[18rem] flex-1">
            <SectionTitle>Skills & Tech Stack</SectionTitle>
            <Skills skills={resumeData.skills} />
            <SectionTitle>Languages</SectionTitle>
            <Languages languages={resumeData.languages} />
            <SectionTitle>Hobbys</SectionTitle>
          </section>
        )}
      </div>
    </>
  )
}
