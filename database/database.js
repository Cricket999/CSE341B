const {MongoClient} = require('mongodb');
const dotenv = require("dotenv");
var ObjectId = require("mongodb").ObjectId
dotenv.config();
const connectionString = process.env.DB_connectionString;
const client = new MongoClient(connectionString);

async function getAllUsers() {
    await client.connect();
    result = await client.db("CSE341DB2").collection("Users").find().toArray();
    final = JSON.stringify(result);
    return final;
}

async function addUser(req, res) {
    await client.connect();
    result = await client.db("CSE341DB2").collection("Users").insertOne(req.body);
    final = JSON.stringify(result);
    res.status(201);
    return final;
}

async function editUser(req, res) {
    await client.connect();
    query = {"_id" : new ObjectId(req.params.id)};
    result = await client.db("CSE341DB2").collection("Users").findOneAndUpdate(query, 
        {$set: {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "email": req.body.email,
            "address": req.body.address,
            "city": req.body.city,
            "state": req.body.state,
            "country": req.body.country
        }});
    final = JSON.stringify(result);
    res.status(204);
    return final;
}

async function deleteUser(req, res) {
    await client.connect();
    query = {"_id" : new ObjectId(req.params.id)};
    result = await client.db("CSE341DB2").collection("Users").findOneAndDelete(query);
    final = JSON.stringify(result);
    res.status(200);
    return final;
}

module.exports = {getAllUsers, addUser, editUser, deleteUser}