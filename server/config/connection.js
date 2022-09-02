const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jnmayhook:xYYG1HW2qTzndVsG@cluster0.6drdrzs.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;