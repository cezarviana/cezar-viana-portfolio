import { styles } from '../../styles/styles'
import { ProjectsDone } from './projects'
import neuromancerImg from '../../assets/images/neuromancer.gif'
import neuromancerVisorImg from '../../assets/images/neuromancer-visor.gif'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'

export const Projects = () => {
  const [hasEntered, setHasEntered] = useState(false)
  const [showProjects, setShowProjects] = useState(true)
  const [animationKey, setAnimationKey] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInViewRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInViewRef.current) {
        isInViewRef.current = true
        setHasEntered(true)
        setShowProjects(false)
        setAnimationKey((key) => key + 1)
      } else if (!entry.isIntersecting) {
        isInViewRef.current = false
      }
    })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className={`${styles.sections} ${styles.neuromancerBg}`}
        id="projects"
      >
        <div className="flex items-center justify-start w-full p-10 snap-center">
          <h2 className={`${styles.titles} text-yellow-bright`}>Projects</h2>
        </div>
        <div className="relative flex items-start justify-center w-full min-h-screen px-10 py-6">
          {hasEntered && !showProjects && (
            <img
              key={animationKey}
              src={neuromancerImg}
              alt="Neuromancer style animation with a girl with cyberpunk visor"
              onAnimationEnd={() => setShowProjects(true)}
              className="absolute z-50 w-120 rounded-2xl object-contain neuromancer-intro "
            />
          )}

          {showProjects && (
            <div className="w-full px-10">
              <ul className="flex flex-wrap items-center justify-around gap-6 w-full">
                {ProjectsDone.map((site) => (
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
                        <Button variant="primary" size="md" href={site.link}>
                          Visit Site {`>`}{' '}
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-end justify-end w-full h-full py-4">
          <img
            src={neuromancerVisorImg}
            alt="Neuromancer"
            className="w-20 rounded-2xl object-contain m-4"
          />
        </div>
      </section>
    </>
  )
}
