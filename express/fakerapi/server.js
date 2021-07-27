
const express = require("express");
const app = express();
var faker = require('faker');
const port=8000
let id=0;
let compid=0;
class User{
    constructor(){
        this.id=id++;
        this.firstname=faker.name.firstName();
        this.lastname=faker.name.lastName();
        this.phonenumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}
class Company{
    constructor(){
        this.id=compid++;
        this.name=faker.company.companyName();
        this.address=new Address();
        
    }
}
class Address{
    constructor(){
        this.city=faker.address.cityName()
        this.state=faker.address.state();
        this.country=faker.address.country();
    }
}
app.get("/api/users/new", (req, res) => {
    let x=new User();
    res.json( x );
});
app.get("/api/company/new", (req, res) => {
    let x=new Company();
    res.json( x );
});
app.get("/api/users/company", (req, res) => {
    let x=new User();
    let y=new Company();
    res.json( x,y );
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );