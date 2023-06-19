import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext=()=>{
    const context = useContext(WorkoutContext)
    if (!context) {
        throw Error('useWorkoutContext only can be used inside workoutcontextProvider ')
    }
    return context
}   

