var driver = require('../../vendor/mongoose/mongoose').Mongoose;
var db = driver.connect('mongodb://localhost/stalkerjs');

driver.model('User', {
  
properties: ['login', 'first', 'last','sex','city', 'country', 'email', 'memeber_since', 'is_active', 'posts_counter', 'updated_at','imageUri', 'bio', {'skills': []}],

  indexes: ['login', [{'username':1},{unique: true}]],

  methods: {
    save: function(fn){
      this.updated_at = new Date();
      this.__super__(fn);
    }
  },

  getters: {
    full_name: function(){
      return this.first+' '+this.last;
    }
  }


});

module.exports = db.model('User');
