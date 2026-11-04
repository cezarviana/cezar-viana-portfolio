import { About } from '#/components/About'
import { Hero } from '#/components/Hero'
import { Portfolio } from '#/components/Portfolio'
import { Navbar } from '#/components/NavBar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </>
  )
}
