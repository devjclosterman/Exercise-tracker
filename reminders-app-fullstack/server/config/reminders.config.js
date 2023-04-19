const mongoose = require('mongoose');

const db = 'reminders';

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})  .then(() => console.log(`Established connection with DB - ${db} `))
    .catch(err => console.log(err))