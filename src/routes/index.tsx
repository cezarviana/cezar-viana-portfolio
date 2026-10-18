import { Hero } from '#/components/Hero'
import { Navbar } from '../components/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}
