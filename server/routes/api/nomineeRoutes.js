const router = require('express').Router();
const {
  getNominees
} = require('../../controllers/nomineeController');

// /api/nominees
router.route('/').get(getNominees)

module.exports = router;