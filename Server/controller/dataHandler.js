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



// @desc    Filter data by year
// @route   GET /api/dashboard/year/:year
// @access  Public

const yearFilter = asyncHandler(async (req, res, next) => {
    const { year } = req.params;
    if (year.length !== 4) return next(new errorResponse("Invalid Year", 400));

    const data = await dataModel.find({
        $or: [
            { start_year: year },
            { end_year: year },
            { published: { $regex: year, $options: "i" } },
            { added: { $regex: year, $options: "i" } },
        ],
    });
    if (data.length === 0) return next(new errorResponse("No Data Found", 404));
    res.status(200).json({
        success: true,
        message: `Filtered by year ${year}`,
        data: data,
    });
});



// @desc   Filter data by topic
// @route   GET /api/dashboard/topic/:topic
// @access  Public

const topicFilter = asyncHandler(async (req, res, next) => {
    const { topic } = req.params;

    const data = await dataModel.find({
        topic: { $regex: topic, $options: "i" },
    });

    if (data.length === 0) return next(new errorResponse("No Data Found", 404));

    res.status(200).json({
        success: true,
        message: `Filtered by topic ${topic}`,
        data: data,
    });
});



// @desc    Filter data by sector
// @route   GET /api/dashboard/sector/:sector
// @access  Public

const sectorFilter = asyncHandler(async (req, res, next) => {
    const { sector } = req.params;

    const data = await dataModel.find({
        sector: { $regex: sector, $options: "i" },
    });

    if (data.length === 0) return next(new errorResponse("No Data Found", 404));

    res.status(200).json({
        success: true,
        message: `Filtered by sector ${sector}`,
        data: data,
    });
});



// @desc    Filter data by region
// @route   GET /api/dashboard/region/:region
// @access  Public


const regionFilter = asyncHandler(async (req, res, next) => {
    const { region } = req.params;

    const data = await dataModel.find({
        region: { $regex: region, $options: "i" },
    });

    if (data.length === 0) return next(new errorResponse("No Data Found", 404));

    res.status(200).json({
        success: true,
        message: `Filtered by region ${region}`,
        data: data,
    });
});



// @desc    Filter data by source
// @route   GET /api/dashboard/source/:source
// @access  Public

const sourceFilter = asyncHandler(async (req, res, next) => {
    const { source } = req.params;

    const data = await dataModel.find({
        source: { $regex: source, $options: "i" },
    });

    if (data.length === 0) return next(new errorResponse("No Data Found", 404));

    res.status(200).json({
        success: true,
        message: `Filtered by source ${source}`,
        data: data,
    });
});



// @desc    Filter data by country
// @route   GET /api/dashboard/country/:country
// @access  Public

const countryFilter = asyncHandler(async (req, re, nexs) => {
    const { country } = req.params;

    const data = await dataModel.find({
        country: { $regex: country, $options: "i" },
    });

    if (data.length === 0) return next(new errorResponse("No Data Found", 404));

    res.status(200).json({
        success: true,
        message: `Filtered by country ${country}`,
        data: data,
    });
});



// export the functions
module.exports = {
    getData,
    yearFilter,
    topicFilter,
    sectorFilter,
    regionFilter,
    sourceFilter,
    countryFilter
}

