import { ReactNode } from "react"

type SectionTitleProps = Readonly<{
  children: ReactNode
}>

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className="mb-8 mt-16 text-[24px] font-bold">{children}</h2>
}
