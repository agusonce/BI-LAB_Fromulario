'use strict'
var sql = require('../models/connection');  
var controller = {
	test: function(req, res){
		return res.status(200).send({
			message : 'hola agus'
		});
	},
	GetHours: function(req,res){
		var usuario = req.query.user;
		console.log("params",req.query);
		var request = new sql.Request();
		request.query("SELECT [Id_Hora],U.[Usuario],[Horas],P.[Proyecto],T.[Tarea],C.[Cliente],[fecha],[Descripcion] FROM [BI-LAB].[dbo].[Horas] H  inner join Proyectos P on P.Id_Proyecto=H.Id_Proyecto  inner join Usuarios U on U.Id_Usuario=H.Id_Usuario  inner join Tareas T on T.Id_Tarea=H.Id_Tarea  inner join Clientes C on C.Id_Cliente=H.Id_Cliente WHERE H.Id_Usuario="+usuario+"", function (err, recordset) {
            /****** Script for SelectTopNRows command from SSMS  ******/
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	},
	PostHours: function(req,res){
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
	},
	getListAllHours: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT TOP (50) row_number() OVER (ORDER BY U.Usuario,C.[Cliente],T.Tarea,[fecha]) [Key], [Id_Hora],U.[Usuario],[Horas],P.[Proyecto],T.[Tarea],C.[Cliente],[fecha],[Descripcion]  FROM [BI-LAB].[dbo].[Horas] H  INNER JOIN Clientes C On C.Id_Cliente=H.Id_Cliente  INNER JOIN Proyectos P ON P.Id_Proyecto=H.Id_Proyecto  INNER JOIN Tareas T ON T.Id_Tarea=H.Id_Tarea  INNER JOIN Usuarios U ON U.Id_Usuario=H.Id_Usuario", function (err, Hours) {
            
            if (err) console.log(err)
            	console.log(Hours);
            // send records as a response
            return res.status(200).send(Hours);
            
        });

	}	
};
module.exports = controller;