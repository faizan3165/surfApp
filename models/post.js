import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: String,
	price: String,
	desc: String,
	images: [ String ],
	location: String,
	lat: Number,
	long: Number,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Review'
		}
	]
});

const postModel = mongoose.model('Post', PostSchema);

export default postModel;
