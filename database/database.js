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
    res.status(201)
    return final;
}

module.exports = {getAllUsers, addUser}