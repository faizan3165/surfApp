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

export const getLogout = async (req, res, next) => {
	await req.logout(function(err) {
		if (err) {
			// Handle error
			console.error(err);
			return res.status(500).send('Error occurred during logout');
		}

		// Logout successful
		res.redirect('/');
	});
};
