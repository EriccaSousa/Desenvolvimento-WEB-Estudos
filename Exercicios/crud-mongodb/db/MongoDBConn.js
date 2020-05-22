var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

//conexão com o BD local
var mongoDB_URL = 'mongodb://127.0.0.1:27017/crud';
mongoose.connect(mongoDB_URL, { useNewUrlParser: true });

//Armazenando conexão em uma variável
var db = mongoose.connection;

//Listeners (oq esta acontecendo com mongo)
db.on('connected', () => {
    console.log('Mongoose Connected to ' + mongoDB_URL);
});
db.on('disconnected', () => {
    console.log('Mongoose Disconnected to ' + mongoDB_URL);
});
db.on('error', (err) => {
    console.log('Mongoose Error: ' + err);
});