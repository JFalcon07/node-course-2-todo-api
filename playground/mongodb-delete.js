const {MongoClient,ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true },(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    //deleteMany
    db.collection('Users').deleteMany({name: 'Josue'}).then((result) => {
        console.log(result);
    });
    // //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b84447cbdfb3b389c33d0a3")}).then((result)=> {
        console.log(result);
    });
    client.close();
});
