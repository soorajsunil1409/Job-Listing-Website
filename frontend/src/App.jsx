import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import Page404 from './pages/Page404'
import SingleJobPage, { jobLoader } from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

import { toast } from 'react-toastify'

const App = () => {
  const deleteJob = async (jobId) => {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    })

    if (res.status == 200)
      toast.success("Job deleted successfully");
    else 
      toast.error("An Error occured while deleting job");

    return;
  }

  const editJob = async (job, id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    })

    if (res.status == 200)
      toast.success("Updated job successfully");
    else 
      toast.error("An Error occured while updating job");

    return;
  }

  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })

    if (res.status == 201)
      toast.success("Job added successfully");
    else 
      toast.error("An Error occured while adding job");

    return;
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/jobs/:id" element={<SingleJobPage deleteJobFunction={deleteJob} />} loader={jobLoader} />
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobFunction={addJob} />} />
      <Route path="/edit-job/:id" element={<EditJobPage editJobFunction={editJob} />} loader={jobLoader} />
      <Route path="*" element={<Page404 />} />
    </Route>
  ))

  return <RouterProvider router={router} />
}


export default App