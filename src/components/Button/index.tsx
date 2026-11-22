interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  target?: '_self' | '_blank'
  onClick?: () => void
  href?: string
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  target = '_blank',
  onClick,
  href,
}: ButtonProps) => {
  const buttonStyles = {
    base: 'flex justify-center items-center w-40 border-2 p-2 rounded-full font-bold shadow-2xl shadow-black cursor-pointer',
    variant: {
      primary:
        'bg-transparent border-accent hover:bg-accent transition-colors duration-300 ease-in-out',
      secondary:
        'bg-black border border-white text-white hover:bg-white hover:text-black',
    },
    size: {
      sm: 'px-5',
      md: 'px-8',
      lg: 'px-11',
    },
    target: {
      _self: 'noopener noreferrer',
      _blank: '_blank',
    },
  }

  const buttonClass = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`

  return href ? (
    <a
      className={buttonClass}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}
