import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.send('Hello from posts route');
});

router.get('/new', (req, res) => {
	res.send('Hello from new route');
});

router.post('/', (req, res) => {
	res.send('Hello from post route');
});

router.get('/:id', (req, res) => {
	res.send('Hello from specific post route');
});

router.get('/:id/edit', (req, res) => {
	res.send('Hello from editing specific post route');
});

router.put('/:id', (req, res) => {
	res.send('Hello from updating the post');
});

router.delete('/:id', (req, res) => {
	res.send('Hello from deleting a post');
});

export default router;
