
import { styles } from '../../styles/styles'
import { UnicornOrigami } from '../UnicornOrigami'


export const About = () => {
  
  return (
    <>
      <section
        className={`${styles.sections} ${styles.bladeRunnerBg}`}
        id="about"
      >
        <div className="flex items-start w-full p-10 snap-center">
          <h2 className={`${styles.titles}`}>
            About
          </h2>
        </div>
        <div className="flex flex-col gap-4 w-[90vw] md:w-[70vw] p-10 md:text-[18px] bg-gray-very-dark/70 rounded-2xl">
          <div className="flex flex-col gap-4 justify-center items-center indent-6 md:indent-8">
            <p>
              Hi! I am{' '}
              <span className="text-green-light font-bold">Cezar Viana</span>.
            </p>
            <p>
              I am a{' '}
              <span className="text-green-light font-bold">
                Front End Developer
              </span>
              .
            </p>
            <p>
              I have always been passionate and curious about technology. As
              this passion aligned with new opportunities, I decided to
              transition my career into software development and programming. I
              am really enjoying this new career path, and every step along the
              way has been deeply rewarding!
            </p>

            <p>
              I am fully dedicated to the web development field and have built
              projects using front-end technologies such as
              <span className="text-green-light font-bold">
                {` `}HTML, CSS, Tailwind, JavaScript, React and Clean Code
                practices
              </span>
              . My goal is to continuously expand my knowledge and apply it to
              create effective solutions and improvements, contributing
              positively to my team and the company while growing as a
              developer.
            </p>
            <p>
              I am looking to join a company that values innovation,
              collaboration, and continuous learning and am confident that my
              enthusiasm and drive will help me succeed in any role that
              leverages my passion for technology.
            </p>
            <p>
              I love watching movies, playing games, reading books and comics
              and practicing martial arts.{' '}
            </p>
            <p>🎥👾🎮📖📚🙇</p>
          </div>
        </div>
        <div className="flex items-end justify-center w-full snap-center">
          <UnicornOrigami />
        </div>
      </section>
    </>
  )
}
