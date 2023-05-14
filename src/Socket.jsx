import {io} from 'socket.io-client';

export const socket = io("ws://localhost:4003",{
    transports: ['websocket'],
    upgrade: false,  
    port: 4003,
})