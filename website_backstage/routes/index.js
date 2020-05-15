var express = require('express');
var router = express.Router();
const cate = require('../controllers/cateController')
/* GET home page. */
router.get('/', cate.getCate)
router.get('/getpost', cate.getPostCate)
module.exports = router;
