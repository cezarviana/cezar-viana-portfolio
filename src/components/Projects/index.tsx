import { styles } from '../../styles/styles'
import { ProjectsSites } from '../ProjectsSites'

export const Projects = () => {
  return (
    <>
      <section
        className={`${styles.sections} bg-gray-very-dark
      `}
        id="projects"
      >
        <div className="flex items-start w-full p-10 snap-center">
          <h2 className={`${styles.titles}`}>Projects</h2>
        </div>
        <div className="w-full p-10">
          <ProjectsSites />
        </div>
      </section>
    </>
  )
}
