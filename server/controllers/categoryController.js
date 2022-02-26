const {Category} = require('../models')

module.exports = {
    
    getCategories(req, res) {
      Category.find()
        .then((categories) => res.json(categories))
        .catch((err) => res.status(500).json(err));
    },

}