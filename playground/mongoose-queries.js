const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5b9fc0b62e2a850a1858c06d2';

if (!ObjectID.isValid(id)) {
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((error) => console.log(error));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log(JSON.stringify(user, undefined, 2));
}).catch((error) => console.log(error));