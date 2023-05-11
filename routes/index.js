import { Router } from 'express';

const router = Router({ mergeParams: true });

// controllers
import { postRegister } from '../controllers/index.js';

// middlewares
import {errorHandler} from '../middlewares/index.js'

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Surf Shop' });
});

router.get('/register', (req, res) => {
	res.send('register route');
});

router.post('/register', errorHandler(postRegister));

router.get('/login', (req, res) => {
	res.send('login route');
});

router.post('/login', (req, res) => {
	res.send('login route post');
});

router.get('/forgot', (req, res) => {
	res.send('forgot password route');
});

router.put('/forgot', (req, res) => {
	res.send('edit user info');
});

router.get('/reset/:token', (req, res) => {
	res.send('reset password route');
});

router.put('/reset/:token', (req, res) => {
	res.send('reset password route');
});

router.get('/profile', (req, res) => {
	res.send('profile route');
});

router.put('/:user_id/profile', (req, res) => {
	res.send('profile update');
});

export default router;
