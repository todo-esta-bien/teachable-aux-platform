import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const HomeNavbar = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">{currentUser?.name}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <button onClick={logOut}>Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeNavbar
