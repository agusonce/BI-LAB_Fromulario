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
		request.query("SELECT Id_Usuario,Nombre,Apellido,Usuario,Password,Estado FROM Usuarios WHERE Usuario='"+usuario+"' and Password = '"+pass+"'", function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	},
	PostUser: function(req,res){
		var usuario = req.body.user;
		var pass = req.body.password;
		let query = "INSERT INTO [dbo].[Horas] ([Id_Usuario],[Horas],[Id_Proyecto],[Id_Tarea],[Id_Cliente],[fecha],[Descripcion]) VALUES ('"+req.body.User+"','"+req.body.Hora+"','"+req.body.Proyecto+"','"+req.body.Tarea+"','"+req.body.Cliente+"','"+req.body.Fecha+"','"+req.body.Descripcion+"')";
		console.log(req.body);
		var request = new sql.Request();
		request.query(query, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	}	
};
module.exports = controller;