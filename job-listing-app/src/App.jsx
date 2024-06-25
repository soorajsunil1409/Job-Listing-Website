import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import Page404 from './pages/Page404'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/jobs" element={<JobsPage />} />
    <Route path="/jobs/:id" element={<SingleJobPage />} />
    <Route path="*" element={<Page404 />} />
  </Route>
))

const App = () => {
  return <RouterProvider router={router} />
}


export default App