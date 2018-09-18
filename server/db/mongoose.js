var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// 'mongodb://localhost:27017/TodoApp'
// 'mongodb://andmoraho:todoapp123@ds121982.mlab.com:21982/andmorahotodoapp'
mongoose.connect('mongodb://andmoraho:todoapp123@ds121982.mlab.com:21982/andmorahotodoapp', { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };