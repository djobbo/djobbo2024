"use client"

import { useUwu } from "@/store/uwuStore"

export const UwuLogo = () => {
  const { uwu } = useUwu()

  if (!uwu) {
    return null
  }

  return (
    <img
      src="https://kubernetes.io/images/blog/2024-04-17-kubernetes-1.30-release/k8s-1.30.png"
      alt="uwu"
      className="h-12 w-12"
    />
  )
}
