const express = require('express')
const router = express.Router()
const {
    getJobs,
    postJobs,
    updateJobs,
    deleteJobs
} = require('../controllers/jobsController')

router.route('/').post(postJobs).get(getJobs);
router.route('/:id').delete(deleteJobs).put(updateJobs);

module.exports = router