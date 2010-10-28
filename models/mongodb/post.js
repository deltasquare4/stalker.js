var driver = require('../../vendor/mongoose/mongoose').Mongoose;
var db = driver.connect('mongodb://localhost/stalkerjs');

driver.model('Post', {
  
properties: ['body','creator_id', 'created_at'],

  indexes: ['created_at', 'creator_id'],

  methods: {
    save: function(fn){
      this.updated_at = new Date();
      this.__super__(fn);
    }
  }


});

module.exports = db.model('Post');
