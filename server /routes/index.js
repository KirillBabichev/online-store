const Router = require('express');
const router = new Router();
const brandRoutes = require('./brandRoutes');
const deviceRoutes = require('./deviceRoutes');
const typeRoutes = require('./typeRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/type', typeRoutes);
router.use('/brand', brandRoutes);
router.use('/device', deviceRoutes);

module.exports = router;