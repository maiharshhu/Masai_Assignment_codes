const Vehicle = require('../models/Vehicle');

// Example: Get vehicles with trips within a specific distance range
exports.getVehiclesByDistance = async (req, res) => {
    try {
        const { minDistance, maxDistance } = req.query;

        const vehicles = await Vehicle.find({
            "trips.distance": {
                $gte: parseFloat(minDistance), // Use $gte operator
                $lte: parseFloat(maxDistance)  // Use $lte operator
            }
        });

        res.status(200).json(vehicles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Example: Get vehicles of specific types using $in
exports.getVehiclesByTypes = async (req, res) => {
    try {
        const { types } = req.query; // Expecting comma separated string: 'car,truck'
        const typeArray = types.split(',');

        const vehicles = await Vehicle.find({
            type: { $in: typeArray } // Use $in operator
        });

        res.status(200).json(vehicles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};