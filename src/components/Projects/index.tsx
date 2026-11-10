import { styles } from '../../styles/styles'
import { ProjectsSites } from '../ProjectsSites'
import neuromancerImg from '../../assets/images/neuromancer-visor.gif'

export const Projects = () => {
  return (
    <>
      <section
        className={`${styles.sections} ${styles.neuromancerBg}`}
        id="projects"
      >
        <div className="flex items-center justify-start w-full p-10 snap-center">
          <h2 className={`${styles.titles} text-yellow-bright`}>Projects</h2>
        </div>
        <div className="w-full px-10">
          <ProjectsSites />
        </div>
        <div className="flex items-center justify-end w-full px-10 py-6">
          <img
            src={neuromancerImg}
            alt="Neuromancer gif"
            className="w-20 rounded-2xl object-contain"
          />
          
        </div>
      </section>
    </>
  )
}
