const conn = process.env.DATABASE_CONNECTION_STRING;
    
module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API"
    });
};