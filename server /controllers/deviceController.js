const uuid = require('uuid');
const path = require('path');
const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');
class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info} = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpeg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
    
            const deviceItem = {
                name, 
                price, 
                brandId, 
                typeId, 
                img: fileName,
            };
    
            const device = await Device.create(deviceItem);
            return res.json(device); 
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {
    }

}

module.exports = new DeviceController()
