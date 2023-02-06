const mongoose = require('mongoose');

// connection for cloud db
mongoose.connect('mongodb+srv://admin:CUJ8vZLG6TCCWzSv@cluster0.nvl52h1.mongodb.net/hospital_db');

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'error on connecting db'));

db.once('open', function(){
    console.log('Connected to DB');
})