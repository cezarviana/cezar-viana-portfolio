import { styles } from '../../styles/styles'
import { ProjectsSites } from '../ProjectsSites'
import neuromancerImg from '../../assets/images/neuromancer.gif'
import neuromancerVisorImg from '../../assets/images/neuromancer-visor.gif'
import { useEffect, useRef, useState } from 'react'

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
              className="absolute z-50 w-200 rounded-2xl object-contain neuromancer-intro "
            />
          )}

          {showProjects && (
            <div className="w-full px-10">
              <ProjectsSites />
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
