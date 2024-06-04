import { Fragment } from "react"
import { Markdown } from "@/components/Markdown"
import { ContactLink, ContactLinkIcon } from "./ContactLink"
import { resumeData } from "@/data/resume"

export const Header = () => {
  return (
    <header className="flex justify-between">
      <div
        style={{
          viewTransitionName: "resume-header",
        }}
      >
        <h1 className="text-[42px] font-light">{resumeData.name}</h1>
        <p className="flex items-center space-x-2 text-[14px] font-light uppercase text-foreground-alt">
          {resumeData.titles.map((title, i) => (
            <Fragment key={title}>
              {i > 0 && <span className="text-brand-accent">•</span>}
              <span>{title}</span>
            </Fragment>
          ))}
        </p>
        <div className="mt-4 w-full max-w-[420px] leading-6">
          <p className="text-[16px] font-semibold">{resumeData.about.title}</p>
          <br />
          <Markdown className="text-[14px]">
            {resumeData.about.description}
          </Markdown>
        </div>
      </div>
      <ul
        className="leading-8"
        style={{
          viewTransitionName: "resume-header-links",
        }}
      >
        {resumeData.links.map((link) => (
          <li key={link.url} className="flex items-center justify-end gap-2">
            <ContactLink link={link} />
            <ContactLinkIcon type={link.type} size={16} />
          </li>
        ))}
      </ul>
    </header>
  )
}
