"use client"

import type { ReactNode } from "react"
import { z } from "zod"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UwuState {
  uwu: boolean
}

export const useUwu = create<UwuState>()(
  persist(
    (_set) => ({
      uwu: false,
    }),
    {
      name: "uwu-store",
      version: 1,
    },
  ),
)

const searchParamsSchema = z.object({
  uwu: z.string(),
})

type UwuProps = Readonly<{
  searchParams?: unknown
  children: ReactNode
}>

export const UwuInitializer = ({ searchParams, children }: UwuProps) => {
  const parsedSearchParams = searchParamsSchema.safeParse(searchParams)

  if (parsedSearchParams.success) {
    useUwu.setState({
      uwu: parsedSearchParams.data.uwu !== "false",
    })
  }

  return children
}
