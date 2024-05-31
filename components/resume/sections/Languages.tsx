import { ResumeData } from "@/data/resume"
import Image from "next/image"

type LanguageProps = Readonly<{
  language: ResumeData["languages"][number]
}>

export const Language = ({ language }: LanguageProps) => {
  return (
    <li className="flex items-center gap-4">
      <figure className="relative size-8 flex-shrink-0 overflow-hidden rounded-full">
        <Image src={language.flag} alt={language.name} layout="fill" />
        <figcaption className="sr-only">{language.name}</figcaption>
      </figure>
      <div>
        <p className="font-bold">{language.name}</p>
        <p className="text-[12px] text-foreground-alt">{language.level}</p>
      </div>
    </li>
  )
}

type LanguagesProps = Readonly<{
  languages: ResumeData["languages"]
}>

export const Languages = ({ languages }: LanguagesProps) => {
  return (
    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
      {languages.map((language) => (
        <Language key={language.name} language={language} />
      ))}
    </ul>
  )
}
