var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb+srv://farid:1234@cluster0.d78e3.gcp.mongodb.net/todo_api?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('Connected to DB!');
}).catch(err => {
	console.log('ERROR:', err.message);
});

mongoose.Promise = Promise;

module.exports.Todo = require('./todos')