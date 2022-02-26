const router = require('express').Router();
const {
  getCategories
} = require('../../controllers/categoryController');

// /api/categories
router.route('/').get(getCategories)

module.exports = router;