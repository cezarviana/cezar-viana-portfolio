import { styles } from '../../styles/styles';

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between fixed z-20 py-4 px-10 b-4 bg-navbar h-20 w-full">
        <div>
          <a href="#" className="text-lg text-accent font-bold">Cezar Viana</a>
        </div>
        <ul className="flex justify-between gap-4 font-bold">
          <li>
            <a href="#about" className={`${styles.navbarLink}`}>About</a>
          </li>
          <li>
            <a href="#contact" className={`${styles.navbarLink}`}>Contact</a>
          </li>
          <li>
            <a href="#resume" className={`${styles.navbarLink}`}>Resume</a>
          </li>
          <li>
            <a href="#language" className={`${styles.navbarLink}`}>Language</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
