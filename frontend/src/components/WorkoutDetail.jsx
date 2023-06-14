import { useWorkoutContext } from "../hooks/useWorkoutContext"
import {formatDistance, formatDistanceToNow} from "date-fns"

const WorkoutDetail = ({title,load,reps,_id,createdAt}) => {
  const {dispatch} = useWorkoutContext()
  const handleDelete= async ()=>{
    const response = await fetch("http://localhost:4000/api/workouts/"+ _id,{
      method: 'DELETE'
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({type:'DELETE_WORKOUT',payload:json})
    }
    
  }
  return (
    <div className="workout-details">
        <h4>{title}</h4>
        <p><strong>Load (kg) {" "}</strong>{load}</p>
        <p><strong>Reps: </strong>{reps}</p>
        <p>{formatDistanceToNow(new Date(createdAt),{addSuffix:true})}</p>
        <span className="material-symbols-outlined" onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default WorkoutDetail