const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '1.0.0',
        title: 'API',
        description: 'CSE341 API'
    },
    host: 'cse341-second-project.onrender.com',
    schemes: ['https']};

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);