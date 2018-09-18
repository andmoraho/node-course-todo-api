var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongodb://localhost:27017/TodoApp
mongoose.connect('mongodb://andmoraho:todoapp123@ds121982.mlab.com:21982/andmorahotodoapp' ||
    'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };