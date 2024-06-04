import { Button } from "@/components/Button"
import { Link } from "next-view-transitions"

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-16">
      <div className="w-64" />
      <Link href="/" className="flex-1 text-center text-2xl font-light">
        djobbo
      </Link>
      <nav className="flex w-64 items-center justify-end space-x-8">
        <Link href="/resume">resume</Link>
        <Button href="/">get in touch</Button>
      </nav>
    </header>
  )
}
