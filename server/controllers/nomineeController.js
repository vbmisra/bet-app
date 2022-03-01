const {Nominee} = require('../models')

module.exports = {
    
    getNominees(req, res) {
      Nominee.find()
        .then((nominees) => res.json(nominees))
        .catch((err) => res.status(500).json(err));
    },

}