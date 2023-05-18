import { io } from "../index.js";
import UsersActive from "../services/UsersActive.js";
import FindUser from "../utils/FindUser.js";
import RandomImg from "../utils/RandomImg.js";
const Users = () => {



    io.on('connection', (socket) => {

        UsersActive.sockets.push(socket.id)

        io.emit('get_users_active', UsersActive.users)


        socket.on('post_user', (data) => {

            const exist = FindUser(UsersActive.users, data, 'username', true)
            if (!exist) {
                UsersActive.users.push({
                    id: socket.id,
                    username: data,
                    img:RandomImg(),
                    chats: []
                })
                socket.emit('post_user', true)
                io.emit('get_users_active', UsersActive.users)
            }
            if (exist) socket.emit('post_user', false)
        })


        socket.on('start_chat', (to) => {

            const searchUser = UsersActive.users.find((user) => user.id === socket.id)
            const searchTo = UsersActive.users.find((user) => user.username === to)

            if (searchUser && searchTo) {
                if (!searchUser.chat) searchUser.chat = []
                if (!searchTo.chat) searchTo.chat = []

                searchUser.chat.push({
                    main: socket.id,
                    from: searchTo.id,
                    users: [socket.id, searchTo.id],
                    message: searchUser.username + ' Adrian entered the chat',
                    timestamp: Date.now(),
                })

                let myChats = searchUser.chat.map(chat => {
                    const user = UsersActive.users.find((user) => user.id === socket.id)
                    if (user) return {username:user.username,img:user.img}
                })

                socket.emit('chat_users', {
                    users: myChats,
                })

                // mensajes del respetivo chat
                const filter_chat_main = searchUser.chat.filter(chat => ((chat.users).includes(socket.id) && (chat.users).includes(searchTo.id)))
                const filter_chat_from = searchTo.chat.filter(chat => ((chat.users).includes(socket.id) && (chat.users).includes(searchTo.id)))
                const chat = ((filter_chat_from).concat(filter_chat_main)).sort((a, b) => a.timestamp - b.timestamp)
                io.to([searchTo.id, searchUser.id]).emit('messages', {
                    chat: chat
                })


            }


        })

        socket.on('send_message', (to, message) => {

            const searchTo = UsersActive.users.find((user) => user.username === to)
            const searchUser = UsersActive.users.find((user) => user.id === socket.id)

            if (!searchTo.chat) searchTo.chat = []

            searchTo.chat.push({
                main: searchTo.id,
                from: socket.id,
                users: [socket.id, searchTo.id],
                message,
                timestamp: Date.now(),
            })

            // mensajes del respetivo chat
            const filter_chat_main = searchUser.chat.filter(chat => ((chat.users).includes(socket.id) && (chat.users).includes(searchTo.id)))
            const filter_chat_from = searchTo.chat.filter(chat => ((chat.users).includes(socket.id) && (chat.users).includes(searchTo.id)))
            const chat = ((filter_chat_from).concat(filter_chat_main)).sort((a, b) => a.timestamp - b.timestamp)
            io.to([searchTo.id, searchUser.id]).emit('messages', {
                chat: chat
            })

        })


        socket.on('my_messages', (id, new_user_id) => {

            const searchUser = FindUser(UsersActive.users, id, 'id', false)
            const searchTo = FindUser(UsersActive.users, new_user_id, 'username', false)
            if ((searchUser.chats).includes(searchTo.username)) {
                io.emit('my_messages', searchUser.chats)
            }else{
                searchUser.chats.push(searchTo.username)
                io.emit('my_messages', searchUser.chats)
            }

        })

        socket.on('disconnect', () => {

            UsersActive.sockets = UsersActive.sockets.filter((socketId) => socketId !== socket.id)
            UsersActive.users = UsersActive.users.filter((user) => user.id !== socket.id)
            io.emit('get_users_active', UsersActive.users)
        })
    })

}


export default Users