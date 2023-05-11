import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	body: String,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const reviewModel = mongoose.model('Review', ReviewSchema);

export default reviewModel;
