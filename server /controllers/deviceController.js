const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
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

            if(info) {
                info = JSON.parse(info);
                info.forEach(element => {
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: element.deviceId,
                    });
                });
            }
         
            return res.json(device); 
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        const { brandId, typeId, page, limit } = req.query;

        let devices;
        const pageNumber = page || 1;
        const userLimit = limit || 9;
 
        let offset = pageNumber * userLimit - userLimit;
        
        if(!brandId  && !typeId) {
            devices = await Device.findAndCountAll({limit: userLimit, offset});
        }

        if(brandId  && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit: userLimit, offset});
        }

        if(!brandId  && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit: userLimit, offset});
        }

        if(brandId  && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit: userLimit, offset});
        }
        
        return res.json(devices);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}],
            }
        )
        return res.json(device);
    }

}

module.exports = new DeviceController()
