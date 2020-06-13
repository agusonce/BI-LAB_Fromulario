'use strict'
var sql = require('../models/connection');  
var controller = {
	test: function(req, res){
		return res.status(200).send({
			message : 'hola agus'
		});
	},
	getTasks: function(req,res){
		
		var request = new sql.Request();
		request.query("SELECT Id_Tarea Id,Tarea Value FROM dbo.Tareas", function (err, Tasks) {
            
            if (err) console.log(err)
            	console.log(Tasks);
            // send records as a response
            return res.status(200).send(Tasks);
            
        });
	}
};
module.exports = controller;