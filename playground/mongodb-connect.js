const {MongoClient,ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true },(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    //     }, (err, result) => {
    //         if(err){
    //             return console.log('Unable to insert todo', err);
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     });
    // Insert new doc into Users(name, age, location)
    db.collection('Users').insertOne({
        name: 'Josue',
        age: 23,
        location: 'Tijuana'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
    client.close();
});