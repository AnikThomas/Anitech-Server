const express = require('express');
const contactRouter = express.Router();

contactRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the contacts to you');
})
.post((req, res) => {
    res.end(`Will add the contact: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contacts');
})
.delete((req, res) => {
    res.end('Deleting all contacts');
});

contactRouter.route('/:contactId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send the contact to you');
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end(`POST operation not supported on /contacts/:contactId`);
})
.put((req,res)=>{
    res.end(`Updating the contact ${req.params['partnerId']}Will update the contact description: ${req.body.description}`); 
})
.delete((req, res)=>{
    res.end('Deleting contact by Id');
})

module.exports = contactRouter;