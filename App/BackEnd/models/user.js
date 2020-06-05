'use strict'
 var sql = require("mssql");

    // config for your database
    var config = {
        user: 'bilab',
        password: 'bilab1569',
        server: 'localhost',
        port: 51256,
        database: 'AON',
      
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

		if (!err) {
			console.log('---------------base de datos servidor iniciado');

 		}

    });	

module.exports = sql;	