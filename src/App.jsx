import React from 'react'
import { AppRouter } from './Routers/AppRouter'
import { NavBar } from './Components/NavBar'
import './firebase'

export const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  )
}
