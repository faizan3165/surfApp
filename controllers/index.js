import User from '../models/user.js';

export const postRegister = async (req, res, next) => {
	const { username, password, email, image } = req.body;

	const newUser = new User({
		username,
		email,
		image
	});

	await User.register(newUser, password);
	res.redirect('/');
};
