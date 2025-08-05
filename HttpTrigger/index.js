module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');
    context.res = {
        status: 200,
        body: "Hello, World! Hey Sumanth How're you ....i think your id id 9040660"
    };
};
