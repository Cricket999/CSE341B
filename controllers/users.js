const controller = {};
const client = require('../database/database');

controller.getAll = async function(req, res){
    try {
        users = await client.getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

controller.addUser = async function(req, res){
    /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
            $firstName: "John",
            $lastName: "Doe",
            $email: "johndoe@gmail.com",
            $address: "1 Test Street",
            $city: "Portland",
            $state: "Oregon",
            $country: "United States of America"
        }
    } #swagger.responses[201] = {}
       */
    try {
        user = await client.addUser(req, res);
        res.send(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

controller.editUser = async function(req, res){
    /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
            $firstName: "Jane",
            $lastName: "Doe",
            $email: "janedoe@gmail.com",
            $address: "2 Test Street",
            $city: "Portland",
            $state: "Oregon",
            $country: "United States of America"
        }
    } #swagger.responses[204] = {}
       */
    try {
        user = await client.editUser(req, res);
        res.send(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

controller.deleteUser = async function(req, res){
    try {
        user = await client.deleteUser(req, res)
        res.send(user)
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = controller