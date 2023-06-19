import { useState } from "react"
import { useUserSignUp } from "../hooks/useUserSignUp"


const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {isLoading,error,signup} = useUserSignUp()
    const handleSubmit =async (e)=>{
        e.preventDefault()
        await signup(email,password)
        
    }
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign-Up Form</h3>
            <label >Email: </label>
            <input type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />
            <label>Password</label>
            <input type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />
            <button disabled={isLoading}>signup</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SignUp