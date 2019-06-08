const express = require('express');
const bodyParser = require('body-parser')

const promoRouter = express.Router()

promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Promotion is over')
})
.post((req,res,next) => {
    res.end('Will add promotional deal ' + req.body.name + ' at ' + req.body.details + '% off')
})
.delete((req,res,next) => {
    res.end('Deleting all promotions')
})

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('The promo code is ' + req.params.promoId)
})
.put((req,res,next) => {
    res.end('Updating promo code for ' + req.params.promoId)
})
.delete((req,res,next) => {
    res.end('Deleting promo code = ' + req.params.promoId)
})

module.exports = promoRouter;