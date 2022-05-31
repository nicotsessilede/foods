// The file db.js looks like

const mongoose = require('mongoose');

mongoose.connect (process.env.MONGO_URI, {

useNewUrlParser: true,

useUnifiedTopology: true,

useFindAndModify: false,

useCreatelndex: true

}).then(()=>{ console.log('Connection successful!');

}).catch ((e) => { console.log('Connection failed!');

})
