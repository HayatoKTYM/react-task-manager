import { rest } from 'msw';

export const handlers = [
	rest.post('/api/favorite', (req, res, ctx) => {
		return res(ctx.status(200));
	}),
	rest.delete('/api/favorite', (req, res, ctx) => {
		return res(ctx.status(200));
	}),
];
