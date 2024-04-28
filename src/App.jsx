import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import { RouterProvider } from 'react-router-dom'
import Github, { githubdata } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


// for testing change

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:userid' element={<User/>}/>
        <Route 
        loader={githubdata}
        path='/github'
         element={<Github/>}
         />
  
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
