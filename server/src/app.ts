import express, { Express } from "express";
import cors from 'cors'
import path from "path";
import morgan from 'morgan'

// API 
import apiV1 from "./api-v1/api";

const app: Express = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1', apiV1)


export default app