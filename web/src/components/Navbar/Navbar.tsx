import { Bars3Icon } from '@heroicons/react/24/solid'

interface INavbar {
  courseName: string
}

const Navbar = ({ courseName }: INavbar) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <label
          htmlFor="lessons-drawer"
          className="btn-secondary drawer-button btn lg:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </label>
        <a className="btn-ghost btn text-xl normal-case">{courseName}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 max-md:hidden">
          <li>
            <a>Escuela de Todo Está Bien</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
