import type { PageLoad } from './$types';
import type { Person } from '@/lib/types';
import { isAuth } from '@/lib/services/auth';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
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
		users,
	};
};
