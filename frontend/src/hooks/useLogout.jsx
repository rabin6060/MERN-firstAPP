import { useUserContext } from "./useUserContext"
import { useWorkoutContext } from "./useWorkoutContext"

export const useLogout = ()=>{
    const {dispatch} = useUserContext()
    const {dispatch:workoutDispatch } = useWorkoutContext()
    const logout = ()=>{

        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        workoutDispatch({type:'SET_WORKOUTS',payload:null})
    }
    return {logout}
}