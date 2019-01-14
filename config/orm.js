// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  
  //select all function
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??"; 
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    })
  },
  //insert a burger 
  create: function(tableInput, value, cb) {
    var queryString = "INSERT INTO ?? (burger_name) VALUES ?";
    
    connection.query(queryString, [tableInput, value], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // update a burger 
  update: function(tableInput, id, cb) {
    var queryString = "UPDATE ?? SET devoured=true WHERE id = ?"

    connection.query(queryString, [tableInput, id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
 
  //delete function
  // delete: function(table, id, cb) {
  //   var queryString = "DELETE FROM ?? WHERE id = ?";

  //   connection.query(queryString, [table, id], function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // }
};

// Export the orm object for the model (burgers.js).
module.exports = orm;
