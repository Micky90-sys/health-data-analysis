const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/', dataController.saveData);
router.post('/check-threshold', dataController.checkThresholdAndNotify);

module.exports = router;
