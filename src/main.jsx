import ReactDOM from 'react-dom/client'
import "./css/index.css"
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router} />
)
