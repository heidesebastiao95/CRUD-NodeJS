const express = require('express');
const router = express.Router();

router.get('/',(request, response, next)=>{
    response.redirect('/product-form');
   // response.send('<h1>Welcome My Friend!! 🖖🏽🖖🏽</h1>');
    
});

module.exports = router;