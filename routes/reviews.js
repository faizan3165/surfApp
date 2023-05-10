import { Router } from 'express';

const router = Router({ mergeParams: true });

router.get('/', (req, res) => {
	res.send('Hello from reviews route');
});

router.post('/', (req, res) => {
	res.send('Hello from reviews route create');
});

router.get('/:review_id/edit', (req, res) => {
	res.send('editing specific review');
});

router.put('/:review_id', (req, res) => {
	res.send('Updating the edited review');
});

router.delete('/:review_id', (req, res) => {
	res.send('Deleting the reviewed review');
});

export default router;
