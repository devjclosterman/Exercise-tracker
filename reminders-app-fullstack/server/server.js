const express = require('express');
const app = express();
const cors = require('cors');
// const mongoose = require('mongoose')

require('./config/reminders.config');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const Routes = require('./routes/reminders.routes');

Routes(app);
// const port = process.env.PORT

const port = 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));

