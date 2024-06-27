const asyncHandler = require('express-async-handler');

const Job = require('../models/jobModel');

// @desc Get Jobs
// @route GET /api/jobs
// @access Private
const getJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find()

    res.status(200).json(jobs);
})

// @desc Set Jobs
// @route GET /api/jobs/:id
// @access Private
const getSingleJob = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const job = await Job.findById(id);
    
    if (!job) {
        throw Error(`Invalid ID ${id}`);
    }

    res.status(200).json(job);
})

// @desc Set Jobs
// @route POST /api/jobs
// @access Private
const postJobs = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400);
        throw new Error("Please send a text field");
    }

    const job = await Job.create(req.body);

    res.status(201).json({
        message: "Created Jobs"
    })
})

// @desc Update Job
// @route PUT /api/jobs/:id
// @access Private
const updateJobs = asyncHandler(async (req, res) => {
    const id = req.params.id;

    const job = await Job.findById(id)

    if (!job) {
        throw Error(`Invalid ID ${id}`);
    }

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    res.status(200).json(updatedJob);
})

// @desc Get Jobs
// @route DELETE /api/jobs/:id
// @access Private
const deleteJobs = asyncHandler(async (req, res) => {
    const id = req.params.id;

    const job = await Job.findById(id)

    if (!job) {
        throw Error(`Invalid ID ${id}`);
    }

    const deletedJob = await Job.findByIdAndDelete(id)

    res.status(200).json(deletedJob);
})

module.exports = {
    getJobs,
    postJobs,
    updateJobs,
    deleteJobs,
    getSingleJob
}