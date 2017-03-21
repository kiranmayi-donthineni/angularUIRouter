/**
 * Created by kavuri on 2/5/2017.
 */
var express = require('express');
var router = express.Router();

router.use('/', require('./companyRouter'));
router.use('/',require('./ceoRouter'));
module.exports = router;

