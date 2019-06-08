const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('All the leaders are here!')
})
.post((req,res,next) => {
    res.end('Will add leader ' + req.body.name + ' with details ' + req.body.description)
})
.delete((req,res,next) => {
    res.end('Deleting all leaders')
})

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Getting leader ' + req.params.leaderId)
})
.put((req,res,next) => {
    res.write('Updating leader ' + req.params.leaderId + '\n');
    res.end('Updated leader ' + req.params.leaderId + ' with new name = ' + req.body.name + ' and new details ' + req.body.description)
})
.delete((req,res,next) => {
    res.end('Deleted leader ' + req.params.leaderId)
})

module.exports = leaderRouter