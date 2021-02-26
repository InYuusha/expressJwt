const express = require('express')
const app = express()
const routes = require('./routes/routes')

//routes
app.use('/api/user'routes)

//listen
const port  = 3000||process.env.PORT;
app.listen(port,()=>console.log(`Server is running on port ${port}`))