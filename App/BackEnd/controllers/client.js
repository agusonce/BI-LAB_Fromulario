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
	},
	setClient: function(req,res){
		var client = req.body.Client;
		let query = "INSERT INTO [dbo].[Clientes] ([Cliente]) VALUES ('"+client+"')";
		var request = new sql.Request();
		request.query(query, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	},
	ListClient: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT Id_Cliente [Key],Cliente Value FROM [BI-LAB].dbo.Clientes C WHERE C.Id_Cliente!=1", function (err, Client) {
            
            if (err) console.log(err)
            	console.log(Client);
            // send records as a response
            return res.status(200).send(Client);
            
        });
	}
};
module.exports = controller;