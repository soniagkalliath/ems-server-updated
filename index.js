require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')
const app = express()

const PORT = process.env.PORT || 4000
app.use(cors())
app.use(express.json())
app.use(router)
app.get('/',(req,res)=>{
res.send('Server started')
})
app.listen(PORT,()=>{
    console.log(`ems server start at port no ${PORT}`);
})