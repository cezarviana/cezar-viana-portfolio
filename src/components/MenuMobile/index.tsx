import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import type { NavLink } from '../NavBar'
import { styles } from '../../styles/styles'
import { MenuBurger, MenuClose } from '../SvgIcons'

interface MenuMobileProps {
  navLinks: NavLink[]
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        className="block cursor-pointer text-white transition-colors hover:text-accent-hover md:hidden"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <MenuBurger />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-600 ease-in-out ${
          menuIsOpen
            ? 'visible bg-black/70 opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-40 block h-screen w-55 bg-navbar/80 pt-6 transition-all duration-500 ease-in-out md:hidden ${menuIsOpen ? 'translate-x-0' : '-translate-x-full'} `}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-5 text-white">
          <nav className="flex justify-end">
            <button
              type="button"
              aria-label="Close menu"
              className="flex cursor-pointer text-white transition-colors hover:text-accent-hover md:hidden"
              onClick={() => setMenuIsOpen(false)}
            >
              <MenuClose />
            </button>
          </nav>
        </header>

        <ul className="flex h-[calc(100%_-_140px)] flex-col gap-5 overflow-y-auto px-6 py-4 font-bold scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className={styles.navLinks}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}
