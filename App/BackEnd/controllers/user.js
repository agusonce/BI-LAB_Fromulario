'use strict'
var sql = require('../models/connection');  
var controller = {
	test: function(req, res){
		return res.status(200).send({
			message : 'hola agus'
		});
	},
	getUser: function(req,res){
		var usuario = req.body.user;
		var pass = req.body.password;
		var request = new sql.Request();
		request.query("SELECT Nombre,Apellido,Usuario,Password,Estado FROM Usuarios WHERE Usuario='"+usuario+"' and Password = '"+pass+"'", function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	}
};
module.exports = controller;