const Router = require('express');
const router = new Router();
const {get, create} = require('../controllers/brandController');


router.post('/', create);
router.get('/', get);


module.exports = router;