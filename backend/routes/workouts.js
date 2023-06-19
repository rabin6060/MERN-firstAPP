const express = require('express')
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 

} = require('../controllers/workoutcontroller')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
router.use(requireAuth)
// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)



module.exports = router