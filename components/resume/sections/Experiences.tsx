import { ResumeData } from "@/data/resume"
import Image from "next/image"
import { Markdown } from "@/components/Markdown"
import { CornerDownRight } from "lucide-react"

type ExperienceContributionProps = Readonly<{
  contribution: ResumeData["experiences"][number]["contributions"][number]
}>

const ExperienceContribution = ({
  contribution,
}: ExperienceContributionProps) => {
  return (
    <li>
      <h4>
        <Markdown>{contribution.title}</Markdown>
      </h4>
      <ul>
        {contribution.items.map((item) => (
          <li key={item} className="flex items-center pl-2">
            <CornerDownRight size={16} className="mr-2 text-brand-gray-light" />
            <Markdown>{item}</Markdown>
          </li>
        ))}
      </ul>
    </li>
  )
}

type ExperienceHeaderProps = Readonly<{
  experience: ResumeData["experiences"][number]
}>

const ExperienceHeader = ({ experience }: ExperienceHeaderProps) => {
  return (
    <>
      <h3 className="flex items-center gap-x-2 font-bold">
        {experience.title}
        <ul className="flex items-center gap-x-2 text-[12px] font-normal text-brand-gray">
          {experience.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-brand-gray-lighter bg-brand-white px-[6px] py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
      </h3>
      <div className="flex items-center gap-4 text-[14px]">
        <div className="flex items-center gap-2">
          <figure className="relative size-6 overflow-hidden rounded-full">
            <Image
              src={experience.logo}
              alt={experience.company}
              layout="fill"
            />
            <figcaption className="sr-only">{experience.company}</figcaption>
          </figure>
          <p>{experience.company}</p>
        </div>
        <hr className="flex-1" />
        <p className="font-bold uppercase">{experience.date}</p>
      </div>
    </>
  )
}

type ExperienceProps = Readonly<{
  experience: ResumeData["experiences"][number]
}>

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <li>
      <ExperienceHeader experience={experience} />
      <ul className="mt-4 flex flex-col gap-2 rounded-lg border border-brand-gray-lighter bg-brand-gray-lightest px-6 py-4 text-[14px] leading-6">
        {experience.contributions.map((contribution) => (
          <ExperienceContribution
            key={contribution.title}
            contribution={contribution}
          />
        ))}
      </ul>
    </li>
  )
}

type ExperiencesProps = Readonly<{
  experiences: ResumeData["experiences"]
}>

export const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <ul className="flex flex-col gap-8">
      {experiences.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </ul>
  )
}
