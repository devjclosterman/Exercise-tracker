const Reminders = require("../models/reminders.model.js");

module.exports = {

    index: ( req, res ) => {
        Reminders.find()
            .then(data => res.json({ 
                results: data }))
            .catch(err => res.json('Error: ' + err))
    },

    findOne: (req, res) => {
        Reminders.findById({ _id: req.params._id })
            .then(oneReminder => res.json( oneReminder ))
            .catch(err => res.json( err ))
    },

    create: ( req, res ) => {
        Reminders.create( req.body )
            .then(data => res.json( data ))
            .catch(err => res.json('Error: ' + err))
    },

    update: ( req, res ) => {
        Reminders.findOneAndUpdate({_id: req.params._id}, req.body, { new: true, runValidators: true} )
            .then(data => res.json({ data }))
            .catch(err => res.json('Error: ' + err))
    },

    delete: (req , res ) => {
        Reminders.deleteOne({_id: req.params._id})
            .then(result => res.json(result))
            .catch(err => console.log(err))
    }
}