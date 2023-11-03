const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '1.0.0',
        title: 'API',
        description: 'CSE341 API'
    },
    host: 'cse341-second-project.onrender.com',
    schemes: ['https'],

    securityDefinitions: {
        oauth2: {
            type: 'oauth2',
            authorizationUrl: 'cse341-second-project.onrender.com/login',
            flow: 'accessCode'
        }
    }
};

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);