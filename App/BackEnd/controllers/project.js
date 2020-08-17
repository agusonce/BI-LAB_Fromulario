'use strict'
var sql = require('../models/connection');  
var controller = {
	test: function(req, res){
		return res.status(200).send({
			message : 'hola agus'
		});
	},
	getListProject: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT [Id_Proyecto] [Key],[Proyecto] Value FROM [BI-LAB].[dbo].[Proyectos] WHERE Id_Proyecto!=1", function (err, Project) {
            
            if (err) console.log(err)
            	console.log(Project);
            // send records as a response
            return res.status(200).send(Project);
            
        });

	},
	getCustomerProject: function(req,res){
		//con Id para un INPUT type=Select
		let cliente = req.query.Cliente;
		console.log("getProject",req.query);
		var request = new sql.Request();
		let query = "SELECT PxC.[Id_Proyecto] Id,P.[Proyecto] Value FROM [BI-LAB].[dbo].[Proyectos_x_Clientes] PxC left join Proyectos P ON P.Id_Proyecto=PxC.Id_Proyecto WHERE [Id_Cliente]='"+cliente+"'";
		console.log("quey",query);
		
		request.query(query, function (err, Tasks) {
            
            if (err) console.log(err)
            	console.log(Tasks);
            // send records as a response
            return res.status(200).send(Tasks);
            
        });
	},
	getAllProject: function(req,res){
		//con Key (una tabla)
		let query = "SELECT [Id_Proyecto] [Id],[Proyecto] Value FROM [BI-LAB].[dbo].[Proyectos]";
		var request = new sql.Request();
		
		request.query(query, function (err, Projects) {            
            if (err) console.log(err)
            	console.log(Projects);
            // send records as a response
            return res.status(200).send(Projects);
            
        });
	},
	getProjectNotSetClient: function(req,res){
		let client = req.query.Client;
		let query = "SELECT  P.[Id_Proyecto] Id,[Proyecto] Value FROM  Proyectos P WHERE not Exists(SELECT * FROM [Proyectos_x_Clientes] PxC WHERE PxC.Id_Proyecto=P.Id_Proyecto AND Id_Cliente="+client+") or Id_Proyecto=1 order by Id_Proyecto";
		var request = new sql.Request();
		
		request.query(query, function (err, Projects) {            
            if (err) console.log(err)
            	console.log(Projects);
            // send records as a response
            return res.status(200).send(Projects);
            
        });
	},
	getListProjectClient: function(req,res){
		let query = "SELECT row_number() OVER (ORDER BY C.[Cliente], P.[Proyecto]) [Key],C.[Cliente] [Value1],P.[Proyecto] Value2  FROM [Proyectos_x_Clientes] P_x_C left join [dbo].Proyectos P on p.Id_Proyecto=P_x_C.Id_Proyecto left join [dbo].Clientes C on C.Id_Cliente = P_X_C.Id_Cliente  where C.Id_Cliente<>1 and P.Id_Proyecto<>1 order by C.cliente";
		var request = new sql.Request();
		
		request.query(query, function (err, Projects) {            
            if (err) console.log(err)
            	console.log(Projects);
            // send records as a response
            return res.status(200).send(Projects);
            
        });
	},
	setProjectClient: function(req,res){
		var client = req.body.Cliente;
		var project = req.body.Proyecto;
		let query = "INSERT INTO [Proyectos_x_Clientes] ([Id_Proyecto],[Id_Cliente]) VALUES("+project+","+client+")";
		console.log(req.body);
		var request = new sql.Request();
		request.query(query, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	},
	setProject: function(req,res){
		var project = req.body.project;
		let query = "INSERT INTO [BI-LAB].[dbo].[Proyectos] ([Proyecto]) VALUES ('"+project+"')";
		var request = new sql.Request();
		request.query(query, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	}
};
module.exports = controller;