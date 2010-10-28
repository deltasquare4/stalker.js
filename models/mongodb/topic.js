var driver = require('../../vendor/mongoose/mongoose').Mongoose;
var db = driver.connect('mongodb://localhost/topics');

driver.model('Topics', {
  
  properties: ['title', 'description', 'posts_counter','creator', 'created_at', 'updated_at'],

  indexes: ['title', 'created_at', 'updated_at'],

  methods: {
    save: function(fn){
      this.updated_at = new Date();
      this.__super__(fn);
    }
  }


});

module.exports = db.model('Topics');
