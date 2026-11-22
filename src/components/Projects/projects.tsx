
import GenbukanLogo from '../../assets/sites/genbukan-mon-kanji.png'
import StudioGhibliLogo from '../../assets/sites/studio-ghibli.png'
import SistemasRPGLogo from '../../assets/sites/sistemas-rpg.png'
import JogosParalimpicosLogo from '../../assets/sites/jogos-paralimpicos.png'
import BatlifeLogo from '../../assets/sites/batlife.png'


  interface Projects {
    title: string
    description: string
    link: string
    image: string
    background?: string
  }

  export const ProjectsDone: Projects[] = [
    {
      title: 'Genbukan Iaido',
      description:
        'Genbukan is a real japanese martial arts organization of Iaido (traditional Japanese swordsmanship) in Brazil. News, research, articles and more.',
      link: 'https://genbukanbrasil.vercel.app/',
      image: GenbukanLogo,
    },
    {
      title: 'Studio Ghibli',
      description:
        'This project is a React + TypeScript application that consumes the public Studio Ghibli API to display a modern and interactive catalog of films.',
      link: 'https://cezarviana.github.io/studio-ghibli-api/',
      image: StudioGhibliLogo,
      background: 'linear-gradient(to bottom, rgba(27, 160, 208, 1) 20%, rgba(133, 204, 50, 1) 100%)',
    },
    {
      title: 'Sistemas de RPG',
      description:
        'Sistemas de RPG é um projeto front-end que funciona como uma enciclopédia interativa de sistemas de Role-Playing Game (RPG) de mesa.',
      link: 'https://cezarviana.github.io/sistemas-de-rpg/',
      image: SistemasRPGLogo,
      background: 'hsl(28, 33%, 61%)',
    },
    {
      title: 'Atletas Paralímpicos',
      description:
        'Este site tem como objetivo criar um diretório de atletas paralímpicos brasileiros, permitindo a pesquisa por nome, modalidade, local de nascimento, biografia, conquistas e tags.',
      link: 'https://atletas-paralimpicos-phi.vercel.app/',
      image: JogosParalimpicosLogo,
      background: 'hsl(212, 100%, 36%)',
    },
    {
      title: 'Batlife',
      description:
        "Batlife is an interactive 2D arcade-style game built using block-based programming in Scratch, for Harvard's CS50 (Introduction to Computer Science) Problem Set 0. ",
      link: 'https://scratch.mit.edu/projects/1382953657/',
      image: BatlifeLogo,
      background: 'hsl(191, 100%, 91%)',
    },
  ]
