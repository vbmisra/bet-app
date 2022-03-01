const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes.js');
const nomineeRoutes = require('./nomineeRoutes.js');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/nominees', nomineeRoutes);

module.exports = router;