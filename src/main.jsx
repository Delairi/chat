import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import In from './pages/In'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const routes = createBrowserRouter([
  {
    path: '/',
    element:<In/>
  },
  {
    path: '/chat/:id',
    element:<Home/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={routes}/>
  </Provider>
)
