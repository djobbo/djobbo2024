import { cn } from "@/lib/utils"
import Md, { type Options } from "react-markdown"

type MarkdownProps = Options

export const Markdown = ({ className, ...props }: MarkdownProps) => {
  return <Md className={cn(className, "markdown")} {...props} />
}
