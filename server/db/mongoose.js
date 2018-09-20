var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// 'mongodb://localhost:27017/TodoApp'
// 'mongodb://localhost:27017/TodoAppTest'
// 'mongodb://andmoraho:todoapp123@ds121982.mlab.com:21982/andmorahotodoapp'
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };