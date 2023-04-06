const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');


// UPDATE USER

router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) 
      
});
module.exports = router;