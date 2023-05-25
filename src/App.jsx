import React from 'react'
import { AppRouter } from './Routers/AppRouter'
import { NavBar } from './Components/NavBar'

export const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  )
}
