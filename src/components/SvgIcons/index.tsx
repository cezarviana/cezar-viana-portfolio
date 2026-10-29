export const MenuBurger = () => {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 12"
        className="h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0" width="20" height="2" rx="1" />
        <rect y="5" width="20" height="2" rx="1" />
        <rect y="10" width="20" height="2" rx="1" />
      </svg>
    </>
  )
}

export const MenuClose = () => {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 18 18"
        className="h-6 w-6 stroke-current"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L16 16M16 2L2 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  )
}

export const ClosingTag = () => {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 stroke-current"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5L3 12L8 19M16 5L21 12L16 19M14 4L10 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}
