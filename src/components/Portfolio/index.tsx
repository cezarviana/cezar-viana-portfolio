import { styles } from '../../styles/styles'
import { PortfolioSites } from '../PortfolioSites'

export const Portfolio = () => {
  return (
    <>
      <section
        className={`${styles.sections} bg-gray-very-dark
      `}
        id="portfolio"
      >
        <div className="flex items-start w-full p-10 snap-center">
          <h2 className={`${styles.titles}`}>Portfolio</h2>
        </div>
        <div className="w-full p-10">
          <PortfolioSites />
        </div>
      </section>
    </>
  )
}
