import type { PageLoad } from './$types';
import type { Person } from '@/lib/types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/src/data/Users.json');
	const users: Person[] = await res.json();
	return { users } ;
};
