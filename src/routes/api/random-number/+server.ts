import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const min = Number(url.searchParams.get('min') ?? '0');
	const max = Number(url.searchParams.get('max') ?? '1');

	if (isNaN(min) || isNaN(max) || max < min) {
		error(400, 'min and max must be numbers, and min must be less than max');
	}

    const d = max - min;
    const random = Math.random() * d + min;

    return new Response(random.toString());
}
