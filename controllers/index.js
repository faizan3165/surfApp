import User from '../models/user.js';

export const postRegister = (req, res, next) => {
	const { username, password, email, image } = req.body;
	
    const newUser = new User({
        username,
		email,
		image
	});

	User.register(newUser, password, (err) => {
		if (err) {
			console.log('====================================');
			console.log(err.message);
			console.log('====================================');

			return next(err);
		}

		console.log('====================================');
		console.log('User registered successfully');
		console.log('====================================');

		res.redirect('/');
	});
};
