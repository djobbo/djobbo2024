"use client"

import Md, { type Options } from "react-markdown"

import { cn } from "@/lib/utils"
import { uwuify } from "@/lib/uwuify"
import { useUwu } from "@/store/uwuStore"

type MarkdownProps = Options

export const Markdown = ({ className, children, ...props }: MarkdownProps) => {
  const { uwu } = useUwu()

  return (
    <Md className={cn(className, "markdown")} {...props}>
      {uwuify(children, uwu)}
    </Md>
  )
}
