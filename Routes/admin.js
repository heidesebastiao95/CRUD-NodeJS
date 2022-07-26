// import express from 'express';

const express = require('express');
const CategoryController = require('../Controllers/CategoryController');

const Route = express.Router();

Route.get('/',(request, response)=>{
    console.log("Home page");
});

Route.get('/categories',CategoryController.index);
Route.post('/categories',CategoryController.store);
Route.get('/categories/:category',CategoryController.find);
Route.put('/categories/:category', CategoryController.update);
Route.delete('/categories/:category', CategoryController.delete)


module.exports = Route;