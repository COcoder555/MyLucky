const mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/MyLucky',
    {
        useNewParser: true,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useFindAndModify:true,
    }
);


module.exports = mongoose.connection;