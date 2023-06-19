import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {isLoading,error,login} = useLogin()
    const handleSubmit =async (e)=>{
        e.preventDefault()
        await login(email,password)
        
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login Form</h3>
            <label >Email: </label>
            <input type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />
            <label>Password</label>
            <input type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />
            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SignUp