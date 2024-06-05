import { emoji, kaomoji } from "@/data/kaomoji"

export const uwuify = (input: string | undefined | null, uwu = true) => {
  if (!input || !uwu) return input

  let output = input
    // Wuwuify
    .replace(/(?:l|r)/g, "w") //
    .replace(/(?:L|R)/g, "W")

    // Replace punctuation with random kaomoji
    .replace(/[.,!;:]/g, (mark) => {
      const shouldAddKaomoji = Math.random() < 0.5
      if (shouldAddKaomoji) {
        return `${kaomoji[Math.floor(Math.random() * kaomoji.length)]}${mark}`
      }

      const shouldAddEmoji = Math.random() < 0.5
      if (shouldAddEmoji) {
        return `${mark} ${emoji[Math.floor(Math.random() * emoji.length)]}`
      }

      return mark
    })

  const shouldDoubleFirstLetter = Math.random() < 0.25
  if (shouldDoubleFirstLetter) {
    output = `${output.charAt(0)}-${output}`
  }

  const shouldReplaceTh = Math.random() < 0.5
  if (shouldReplaceTh) {
    output = output.replace(/th/g, "d")
  }

  return output
}
