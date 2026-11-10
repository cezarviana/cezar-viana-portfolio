import { styles } from '../../styles/styles'
import edgerunnersImg from '../../assets/images/edgerunners.gif'
import gmailImg from '../../assets/social/graffiti-gmail.png'
import linkedinImg from '../../assets/social/graffiti-linkedin.png'
import githubImg from '../../assets/social/graffiti-github.png'
import cyberWallImg from '../../assets/images/cyberpunk-wall(1).jpg'

export const Contact = () => {
  interface contacts {
    title: string
    image: string
    link: string
  }

  const contacts: contacts[] = [
    {
      title: 'Email',
      image: gmailImg,
      link: 'mailto:cezar.viana@gmail.com',
    },
    {
      title: 'LinkedIn',
      image: linkedinImg,
      link: 'https://www.linkedin.com/in/cezarviana-dev/',
    },
    {
      title: 'Github',
      image: githubImg,
      link: 'https://github.com/cezarviana',
    },
  ]

  return (
    <>
      <section
        className={`${styles.sections}flex w-full h-full bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url("${cyberWallImg}")` }}
        id="contact"
      >
    <div className="w-full px-10 py-4">
  <h2 className={`${styles.titles} text-white edgerunners-color-cycle`}>
    Contact
  </h2>
</div>

        <div className="flex w-full p-6 h-[60vh]">
          <ul className="flex items-center justify-center gap-8 w-full">
            {contacts.map((contact) => (
                <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                key={contact.title}
              >
                <li
                  key={contact.title}
                  className="flex flex-col items-center justify-center w-full mb-8 overflow-hidden rounded-2xl gap-4 hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  <img
                    src={contact.image}
                    alt={contact.title}
                    className={`w-32 sm:w-40 md:w-58 object-contain`}
                  />

                  <h3 className={styles.subtitles + ' edgerunners-color-cycle'}>
                    {contact.title}
                  </h3>
                </li>
              </a>
            ))}
          </ul>
        </div>
          <div className="flex items-end justify-center w-full top-0 left-0 h-[10vh]">

            <img
              src={edgerunnersImg}
              alt="Edgerunners image"
              className="w-37 left-64 mb-4 rounded-2xl object-contain edgerunners-color-cycle"
            />
          </div>
      </section>
    </>
  )
}
