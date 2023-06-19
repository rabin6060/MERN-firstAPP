import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const useUserContext=()=>{
    const context = useContext(UserContext)
    if (!context) {
        throw Error('useUserContext only can be used inside workoutcontextProvider ')
    }
    return context
}   