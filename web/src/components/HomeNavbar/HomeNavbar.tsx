import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const HomeNavbar = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button className="btn-ghost btn text-xl normal-case">
          <Link to={routes.home()}>{currentUser?.name}</Link>
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <button>
              <Link to={routes.home()}>Inicio</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to={routes.students()}>Estudiantes</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to={routes.teachableCourses()}>Cursos</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to={routes.studentsOnTeachableCourses()}>Tokens</Link>
            </button>
          </li>
          <li>
            <button onClick={logOut}>Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeNavbar
