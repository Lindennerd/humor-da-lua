const express = require('express');
const calendarController = require('../controllers/calendar');

const router = express.Router();

router.get('/', function(req, res, next) {
    const month = req.query.month 
        ? req.query.month
        : (new Date).getMonth() +1;

    calendarController.getMonth(month, response => {
        res.json(JSON.parse(response.body));
    });
});

module.exports = router;