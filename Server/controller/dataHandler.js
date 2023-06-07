const dataModel = require('../models/data')
const errorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')


// @desc    Get all data
// @route   GET /api/dashboard
// @access  Public

const getData = asyncHandler(async (req, res, next) => {
    const data = await dataModel.find()
    res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: data
    })
})


// export the functions
module.exports = {
    getData
}

