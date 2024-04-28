import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// // const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/home',
//         element:<Home/>
//        }, {
//         path:'/about',
//         element:<About/>
//       },{
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])
//for testin git 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <App/>
  </React.StrictMode>,
)
