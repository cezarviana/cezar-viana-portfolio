import { Link } from '@tanstack/react-router'
import { styles } from '../../styles/styles'
import { MenuMobile } from '../MenuMobile'
import { ClosingTag } from '../SvgIcons'

export interface NavLink {
  name: string
  href: string
}
export const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Porfolio', href: '#porfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '#resume' },
]

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between fixed z-20 py-4 px-10 b-4 bg-navbar h-20 w-full">
        <div>
          <a
            href="#"
            className="flex justify-center items-center gap-2 text-lg text-green-light hover:text-accent-hover font-bold"
          >
            <ClosingTag />
            Cezar Viana
          </a>
        </div>
        <ul className="hidden md:flex justify-between gap-4 lg:gap-8 ">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className={`${styles.navLinks}`}
            >
              {link.name}
            </a>
          ))}
        </ul>
        <MenuMobile navLinks={navLinks} />
      </nav>
      <nav>
        <ul className="flex gap-4 md:gap-10 items-center">
          <li className="hidden lg:block">
            <Link to="/">Resume</Link>
          </li>
          <li>
            {/* Languages */}
            {/* <CartButton onClick={() => setCartIsOpen(true)} /> */}
          </li>
        </ul>
      </nav>
    </>
  )
}
