// const express = require("express");
import express  from "express";
const app = express();
//middleware
app.use(express.json());

import { faker } from "@faker-js/faker";


class User {
    constructor() {
        this.password = faker.password(),
        this.email = faker.email(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.lastName = faker.name.lastName(),
        this.firstName = faker.name.firstName(),
        this._id =faker.id()
    }
}

class Company{
    constructor() {
        this._id = faker._id()
        this.name = faker.company.companyName()
        this.address = 
        {
            street : faker.street.Street(),
            city : faker.address.city(),
            state : faker.state.state(),
            ZipCode : faker.zipCode(),
            country : faker.country(),
        }
    }
}




//req is short for request
// res is short for response

app.get("/api/Users/New", (req, res) => {
    console.log(req.body);
    // newUsers.push(req.body);
    const user = new User()
    res.json({
        "msg": "Successfully created new user",
        "newUser": user});
});

app.get("/api/Companies/NewCompanies", (req, res) => {
    const company = new Company()
    res.json({
        "msg": "Successfully created new company",
        "newCompanies": company});
});

app.get("/api/Companies/", (req, res) => {
    console.log();
    res.json(Users);
    });




//! this needs to be below the other code blocks
const server = app.listen (8000, () => 
console.log(`We are in the pipe, 5 by 5 : ${8000}`)
);