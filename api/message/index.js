const conn = process.env.DATABASE_CONNECTION_STRING;

con.connect(function(err){
    if (err) throw err;
    console.log('connect')
});
    
module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API" + conn
    });
};