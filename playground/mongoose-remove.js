const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndDelete({ _id: '5ba1151ce484461b188cdbd8' }).then((todo) => {
//     console.log(todo);
// });

//Todo.findOneAndRemove
// Todo.findByIdAndRemove('5ba1151ce484461b188cdbd8').then((todo) => {
//     console.log(todo);
// });