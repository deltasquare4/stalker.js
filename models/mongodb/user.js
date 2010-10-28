var driver = require('../../vendor/mongoose/mongoose').Mongoose;
var db = driver.connect('mongodb://localhost/stalkerjs');

driver.model('User', {
  
  properties: [],

  indexes: [],

  methods: {
    save: function(fn){
      this.updated_at = new Date();
      this.__super__(fn);
    }
  }


});

module.exports = db.model('User');
