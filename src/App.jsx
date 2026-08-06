import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import ViewNotes from './components/ViewNotes';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },

    {
      path: "/notes",
      element:
      <div>
        <Navbar />
        <Notes />
      </div>
    },

    {
      path: "/notes/:id",
      element:
      <div>
        <Navbar />
        <ViewNotes />
      </div>
    },
  ]
);

function App() {

  return (
    <div className='flex justify-center items-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
