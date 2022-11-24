import { redirect } from '@sveltejs/kit';
import { isAuth } from '@/lib/services/auth';
import type { PageLoad } from './$types';
import type { Person } from '@/lib/types';

export const load: PageLoad = async ({ params, fetch }) => {
	if (!isAuth()) {
		throw redirect(302, '/login');
	}

	const users: Person[] = await fetch('/src/data/Users.json')
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
			return [];
		});

	return {
		user: users[parseInt(params.id)],
	};
};
