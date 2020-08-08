const Workout = require("../models/workout.js");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        console.log("Getting last workout");
        
        Workout.find({}).exec(function (err, data) {
            if (err) throw err
            console.log("sending data: ", data);
            res.json(data)
        });

    })


    // add exercise to workout
    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        const updatedExercise = req.body;

        console.log("Updating a Workout: ", updatedExercise);
        Workout.findByIdAndUpdate({
                _id: id
            }, {
                $push: {
                    exercises: updatedExercise
                }
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err))
    })

    // create a workout
    app.post("/api/workouts", (req, res) => {
        console.log(req.body);
        const workout = req.body;
        console.log("Inserting Workout: ", workout);
        Workout.create(workout).
        then(data => {
                res.json(data)
            })
            .catch(err => res.json(err))
    })

    // get workout in range
    app.get("/api/workouts/range", (req, res) => {
        console.log("Getting all Exercises from Range");
        Workout.find({}).then(data => {
            console.log("Sending from API RANGE: ", data);
            res.json(data)
        }).catch(err => res.json(err))
    })
}