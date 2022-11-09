import type { PageLoad } from './$types';
import { isAuth } from '@/lib/services/auth';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	if (isAuth()) {
		throw redirect(302, '/');
	}

	return {};
};
