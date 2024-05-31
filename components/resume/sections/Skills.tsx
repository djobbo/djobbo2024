import { ResumeData } from "@/data/resume"

type SkillProps = Readonly<{
  skill: ResumeData["skills"][number]["items"][number]
}>

const Skill = ({ skill }: SkillProps) => {
  return (
    <li className="flex flex-col items-center gap-2 text-center">
      <skill.Icon size={20} />
      <span className="text-[12px]">{skill.name}</span>
    </li>
  )
}

type SkillsProps = Readonly<{
  skills: ResumeData["skills"]
}>

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.title} className="mb-8">
          <h3 className="text-[16px] font-bold">{skill.title}</h3>
          <ul className="mt-4 grid grid-cols-3 gap-4">
            {skill.items.map((item) => (
              <Skill key={item.name} skill={item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
