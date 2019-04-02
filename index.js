// i need express
const express = require('express');

// i need express to have its own port
const PORT = 3000;

// Require routers
const thinkpadRouter = require('./routes/thinkpad');

// i need to create an app with express
const app = express();

// i need to connect a router
app.use('/thinkpads', thinkpadRouter);

// i need to express to listen on that port

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})