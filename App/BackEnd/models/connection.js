'use strict'
 var sql = require("mssql");

    // config for your database
   var config = {
        user: 'agus',
        password: 'agus123',
        server: 'DESKTOP-3QSSO97',
        port: 1433,
        database: 'BI-LAB'
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

		if (!err) {
			console.log('---------------base de datos servidor iniciado');

 		}

    });	

module.exports = sql;	