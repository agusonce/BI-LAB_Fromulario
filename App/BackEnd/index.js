'use strict'
var app = require('./app');
var port = 3700;

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'bilab',
        password: 'bilab1569',
        server: 'localhost',
        port: 51256,
        database: 'NPuente',
      
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

		if (!err) {
			console.log('---------------base de datos servidor iniciado');
 
			app.listen(port, () => {
 				console.log('---------------servidor iniciado');
			});
 		}
        // create Request object
        var request = new sql.Request();
 			
           
        // query to the database and get the records
       // request.query('select * from COMITENTE', function (err, recordset) {
       //     if (err) console.log(err)
            // send records as a response
       //    console.log(recordset);
       //     
     //  });
       
    });





