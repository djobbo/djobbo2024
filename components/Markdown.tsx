import Md, { type Options } from "react-markdown"

import { cn } from "@/lib/utils"

type MarkdownProps = Options

export const Markdown = ({ className, ...props }: MarkdownProps) => {
  return <Md className={cn(className, "markdown")} {...props} />
}
