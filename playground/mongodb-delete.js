const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // deleteMany

    // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({ name: 'Andres' });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b9c44235ba6c9a75414c670") }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });



    // client.close();
});