const express = require('express')
const router = express.Router()
const {
    getJobs,
    postJobs,
    updateJobs,
    deleteJobs,
    getSingleJob
} = require('../controllers/jobsController')

router.route('/').post(postJobs).get(getJobs);
router.route('/:id').delete(deleteJobs).put(updateJobs).get(getSingleJob);

module.exports = router