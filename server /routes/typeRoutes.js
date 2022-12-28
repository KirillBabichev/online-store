const Router = require('express');
const router = new Router();
const {get, create} = require('../controllers/typeController');


router.post('/', create);
router.get('/', get);

module.exports = router;