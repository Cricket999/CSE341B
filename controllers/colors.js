const controller = {};
const client = require('../database/database');

controller.getAll = async function(req, res){
    try {
        colors = await client.getAllColors();
        res.send(colors);
    } catch (error) {
        res.status(500).json(error);
    }
};

controller.addColor = async function(req, res){
    /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
            $colorName: "Green",
            $hex: "008000",
        }
    } #swagger.responses[201] = {}
       */
    try {
        color = await client.addColor(req, res);
        res.send(color);
    } catch (error) {
        res.status(500).json(error);
    }
};

controller.editColor = async function(req, res){
    /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
            $colorName: "Green",
            $hex: "008000",
        }
    } #swagger.responses[204] = {}
       */
    try {
        color = await client.editColor(req, res);
        res.send(color);
    } catch (error) {
        res.status(500).json(error);
    }
};

controller.deleteColor = async function(req, res){
    try {
        color = await client.deleteColor(req, res)
        res.send(color)
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = controller