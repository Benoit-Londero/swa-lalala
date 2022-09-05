const connectionString = process.env.DATABASE_CONNECTION_STRING;

connectionString.connect(function(err){
        if (err) throw err;
      
        connectionString.query("SELECT * FROM USERS", function(err,result){
            if (err) throw err;
            console.log(result);
        });
    });
    
module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API"
    });
};