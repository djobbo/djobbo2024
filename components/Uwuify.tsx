"use client"

import { uwuify } from "@/lib/uwuify"
import { useUwu } from "@/store/uwuStore"

type UwuifyProps = Readonly<{
  text: string
}>

export const Uwuify = ({ text }: UwuifyProps) => {
  const { uwu } = useUwu()

  return uwuify(text, uwu)
}
