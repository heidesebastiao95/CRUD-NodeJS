const express = require('express');
const router = express.Router();

router.get('/product-form',(resquest,response,next)=>{
    console.log("New Route!");
    response.send('<form action="/product-store" method="POST"><input type="text" name="product"><button type="submit">Send</button></form>');
    next();
});

router.post('/product-store',(request,response,next)=>{
    console.log(request.body);
   // response.redirect
})

module.exports = router;