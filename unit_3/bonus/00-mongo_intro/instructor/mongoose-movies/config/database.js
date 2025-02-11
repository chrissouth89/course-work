const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/movies',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB')
});
