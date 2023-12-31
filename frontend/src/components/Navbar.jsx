import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useUserContext } from "../hooks/useUserContext"
const Navbar = () => {
  const {logout} = useLogout()
  const {user} = useUserContext()
  const handleClick = ()=>{
    logout()
  }
  return (
    <header>
        <div className="container">
            <Link to='/'>
                <h1>Working buddy</h1>
            </Link>
            <nav>
              {user && (
                <div>
                  <span>{user.email}</span>
                  <button onClick={handleClick}>logout</button>
                </div>
              )}
              {
                !user && 
                (
                  <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>SignUp</Link>
                  </div>
               
                )
              }
            
            </nav>
        </div>
    </header>
  )
}

export default Navbar