const connectionString = process.env.DATABASE_CONNECTION_STRING;

module.exports = async function (context, req) {

    const users = connectionString.connect(function(err){
        if (err) throw err;
      
        connectionString.query("SELECT * FROM USERS", function(err,result){
            if (err) throw err;
            console.log(result);
        });
    });

    context.res.json({
        text: "Hello from the API"
    });
};