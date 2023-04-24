const express = require('express');
require('dotenv').config();
const app = express();


app.listen(4000, () => console.log(`the application is running at port ${process.env.PORT}`));