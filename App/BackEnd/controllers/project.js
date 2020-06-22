'use strict'
var sql = require('../models/connection');  
var controller = {
	test: function(req, res){
		return res.status(200).send({
			message : 'hola agus'
		});
	},
	getProject: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT [Id_Proyecto] Id,[Proyecto] Value FROM [BI-LAB].[dbo].[Proyectos]", function (err, Project) {
            
            if (err) console.log(err)
            	console.log(Project);
            // send records as a response
            return res.status(200).send(Project);
            
        });
	}
};
module.exports = controller;