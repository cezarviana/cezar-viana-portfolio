import { MatrixAnimation } from '../../utils/matrix-animation'
import { styles } from '../../styles/styles'
import htmlImg from '../../assets/tech/html.png'
import cssImg from '../../assets/tech/css.png'
import javascriptImg from '../../assets/tech/javascript.png'
import reactImg from '../../assets/tech/reactjs.png'
import tailwindImg from '../../assets/tech/tailwind.png'
import gitImg from '../../assets/tech/git.png'

export const Skills = () => {
  
    interface Skill {
    title: string
    description: string
    image: string
    background?: string
  }

  const skills: Skill[] = [
    {
        title: 'HTML',
        description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
        image: htmlImg,
    },
    {
        title: 'CSS',
        description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
        image: cssImg,
    },
    {
        title: 'JavaScript',
        description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        image: javascriptImg,
    },
    {
        title: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        image: reactImg,
    },
    {
        title: 'Tailwind CSS',
        description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
        image: tailwindImg,
    },
    {
        title: 'Git',
        description: 'Git is a distributed version control system for tracking changes in source code during software development.',
        image: gitImg,
    },
  ]

  return (
    <>
      <section
        className={`${styles.sections} flex items-center justify-center relative isolate overflow-hidden
      `}
        id="skills"
      >
            <MatrixAnimation />
        <div className="flex items-start w-full p-10 snap-center">
          <h2 className={`${styles.titles} z-50`}>Skills</h2>
        </div>
        <div className="w-full p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 w-full">

                    {skills.map((skill) => (
                      <li
                        key={skill.title}
                        className="bg-gray-very-dark/80 group relative border border-accent flex flex-col items-center justify-center w-70 h-50 mb-8 overflow-hidden rounded-2xl shadow-2xl shadow-black gap-4"
                      >
                        <img
                          src={skill.image}
                          alt={skill.title}
                          className=" w-25 object-contain"
                        />
                          <h3 className={styles.subtitles}>{skill.title}</h3>
            
                        <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/85 p-4 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className={styles.subtitles}>{skill.title}</h3>
                          <p className="line-clamp-5">{skill.description}</p>
                          <div className="flex justify-center items-center">

                          </div>
                        </div>
                      </li>
                    ))}

          </ul>
        </div>
      </section>
    </>
  )
}
