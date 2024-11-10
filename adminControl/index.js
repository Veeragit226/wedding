const express=require('express')
const app=express()


require('dotenv').config()
const mongoose=require('mongoose')


app.use(express.json())


mongoose.connect()