import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import Page404 from './pages/Page404'
import SingleJobPage, { jobLoader } from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/jobs" element={<JobsPage />} />
    <Route path="/jobs/:id" element={<SingleJobPage />} loader={jobLoader} />
    <Route path="/add-job" element={<AddJobPage />}/>
    <Route path="*" element={<Page404 />} />
  </Route>
))

const App = () => {
  return <RouterProvider router={router} />
}


export default App