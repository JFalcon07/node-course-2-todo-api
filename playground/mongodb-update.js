const {MongoClient,ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true },(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b846d2cf2f5531f7f3ce256')
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b84496b9ce2f014545ad6f5')
    }, {
        $set: {
            name:"Josue"
        },
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    client.close();
});
