var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, callback) {
        var query = "SELECT * FROM " + tableName;
        
        console.log("query: " + query);

        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    insertOne: function (tableName, colName, val, callback) {
        query = "INSERT INTO " + tableName;
        query += " (" + colName + ") ";
        query += "VALUES (";
        query += "?";
        query += ") ";

        console.log("query: " + query);

        connection.query(query, val, function (err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    updateOne: function (tableName, colName, colValue, condition, callback) {
        query = "UPDATE " + tableName;
        query += " SET " + colName + " = " + colValue;
        query += " WHERE " + condition;

        console.log("query: " + query);

        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);
        })

    }
}


module.exports = orm;