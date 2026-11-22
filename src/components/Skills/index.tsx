import { MatrixAnimation } from '#/utils/matrix-animation'
import { styles } from '../../styles/styles'
import { motionListVariants, yMotionItemVariants } from '#/utils/motion-variants'
import { motion } from 'motion/react'
import { skillsLearned } from './skills'

export const Skills = () => {

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
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [1920px]:grid-cols-6 place-items-center gap-6 w-full"
            variants={motionListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {skillsLearned.map((skill) => (
              <motion.li
                key={skill.title}
                variants={yMotionItemVariants}
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
                  <div className="flex justify-center items-center"></div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  )
}
