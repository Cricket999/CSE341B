const controller = {};
const client = require('../database/database');

controller.getAll = async function(req, res){
    users = await client.getAllUsers();
    res.send(users);
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
    user = await client.addUser(req, res)
    res.send(user)
};

module.exports = controller