import htmlImg from '../../assets/tech/html.png'
import cssImg from '../../assets/tech/css.png'
import javascriptImg from '../../assets/tech/javascript.png'
import reactImg from '../../assets/tech/reactjs.png'
import tailwindImg from '../../assets/tech/tailwind.png'
import gitImg from '../../assets/tech/git.png'

interface Skill {
  title: string
  description: string
  image: string
  background?: string
}

export const skillsLearned: Skill[] = [
  {
    title: 'HTML',
    description:
      'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
    image: htmlImg,
  },
  {
    title: 'CSS',
    description:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
    image: cssImg,
  },
  {
    title: 'JavaScript',
    description:
      'JavaScript is a programming language that conforms to the ECMAScript specification.',
    image: javascriptImg,
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    image: reactImg,
  },
  {
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    image: tailwindImg,
  },
  {
    title: 'Git',
    description:
      'Git is a distributed version control system for tracking changes in source code during software development.',
    image: gitImg,
  },
]
