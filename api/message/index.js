const connectionString = process.env.DATABASE_CONNECTION_STRING;

console.log(connectionString);
    
module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API"
    });
};