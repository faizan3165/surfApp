import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: String,
	password: String,
	userName: String,
	image: String,
	posts: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Post'
		}
	]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
