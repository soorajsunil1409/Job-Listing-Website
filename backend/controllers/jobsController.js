// @desc Get Jobs
// @route GET /api/jobs
// @access Private
const getJobs = (req, res) => {
    res.status(200).json({
        message: "Get Jobs" 
    });
}

// @desc Set Jobs
// @route POST /api/jobs
// @access Private
const postJobs = (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please send a text field")
    }

    res.status(201).json({
        message: "Created Jobs"
    })
}

// @desc Update Job
// @route PUT /api/jobs/:id
// @access Private
const updateJobs = (req, res) => {
    res.status(200).json({
        message: `Updated Job ${req.params.id}` 
    })
}

// @desc Get Jobs
// @route DELETE /api/jobs/:id
// @access Private
const deleteJobs = (req, res) => {
    res.status(200).json({
        message: `Deleted Job ${req.params.id}` 
    })
}

module.exports = {
    getJobs,
    postJobs,
    updateJobs,
    deleteJobs
}