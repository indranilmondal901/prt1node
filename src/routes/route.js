const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

//db
const Task = require("../models/schema");

//Router 
const router = express.Router();
//middlewire
router.use(cors());
router.use(express.json());
router.use(bodyparser.json());

//routes

//Test Case 1 - Create a new Task
router.post("/tasks", async (req, res) => {
    const title = req.body.title;

    const addTask = new Task({ title })
    const x = await addTask.save();
    res.status(201).send({
        id: x._id,
        // data: x
    })

})

//Test Case 2 - List all tasks created
router.get("/tasks", async (req, res) => {
    const data = await Task.find();
    res.status(200).send({
        data: data
    })
})

//Test Case 3 - Get a specific task
router.get("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Task.find({ _id: id });
        // console.log(data);
        res.status(200).send({
            data: data
        })
    } catch {
        res.status(404).send({
            error: "There is no task at that id"
        })
    }
})

//Test Case 4- Delete a specific task
router.delete("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Task.deleteOne({ _id: id });

        res.status(204).send()
    } catch {
        res.status(404).send({
            error: "There is no task at that id"
        })
    }
})

//Test Case 5 - Edit the title or completion of a specific task
router.put("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const title = req.body.title;
        const is_completed = req.body.is_completed;
        await Task.findByIdAndUpdate({ _id: id }, { title: title, is_completed: is_completed });

        res.status(204).send()
    } catch {
        res.status(404).send({
            error: "There is no task at that id"
        })
    }
})


//export
module.exports = router;