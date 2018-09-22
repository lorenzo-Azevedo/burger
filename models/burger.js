var orm = require('../config/orm.js');

var burger = {
  all: function(cb){
      orm.all('burgers', function(res){
          cb(res);
      })
  },

  create: function(name,cb){
    orm.create('burgers',["burger", "eaten"], [name, false], cb);
    },

  update: function(id,cb){
      orm.update('burgers',id,cb);
  },
};
//   create: function(id,cb){
//       orm.update('burgers',id,cb);
//   },

module.exports = burger;