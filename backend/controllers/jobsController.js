const asyncHandler = require('express-async-handler');

const Goal = require('../models/jobModel');

// @desc Get Jobs
// @route GET /api/jobs
// @access Private
const getJobs = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals);
})

// @desc Set Jobs
// @route GET /api/jobs/:id
// @access Private
const getSingleJob = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const goal = await Goal.findById(id).catch(() => {
        throw Error(`Invalid ID ${id}`);
    })

    res.status(200).json(goal);
})

// @desc Set Jobs
// @route POST /api/jobs
// @access Private
const postJobs = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400);
        throw new Error("Please send a text field")
    }

    const goal = await Goal.create(req.body)

    res.status(201).json({
        message: "Created Jobs"
    })
})

// @desc Update Job
// @route PUT /api/jobs/:id
// @access Private
const updateJobs = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Updated Job ${req.params.id}` 
    })
})

// @desc Get Jobs
// @route DELETE /api/jobs/:id
// @access Private
const deleteJobs = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Deleted Job ${req.params.id}` 
    })
})

module.exports = {
    getJobs,
    postJobs,
    updateJobs,
    deleteJobs,
    getSingleJob
}