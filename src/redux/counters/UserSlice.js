import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:'',
    sockets: [],
    users: [],
    socket:'',
    chats:[]
}

export const userSlice = createSlice({
  name: 'userslice',
  initialState,
  reducers: {
    saveUsername: (state,action) => {

      state.username = action.payload

    },
    saveUsers: (state, action) => {
        state.users = action.payload

    },
    saveSocket: (state, action) => {
          state.socket = action.payload
    },
    saveChats: (state, action) => {
      
        state.chats = action.payload
    }
  },
})

export const { saveUsers,saveSocket,saveUsername } = userSlice.actions

export default userSlice.reducer