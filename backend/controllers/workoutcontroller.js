const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
  const user_Id = req.user._id
  const workouts = await Workout.find({user_Id}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  const emptyFields = []

  if(!title){
    emptyFields.push('title')
  }
  if(!load){
    emptyFields.push('load')
  }
  if(!reps){
    emptyFields.push('reps')
  }
  if (emptyFields.length>0) {
     return res.status(400).json({error: 'please fill up the all section',emptyFields})
  }
  // add to the database
  try {
    const user_Id = req.user._id
    const workout = await Workout.create({ title, load, reps ,user_Id})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}



module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
 
}