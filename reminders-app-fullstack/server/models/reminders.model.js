const mongoose = require('mongoose');

const RemindersSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "Name is required"],
        min: [5, "Min name length is 5 chars"]
    },
    exercise: {
        type: String,
        required: [true, 'Exercise name is required']
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    duration: {
        type: String,
        required: [true, "Duration length is required"]
    },
    date : {
        type: Date
    }
});

const Reminders = mongoose.model('Reminders', RemindersSchema );

module.exports = Reminders;