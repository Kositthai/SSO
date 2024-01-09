import '../pages/app.css'
import {Link} from 'react-router-dom'
import avatar from '../assets/profile_image.jpg'

interface NavbarProps {
  user: any
}

const Navbar: React.FC<NavbarProps> = ({user}) => {
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
  }

  console.log({user})

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to={'/'}>
          Vipavee App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={
                user && user.photos && user.photos.length > 0
                  ? user.photos[0].value
                  : avatar
              }
              alt=""
              className="avatar"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement
                target.src = avatar
              }}
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to={'/login'}>Login</Link>
      )}
    </div>
  )
}

export default Navbar
