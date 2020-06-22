'use strict'
var sql = require('../models/connection');  
var controller = {
	test: function(req, res){
		return res.status(200).send({
			message : 'hola agus'
		});
	},
	getClient: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT Id_Cliente Id,Cliente Value FROM [BI-LAB].dbo.Clientes", function (err, Client) {
            
            if (err) console.log(err)
            	console.log(Client);
            // send records as a response
            return res.status(200).send(Client);
            
        });
	}
};
module.exports = controller;