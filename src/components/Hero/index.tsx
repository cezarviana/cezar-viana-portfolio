import Typewriter from 'typewriter-effect'
import { MatrixAnimation } from '../../utils/matrix-animation'
import { Button } from '../Button'

export const Hero = () => {
  return (
    <section className="flex items-center justify-center relative isolate h-screen overflow-hidden">
      <MatrixAnimation />

      <div className="flex flex-col relative z-10 gap-6 lg:gap-24 m-4 lg:mx-14 p-6 lg:p-12 w-[80vw] lg:w-[70vw] lg:max-w-250 min-h-71 bg-background/60 shadow-lg rounded-2xl">
        <h1 className="text-3xl lg:text-6xl font-bold h-20 shrink-0">
          <Typewriter
            options={{
              strings: [
                "Hello, I'm <span class='text-accent'>Cezar Viana</span>.",
                "Olá, eu sou <span class='text-accent'>Cezar Viana</span>.",
                "<span class='text-2xl lg:text-5xl'>こんにちは、<span class='text-accent'>シーザー・ヴィアナ</span>です。</span>",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
            }}
          />
        </h1>
        <h2 className="text-2xl lg:text-4xl">
          <Typewriter
            options={{
              strings: [
                'Junior Frontend Developer.',
                'Desenvolvedor Frontend Júnior.',
                'ジュニアフロントエンド開発者。',
              ],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
            }}
          />
        </h2>
        <div className="flex gap-4 lg:gap-10 items-center justify-center bottom-0">
          <Button variant="primary" size="md" href="#resume">
            Resume
          </Button>
          <Button variant="primary" size="md" href="#projects">
            Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
