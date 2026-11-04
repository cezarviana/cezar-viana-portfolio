import { styles } from '../../styles/styles'
import GenbukanLogo from '../../assets/sites/genbukan-mon-kanji.png'
import StudioGhibliLogo from '../../assets/sites/studio-ghibli.png'
import SistemasRPGLogo from '../../assets/sites/sistemas-rpg.png'
import JogosParalimpicosLogo from '../../assets/sites/jogos-paralimpicos.png'
import BatlifeLogo from '../../assets/sites/batlife.png'

export const ProjectsSites = () => {
  interface Site {
    title: string
    description: string
    link: string
    image: string
    background?: string
  }

  const sites: Site[] = [
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

  return (
    <>
      <ul className="flex flex-wrap items-center justify-around gap-6 w-full">
        {sites.map((site) => (
          <li
            key={site.link}
            className="bg-black group relative flex flex-col w-100 h-60 mb-8 overflow-hidden rounded-2xl shadow-2xl shadow-black"
            style={{ background: site.background }}
          >
            <img
              src={site.image}
              alt={site.title}
              className="h-full w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 p-2"
            />

            <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/85 p-6 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className={styles.subtitles}>{site.title}</h3>
              <p className="line-clamp-3">{site.description}</p>
              <div className="flex justify-center items-center">
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-40 border-accent border-2 p-2 rounded-full font-bold hover:bg-accent transition-colors duration-300 ease-in-out shadow-2xl shadow-black"
                >
                  {`Visit Website >`}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
