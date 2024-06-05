import { Uwuify } from "@/components/Uwuify"
import type { ResumeData } from "@/data/resume"

type CertificationsProps = Readonly<{
  certifications: ResumeData["certifications"]
}>

export const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <ul className="grid grid-cols-2 p-4">
      {certifications.map((certification) => (
        <li key={certification.degree} className="p-4">
          <h3 className="font-semibold">
            <Uwuify text={certification.degree} />
          </h3>
          <p className="text-[12px] text-foreground-alt">
            <Uwuify text={certification.school} />
          </p>
          <p className="text-[14px]">{certification.date}</p>
        </li>
      ))}
    </ul>
  )
}
