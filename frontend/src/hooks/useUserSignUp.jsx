import { useState } from "react";
import { useUserContext } from "./useUserContext";



export const useUserSignUp = ()=>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useUserContext()

    const signup = async (email,password)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch("http://localhost:4000/api/user/signup",{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email,password})
        })
        const json = await response.json()
    
        if (!response.ok) {
           setIsLoading(false)
           setError(json.error) 
        }
        if (response.ok) {
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:"LOGIN",payload:json})

            setIsLoading(false)
    
        }
    }
    
    

    return {isLoading,error,signup}
}