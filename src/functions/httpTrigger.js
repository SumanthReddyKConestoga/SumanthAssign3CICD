const { app } = require('@azure/functions');

const httpTriggerHandler = async (request, context) => {
    context.log('HTTP trigger function processed a request.');
    return {
        status: 200,
        body: "Hello, World! Hey Sumanth How're you ....i think your id id 9040660"
    };
};

app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpTriggerHandler,
});

module.exports = httpTriggerHandler;
