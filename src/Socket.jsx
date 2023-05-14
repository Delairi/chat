import {io} from 'socket.io-client';

const url = import.meta.env.MODE == 'development' ? import.meta.env.VITE_WS_URL_DEV:import.meta.env.VITE_WS_URL_PROD

export const socket = io(url,{
    transports: ['websocket'],
    upgrade: false,  
    port: 4003,
})