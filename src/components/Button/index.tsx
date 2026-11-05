interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
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
  }

  const buttonClass = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`;

  return (
    <>
      <button className={buttonClass} onClick={onClick}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </button>
    </>
  )
}
