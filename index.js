import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import http from "http";
import { Server } from "socket.io";
import Users from './Sockets/Users.js'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express()
const Port = process.env.PORT || 4003

const server = http.createServer(app);


export const io = new Server(server, {
    transports: ['websocket']
})

Users()

if (process.env.NODE_ENV === 'production') {
    app.use(cors({
        origin: 'https://chat.delairis.com',
    }))
}
if(process.env.NODE_ENV === 'development')
{
    app.use(cors({
        origin: 'http://localhost:3003',
    }))
}



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))

})

server.listen(Port, () => {
    console.log('Listening on port 4003')
})