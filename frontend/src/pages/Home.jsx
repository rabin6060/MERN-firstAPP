import {useEffect } from "react"
import WorkoutDetail from "../components/WorkoutDetail"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const Home = () => {
    const {workouts,dispatch} = useWorkoutContext()
    useEffect(()=>{
       
        const getWorkoutsData = async ()=>{
        const response = await fetch("http://localhost:4000/api/workouts/")
        const json = await response.json()

        if (response.ok) {
           dispatch({type:'SET_WORKOUTS',payload:json})
        }
    }
        getWorkoutsData().catch((error)=>console.log(error))
    },[])
  return (
    <div className='home'>
        <div className="workout">
            {
                workouts?.map(workout=>(
                    <WorkoutDetail key={workout._id} {...workout}/>
                ))
            }
        </div>
        <WorkoutForm/>
       
    </div>
  )
}

export default Home