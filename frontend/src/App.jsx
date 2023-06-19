import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Navbar from "./components/Navbar"
import { useUserContext } from "./hooks/useUserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  
  const {user} = useUserContext()
  return (
   
   <div>
    <Router>
      <div className="pages">
        <Navbar/>
        <Routes>
          <Route path="/" element={user? <Home/> : <Navigate to="/login"/>} />
          <Route path="/login" element={!user? <Login/> : <Navigate to="/" />}/>
          <Route path="/signup"element={!user? <SignUp/> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
   </div>
  )
}

export default App
