'use strict'
var sql = require('../models/connection');  
var controller = {
	test: function(req, res){
		return res.status(200).send({
			message : 'hola agus'
		});
	},
	getAllTasks: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT Id_Tarea Id,Tarea Value FROM dbo.Tareas", function (err, Tasks) {
            
            if (err) console.log(err)
            	console.log(Tasks);
            // send records as a response
            return res.status(200).send(Tasks);
            
        });
	},
	getListAllTasks: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT Id_Tarea [Key],Tarea Value FROM dbo.Tareas", function (err, Tasks) {
            
            if (err) console.log(err)
            	console.log(Tasks);
            // send records as a response
            return res.status(200).send(Tasks);
            
        });
	},
	getTasks: function(req,res){
		let Proyecto = req.query.Project;
		console.log(req.query);
		var request = new sql.Request();


		let query = "SELECT pxt.[Id_Tarea] Id,[Tarea] Value FROM [BI-LAB].[dbo].[Proyectos_x_Tareas] pxt inner join Tareas T on t.Id_Tarea=pxt.Id_Tarea WHERE pxt.Id_Proyecto = '"+Proyecto+"'";
		request.query(query, function (err, Tasks) {
            
            if (err) console.log(err)
            // send records as a response
            return res.status(200).send(Tasks);
            
        });
	},
	getTaskNotSetProject: function(req,res){
		let Project = req.query.Project;
		let query = "SELECT  T.[Id_Tarea] Id,[Tarea] Value FROM  Tareas T WHERE not Exists(SELECT * FROM [Proyectos_x_Tareas] PxC WHERE  Id_Proyecto="+Project+" AND PxC.Id_Tarea=T.Id_Tarea) or Id_Tarea=1 order by Id_Tarea";
		var request = new sql.Request();
		
		request.query(query, function (err, Tasks) {            
            if (err) console.log(err)
            	console.log(Tasks);
            // send records as a response
            return res.status(200).send(Tasks);
            
        });
	},
	setTask: function(req,res){
		var task = req.body.task;
		let query = "INSERT INTO [BI-LAB].[dbo].[Tareas] ([Tarea]) VALUES ('"+task+"')";
		var request = new sql.Request();
		request.query(query, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            return res.status(200).send(recordset);
            
        });
	},
	setTaskProject: function(req,res){
		var task = req.body.Task;
		var project = req.body.Project;
		let query = "INSERT INTO [BI-LAB].[dbo].[Proyectos_x_Tareas] ([Id_Proyecto],[Id_Tarea])  VALUES("+project+","+task+")";
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