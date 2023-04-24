const mongoose = require("mongoose");

//schema
const taskSchema = mongoose.Schema({
    title: {
        type: String
    },
    is_completed: {
        type: Boolean,
        default: false
    }
})
//model
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;