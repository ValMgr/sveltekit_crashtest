import type { PageLoad } from './$types';
import type { Person } from '@/lib/types';



export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch('/src/data/Users.json');
	const users: Person[] = await res.json();
	return { user: users[parseInt(params.id)] } ;
};
