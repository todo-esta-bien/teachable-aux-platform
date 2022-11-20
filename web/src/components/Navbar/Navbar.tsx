interface INavbar {
  courseName: string
}

const Navbar = ({ courseName }: INavbar) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">{courseName}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Escuela de Todo Está Bien</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
